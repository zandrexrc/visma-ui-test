<template>
  <div>
    <app-navbar />
    <app-header title="Art" />
    <art-table />
    <app-footer />
  </div>
</template>

<script>
import Vue from 'vue';
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import AppNavbar from '../components/AppNavbar.vue';
import ArtTable from '../components/ArtTable.vue';

export default Vue.extend({
  name: 'Art',
  components: {
    AppFooter,
    AppHeader,
    AppNavbar,
    ArtTable,
  },
});
</script>