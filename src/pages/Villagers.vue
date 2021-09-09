<template>
  <div>
    <app-navbar />
    <app-header title="Villagers" />
    <villagers-table />
    <app-footer />
  </div>
</template>

<script>
import Vue from 'vue';
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import AppNavbar from '../components/AppNavbar.vue';
import VillagersTable from '../components/VillagersTable.vue';

export default Vue.extend({
  name: 'Villagers',
  components: {
    AppFooter,
    AppHeader,
    AppNavbar,
    VillagersTable,
  },
});
</script>