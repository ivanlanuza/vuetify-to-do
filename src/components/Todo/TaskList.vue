<template>
    <v-list flat >
        <task 
            v-for="task in $store.state.tasks"
            :key=task.id
            :task="task"
        />
    </v-list>
</template>

<script>
export default {
    components: {
      'task': require('@/components/Todo/TaskListTask.vue').default,
    }   
}
</script>

<style>

</style>