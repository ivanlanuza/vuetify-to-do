<template>
    <v-text-field
        v-model="newTaskTitle"
        @keyup.enter="addTask"
        outlined
        label="add a task"
        class="pa-3"
        hide-details
        clearable
    >
        <template v-slot:append>
            <v-icon
                @click="addTask"
                :disabled="emptyTask"
                color="primary"
            >
            mdi-plus
            </v-icon>
        </template>
    </v-text-field>  
</template>

<script>
    export default {
        data() {
            return {
            newTaskTitle: '',
            newMessage: ''
            }
        },
        computed: {
            emptyTask() {
                return !this.newTaskTitle;
            }
        },
        methods: {
            addTask() {
                if (!this.emptyTask) {
                    this.newMessage = 'Task successfuully added!';
                    this.$store.dispatch('addTask', this.newTaskTitle, this.newMessage);
                    this.newTaskTitle = '';
                }
            },
        },
    }
</script>

<style>
</style>