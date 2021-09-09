<template>
  <nc-container>
      <nc-row>
        <nc-column>  
            <nc-button
                variant="primary"
                @click="navigateTo('/villagers')"
            >
                Villagers
            </nc-button>
            <nc-button
                variant="primary"
                @click="navigateTo('/art')"
            >
                Art
            </nc-button>
            <nc-button
                variant="primary"
                @click="navigateTo('/fossils')"
            >
                Fossils
            </nc-button>
        </nc-column>
      </nc-row>
  </nc-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'AppNavbar',
  methods: {
      navigateTo(path) {
          if (this.$router.currentRoute.path === path) {
              return;
          }
          this.$router.push(path);
      },
  },
});
</script>