import { compare, getFossilProperty } from '../../utils';

const fossilsData = require('../../assets/fossils.json');
const fossilObjects = Object.values(fossilsData);

// Add unique ID to each fossil
for (let i = 0; i < fossilObjects.length; i++) {
    let newFossilObject = fossilObjects[i];
    newFossilObject.id = i;
    fossilObjects[i] = newFossilObject;
}

export const fossilsModule = {
  namespaced: true,

  state: {
    allFossils: fossilObjects,
    displayedFossils: fossilObjects,
  },

  getters: {
    getFossil(state, id) {
      return state.allFossils.find(fossil => fossil.id === id);
    },

    getDisplayedFossilsCount(state) {
      return state.displayedFossils.length;
    }
  },

  mutations: {
    setFossils(state, fossils) {
      state.allFossils = fossils;
    },
    
    sortFossils(state, payload) {
      const sortBy = payload.sortBy;
      const sortDirection = payload.sortDirection;
      let fossils = state.displayedFossils;

      fossils.sort((a, b) => 
        compare(getFossilProperty(a, sortBy), getFossilProperty(b, sortBy), sortDirection)
      );

      state.displayedFossils = fossils;
    },

    filterFossils(state, filters) {
      let fossils = state.allFossils;
      let filter = '';

      const numFilters = 4;
      for (let i = 0; i < numFilters; i++) {
        if (filters[i]) {
          filter = new RegExp(filters[i], 'i');
          fossils = fossils.filter(f => filter.test(getFossilProperty(f, i)));
        }
      }

      state.displayedFossils = fossils;
    },
  },

  actions: {
    setFossils(context, fossils) {
      context.commit('setFossils', fossils);
    },

    sortFossils(context, payload) {
      context.commit('sortFossils', payload);
    },

    filterFossils(context, filters) {
      context.commit('filterFossils', filters);
    },
  },
};