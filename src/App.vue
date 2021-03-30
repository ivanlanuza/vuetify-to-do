<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer" 
      app
      mobile-breakpoint="768"
    >
    <v-img
      height="120"
      src="gradient.png"
      class="pa-4 pt-4"
    >
      <v-avatar size=48>
        <img
          src="profile.jpg"
          alt="Ivan Lanuza"
          class="mb-4"
        >
      </v-avatar>
      <div class="text-subtitle-2 white--text">Michael Scott</div>
      <div class="text-caption white--text">michael@office.com</div>  
      


    </v-img>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <BR/><BR/><BR/>
      <div class="text-caption"><live-date-time/></div>  

    </v-navigation-drawer>


    <v-app-bar
        app
        color="primary"
        dark
        prominent
        :height="$route.path === '/' ? '190' : '120'"
        src="sky.jpg"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.9), rgba(128,208,199,.9)"
          ></v-img>
        </template>

        <v-container class="pa-0 mt-3 header-container">
          <v-row>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <search/>
          </v-row>
          <v-row class="ml-0 text-h3">
            <v-app-bar-title>{{ $store.state.appTitle }}</v-app-bar-title>
          </v-row>
          <v-row v-if="$route.path === '/'">
            <add-task/>
          </v-row>
        </v-container>
      </v-app-bar>



    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Search from './components/Tools/Search.vue'
  export default {
    data: () => ({ 
      drawer: null,
      items: [
        { title: 'To Do', icon: 'mdi-format-list-checks', to: "/" },
        { title: 'About', icon: 'mdi-help-box', to: "/about" },
        { title: 'Settings', icon: 'mdi-close-octagon', to: "/settings" },
      ]     
    }),
    components: {
      'add-task': require('@/components/Todo/AddTask.vue').default,
      'snackbar': require('@/components/Shared/Snackbar.vue').default,
      'live-date-time': require('@/components/Tools/LiveDateTime.vue').default,
      'search': require('@/components/Tools/Search.vue').default
    },
    mounted() {
      this.$store.dispatch('getTasks')
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Open+Sans+Condensed:wght@700&family=Poppins:wght@300;400&family=Ubuntu:wght@300&display=swap');

.v-application {
   font-family: 'Poppins', 'Roboto', 'Open Sans Condensed', sans-serif !important;
 }

 .v-app-bar-title__content {
   width: 140px !important;
 }

 .header-container {
   max-width: none !important;
 }
</style>