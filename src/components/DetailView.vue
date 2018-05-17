<template>
  <div class="card-image">
  </div>
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


</style>
