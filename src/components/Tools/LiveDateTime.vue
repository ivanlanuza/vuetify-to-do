<template>
  <div class="text-caption ml-4">
      {{ date }}
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
    data () {
        return {
            date: ''
        }
    },
    methods: {
        getDate() {
            this.date = format(new Date(), 'MMMM dd, yyyy H:mm:ss');
            setTimeout(this.getDate, 1000);
        }
    },
    mounted() {
        this.getDate();
    }
}
</script>

<style>

</style>