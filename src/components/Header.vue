<template>
  <nc-container>
    <nc-row>
        <nc-column>
            <img 
                src="../assets/acnh-logo.png" 
                alt="acnh-logo"
                width="200"
            >
        </nc-column>
    </nc-row>
    <nc-row>
        <nc-column>
            <h1>Villagers list</h1>
        </nc-column>
    </nc-row>
  </nc-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
});
</script>
