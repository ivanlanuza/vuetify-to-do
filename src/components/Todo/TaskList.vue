<template>
    <v-list flat >
        <draggable
            v-model="tasks"
            handle=".handle"
        >
            <task 
                v-for="task in tasks"
                :key=task.id
                :task="task"
            />
        </draggable>
    </v-list>
</template>

<script>
import draggable from 'vuedraggable';

export default {
    components: {
      'task': require('@/components/Todo/TaskListTask.vue').default,
      draggable,
    },
    computed: {
        tasks: {
            get() {
                return this.$store.getters.taskFiltered
            },
            set(value) {
                this.$store.dispatch('setTasks', value)
            }
        }
    }   
}
</script>

<style>

</style>