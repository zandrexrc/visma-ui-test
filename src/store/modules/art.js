import { compare, getArtProperty } from '../../utils';

const artData = require('../../assets/art.json');
const artObjects = Object.values(artData);

export const artModule = {
  namespaced: true,

  state: {
    allArt: artObjects,
    displayedArt: artObjects,
  },

  getters: {
    getArt(state, id) {
      return state.allArt.find(art => art.id === id);
    },

    getDisplayedArtCount(state) {
      return state.displayedArt.length;
    }
  },

  mutations: {
    setArt(state, art) {
      state.allArt = art;
    },
    
    sortArt(state, payload) {
      const sortBy = payload.sortBy;
      const sortDirection = payload.sortDirection;
      let art = state.displayedArt;

      art.sort((a, b) => 
        compare(getArtProperty(a, sortBy), getArtProperty(b, sortBy), sortDirection)
      );

      state.displayedArt = art;
    },

    filterArt(state, filters) {
      let art = state.allArt;
      let filter = '';

      const numFilters = 4;
      for (let i = 0; i < numFilters; i++) {
        if (filters[i]) {
          filter = new RegExp(filters[i], 'i');
          art = art.filter(f => filter.test(getArtProperty(f, i)));
        }
      }

      state.displayedArt = art;
    },
  },

  actions: {
    setArt(context, art) {
      context.commit('setArt', art);
    },

    sortArt(context, payload) {
      context.commit('sortArt', payload);
    },

    filterArt(context, filters) {
      context.commit('filterArt', filters);
    },
  },
};