<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <bl_og />
  <!-- <div class="appPage">
    <router-view/>
  </div> -->
</template>

<script>
import bl_og from './views/bl_og.vue'

export default {
  name: 'App',
  components: {
    bl_og
  }    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
