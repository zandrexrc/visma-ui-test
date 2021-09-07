<template>
  <div id="app">
    <Header />
    <Table />
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Table from './components/Table.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Footer,
    Header,
    Table,
  }
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
