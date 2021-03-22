import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
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
    ],
    snackbar: {
      show: false,
      message: '',
    }
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      };
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
      commit('addTask', newTaskTitle);
      commit('showSnackbar', 'Task added.');
    },
    deleteTask({commit}, id) {
      commit('deleteTask', id);
      commit('showSnackbar', 'Task deleted.');
    },
    editTask({commit}, payload) {
      commit('editTask', payload);
      commit('showSnackbar', 'Task edited.');      
    },
    updateDueDate({commit}, payload) {
      commit('updateDueDate', payload);
      commit('showSnackbar', 'Due Date Changed.');      
    }
  },
  getters: {

  },
  modules: {
  }
})
