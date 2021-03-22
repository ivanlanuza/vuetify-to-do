<template>
  <div class="home pt-6">
    <add-task/>
    <task-list v-if="$store.state.tasks.length"/>
    <no-task v-else />
    
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {
      'add-task': require('@/components/Todo/AddTask.vue').default,
      'task-list': require('@/components/Todo/TaskList.vue').default,
      'no-task': require('@/components/Todo/NoTask.vue').default,
    }
  }
</script>

<style>

</style>