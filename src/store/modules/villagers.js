import { compare, getVillagerProperty } from '../../utils';

const villagersData = require('../../assets/villagers.json');
const villagerObjects = Object.values(villagersData);

export const villagersModule = {
  namespaced: true,

  state: {
    allVillagers: villagerObjects,
    displayedVillagers: villagerObjects,
  },

  getters: {
    getVillager(state, id) {
      return state.allVillagers.find(villager => villager.id === id);
    },

    getDisplayedVillagersCount(state) {
      return state.displayedVillagers.length;
    }
  },

  mutations: {
    setVillagers(state, villagers) {
      state.allVillagers = villagers;
    },
    
    sortVillagers(state, payload) {
      const sortBy = payload.sortBy;
      const sortDirection = payload.sortDirection;
      let villagers = state.displayedVillagers;

      villagers.sort((a, b) => 
        compare(getVillagerProperty(a, sortBy), getVillagerProperty(b, sortBy), sortDirection)
      );

      state.displayedVillagers = villagers;
    },

    filterVillagers(state, filters) {
      let villagers = state.allVillagers;
      let filter = '';

      const numFilters = 4;
      for (let i = 0; i < numFilters; i++) {
        if (filters[i]) {
          filter = new RegExp(filters[i], 'i');
          villagers = villagers.filter(v => filter.test(getVillagerProperty(v, i)));
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
};