import Vue from 'vue';
import Vuex from 'vuex';
import { villagersModule } from './modules/villagers';
import { fossilsModule } from './modules/fossils';
import { artModule } from './modules/art';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    villagers: villagersModule,
    fossils: fossilsModule,
    art: artModule,
  },
});