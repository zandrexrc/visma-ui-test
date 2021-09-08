<template>
  <div id="app">
    <AppHeader />
    <AppTable />
    <AppFooter />
  </div>
</template>

<script>
import Vue from 'vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppTable from './components/AppTable.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppFooter,
    AppHeader,
    AppTable,
  },
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
