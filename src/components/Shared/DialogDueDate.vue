<template>
      <v-dialog
        ref="dialog"
        :value="true"
        persistent
        width="290px"
      >
        <v-date-picker
          v-model="date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="$emit('close')"            
          >
            Cancel
          </v-btn>
          <v-btn
            @click="saveDueDate()"
            :disabled="validateDueDate"
            text
            color="primary"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>  
</template>

<script>
export default {
    props: ['task'],
    data () {
      return {
        date: null
      }
    },
    mounted() {
        if(this.task.dueDate) {
            this.date = this.task.dueDate;
        }
    },
    methods: {
        saveDueDate() {
            let payload = {
                id: this.task.id,
                dueDate: this.date
            }
            this.$store.dispatch('updateDueDate', payload);
            this.$emit('close');
        }
    },
    computed: {
      validateDueDate() {
        return this.date == this.task.dueDate
      }
    }    
}
</script>

<style>

</style>