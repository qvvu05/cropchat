<template>
  <ul class="list">
  </ul>
</template>
<script>
  import data from '../data'
  export default {
    methods:{
      displayDetails (id) {
        this.$router.push({name: 'detail', params:{id:id}})
      }
    },
    data() {
      return {
        'picture': data.pictures
      }
    }
  }
</script>
<style scoped>
  .list {
    width: 100%;
    padding: 0;
  }

</style>
