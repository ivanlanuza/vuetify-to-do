<template>
    <v-text-field
        v-model="newTaskTitle"
        @keyup.enter="addTask"
        outlined
        placeholder="add a task"
        class="pa-3 add-field"
        hide-details
        clearable
        :name="Math.random()"
    >
        <template v-slot:append>
            <v-icon
                @click="addTask"
                :disabled="emptyTask"
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
    .add-field.v-input--is-focused .v-input__control {
        background: rgba(31,94,129, 0.5) !important;
    }
</style>