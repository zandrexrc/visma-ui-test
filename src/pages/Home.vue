<template>
    <nc-container id="container">
        <nc-row>
            <nc-column>
                <img 
                    src="../assets/acnh-logo.png" 
                    alt="acnh-logo"
                    width="300"
                >
            </nc-column>
        </nc-row>
        <nc-row>
            <nc-column>
                <nc-button-group id="buttons">
                    <router-link to="/villagers">
                        <nc-button>Villagers</nc-button>
                    </router-link>
                    <router-link to="/art">
                        <nc-button>Art</nc-button>
                    </router-link>
                    <router-link to="/fossils">
                        <nc-button>Fossils</nc-button>
                    </router-link>
                </nc-button-group>
            </nc-column>
        </nc-row>
    </nc-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
});
</script>

<style scoped>
#container {
    height: calc(100vh - 40px);
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
}

#buttons {
    margin-top: 30px;
}
</style>