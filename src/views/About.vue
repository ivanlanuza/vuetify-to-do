<template>
  <div class="about pa-6">
    <h2>About {{ $store.state.appTitle }}</h2>
    <p>This simple To Do list is made using Vue.js.  
      Your data is protected and will not be saved in the cloud.  
      Your data will only stay in your local browser.  
      This app works in mobile, tablet, and desktop devices
    </p>
    <p>Full code repository can be found in: 
        <a href="https://github.com/ivanlanuza/vuetify-to-do" class="text-subtitle-2">
        https://github.com/ivanlanuza/vuetify-to-do
        </a>
    </p>
    <BR/>
    <h4>Features Available:</h4>
    <ul class="text-body-2">
      <li>Responsive UI design</li>
      <li>Add Task</li>
      <li>Edit Task with Dialog</li>
      <li>Add due date to task with Date Picker</li>
      <li>Delete Task with Modal</li>
      <li>Sort Task Order with draggable</li>
      <li>Filter/Search Tasks</li>
      <li>Snackbar notifications</li>
      <li>Drawer show/hide</li>
      <li>Protected Settings Page</li>
      <li>Public About Page</li>
      <li>Show local time</li>
      <li>State Management: Mutations, Actions, Getters, Setters, Computed</li>
      <li>Local Browser Storage</li>
    </ul>
    <BR/><BR/>
    <h4>Plug-ins Used:</h4>
    <ul class="text-body-2">
      <li>vuex for state management</li>
      <li>vue-router for easy routing</li>
      <li>vuetify for UI components</li>
      <li>date-fns for date formating</li>
      <li>vuedraggable for item sorting</li>
      <li>localbase for persistent storage</li>
    </ul>
    <BR/><BR/>
    <h4>Wishlist Features:</h4>
    <ul class="text-body-2">
      <li>Password Protection</li>
      <li>Change Name/Avatar</li>
      <li>Sync to cloud back-end</li>
      <li>Hide completed tasks</li>
      <li>Add tags/projects to tasks</li>
      <li>Filter by Task Due Date</li>
      <li>Week / Today View </li>
    </ul>

  </div>
</template>

<script>
  import { myConsole } from '@/plugins/checkpass.js';

  export default {
    mounted() {
      myConsole();
    }    
  }
</script>

