<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Vuetify To Do
          </v-list-item-title>
          <v-list-item-subtitle>
            Best App ever!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

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
    </v-navigation-drawer>


    <v-app-bar
        app
        color="primary"
        dark
        prominent
        src="sunflowers.png"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>Vuetify Todo</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>



    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
        { title: 'To Do', icon: 'mdi-format-list-checks', to: "/" },
        { title: 'About', icon: 'mdi-help-box', to: "/about" },
      ],      
    }),
    components: {
      'snackbar': require('@/components/Shared/Snackbar.vue').default,
    }   
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Open+Sans+Condensed:wght@700&family=Poppins:wght@300;400&family=Ubuntu:wght@300&display=swap');

.v-application {
   font-family: 'Poppins', 'Roboto', 'Open Sans Condensed', sans-serif !important;
 }
</style>