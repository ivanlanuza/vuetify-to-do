<template>
  <div class="home pt-6 pl-2 pr-2">

    <task-list v-if="$store.state.tasks.length"/>
    <no-task v-else />
    <button-done-sorting v-if="$store.state.sorting"/>
  </div>
</template>

<script>
  import { myConsole } from '@/plugins/checkpass.js';

  export default {
    name: 'Home',
    components: {
      'task-list': require('@/components/Todo/TaskList.vue').default,
      'no-task': require('@/components/Todo/NoTask.vue').default,
      'button-done-sorting': require('@/components/Todo/TaskListButtonDone.vue').default,
    },
    mounted() {
      myConsole();
    }    
  }
</script>

<style>

</style>