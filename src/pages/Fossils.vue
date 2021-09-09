<template>
  <div>
    <app-navbar />
    <app-header title="Fossils" />
    <fossils-table />
    <app-footer />
  </div>
</template>

<script>
import Vue from 'vue';
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import AppNavbar from '../components/AppNavbar.vue';
import FossilsTable from '../components/FossilsTable.vue';

export default Vue.extend({
  name: 'Fossils',
  components: {
    AppFooter,
    AppHeader,
    AppNavbar,
    FossilsTable,
  },
});
</script>