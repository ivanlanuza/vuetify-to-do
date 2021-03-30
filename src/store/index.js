import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')
db.config.debug = false

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    searchEntry: null,
    tasks: [
      /*
      {
        id: 1,
        title: 'Wake Up',
        done: false,
        dueDate: '2021-03-21' 
      },
      {
        id: 2,
        title: 'Get Bananas',
        done: false,
        dueDate: '2021-03-22' 
      },
      {
        id: 3,
        title: 'Eat Bananas',
        done: false,
        dueDate: null
      },
      */
    ],
    snackbar: {
      show: false,
      message: '',
    },
    sorting: false
  },
  mutations: {
    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
    setSearch(state, value) {
      state.searchEntry = value;
      console.log(state.searchEntry);
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    clickItem(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done;      
      if (task.done == true) {
        state.snackbar.show = true;
        state.snackbar.message = 'Nice!';         
      }
    },     
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    editTask(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.title = payload.title
    },
    updateDueDate(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0]
      task.dueDate = payload.dueDate
    },    
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    showSnackbar(state, newMessage) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.message = newMessage; 
      }, timeout)
    },
    closeSnackbar(state) {
      state.snackbar.show = false;
    }       
  },
  actions: {
    addTask({commit}, newTaskTitle, newMessage) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      };
      
      db.collection('tasks').add(newTask).then( ()=> {
        commit('addTask', newTask);
        commit('showSnackbar', 'Task added.');
      })
    },
    clickItem({state, commit}, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      db.collection('tasks').doc({id:id}).update({done: !task.done}).then(()=>{
        commit('clickItem', id)
      })  
    },    
    deleteTask({commit}, id) {
      db.collection('tasks').doc({id:id}).delete().then(()=>{
        commit('deleteTask', id);
        commit('showSnackbar', 'Task deleted.');     
      })  
    },
    editTask({commit}, payload) {
      db.collection('tasks').doc({id:payload.id}).update({title: payload.title}).then(()=>{
        commit('editTask', payload);
        commit('showSnackbar', 'Task edited.');   
      })  
    },
    updateDueDate({commit}, payload) {
      db.collection('tasks').doc({id:payload.id}).update({dueDate: payload.dueDate}).then(()=>{
        commit('updateDueDate', payload);
        commit('showSnackbar', 'Due Date Changed.');
      })        
    },
    setTasks({commit}, tasks) {
      db.collection('tasks').set(tasks);
      commit('setTasks', tasks)
    },    
    getTasks({commit}) {
      db.collection('tasks').get().then(tasks => {
        commit('setTasks', tasks);
      })
    }
  },
  getters: {
    taskFiltered(state) {
      if(!state.searchEntry) {
        return state.tasks
      }
        return state.tasks.filter(task => 
          task.title.toLowerCase().includes(state.searchEntry.toLowerCase())
        )
    }
  },
  modules: {
  }
})
