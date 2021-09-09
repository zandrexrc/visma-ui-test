<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  padding: 20px !important;
  background-color: #fff;
}
</style>
