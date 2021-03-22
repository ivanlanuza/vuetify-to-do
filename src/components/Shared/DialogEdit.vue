<template>
    <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Edit Task
        </v-card-title>
        <v-card-text>
          <v-text-field 
            v-model="taskTitle"
            @keyup.enter="editTask()"
            @keyup.esc="$emit('close')"
            autofocus
          />
        </v-card-text>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            @click="$emit('close')"
          >
            Cancel
          </v-btn>
          <v-btn
            color="success"
            text
            @click="editTask()"
            :disabled="validateTaskTitle"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>  
</template>

<script>
export default {
    data () {
      return {
        taskTitle: null
      }
    },
    computed: {
      validateTaskTitle() {
        return !this.taskTitle || this.taskTitle == this.task.title
      }
    },
    props: ['task'],
    mounted() {
      this.taskTitle = this.task.title
    },
    methods: {
      editTask() {
        if (!this.validateTaskTitle) {
          let payload = {
            id: this.task.id,
            title: this.taskTitle
          }
          this.$store.dispatch('editTask', payload)
          this.$emit('close')
        }
      }
    }

}
</script>

