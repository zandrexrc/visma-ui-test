import Vue from 'vue';
import Vuex from 'vuex';
import { compare, getProperty } from '../utils';

Vue.use(Vuex);
const testData = require('../assets/data.json');


// Export store
export default new Vuex.Store({
  state: {
    villagers: Object.values(testData),           // A list of ALL villagers
    displayedVillagers: Object.values(testData),  // Villagers visible on the table
  },
  getters: {
    getVillager(state, id) {
      return state.villagers.find(villager => villager.id === id);
    },
    getDisplayedVillagersCount(state) {
      return state.displayedVillagers.length;
    }
  },
  mutations: {
    setVillagers(state, villagers) {
      state.villagers = villagers;
    },
    sortVillagers(state, payload) {
      const sortBy = payload.sortBy;
      const sortDirection = payload.sortDirection;
      let villagers = state.displayedVillagers;

      villagers.sort((a, b) => 
        compare(getProperty(a, sortBy), getProperty(b, sortBy), sortDirection)
      );

      state.displayedVillagers = villagers;
    },
    filterVillagers(state, filters) {
      let villagers = state.villagers;
      let filter = '';

      const numFilters = 4;
      for (let i = 0; i < numFilters; i++) {
        if (filters[i]) {
          filter = new RegExp(filters[i], 'i');
          villagers = villagers.filter(v => filter.test(getProperty(v, i)));
        }
      }

      state.displayedVillagers = villagers;
    },
  },
  actions: {
    setVillagers(context, villagers) {
      context.commit('setVillagers', villagers);
    },
    sortVillagers(context, payload) {
      context.commit('sortVillagers', payload);
    },
    filterVillagers(context, filters) {
      context.commit('filterVillagers', filters);
    },
  },
});