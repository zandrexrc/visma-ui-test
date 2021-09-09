<template>
  <nc-container id="appHeader">
    <nc-row>
        <nc-column>
            <h1>{{ title }}</h1>
        </nc-column>
    </nc-row>
  </nc-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'AppHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
#appHeader {
  margin-top: 30px;
}
</style>