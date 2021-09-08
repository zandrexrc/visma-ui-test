<template>
  <nc-container id="footer">
    <nc-row>
        <nc-column>
            Data from 
            <a href="https://github.com/alexislours/ACNHAPI" target="_blank">ACNH API</a>
        </nc-column>
    </nc-row>
  </nc-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'AppFooter',
});
</script>

<style scoped>
#footer {
    margin-top: 20px;
}
</style>
