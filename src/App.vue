<template>
   <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: Header
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
