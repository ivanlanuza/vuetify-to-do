import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/public',
    name: 'Public',
    component: () => import(/* webpackChunkName: "public" */ '../views/Public.vue')
  },  
  {
    path: '/protected',
    name: 'Protected',
    component: () => import(/* webpackChunkName: "public" */ '../views/Protected.vue')
  }   
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${ process.env.VUE_APP_TITLE} - ${ to.name}`
  var logIn = true
  var protected_routes = ['Protected']
  if(logIn === false || protected_routes.includes(to["name"])){
    //console.log("Access not allowed.")
    router.push("/public")
  }  else {
    next()
  }
});

export default router
