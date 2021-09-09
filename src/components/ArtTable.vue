<template>
  <div>
    <nc-modal  
      v-if="selectedRow"
      v-model="modal" 
      :title="selectedRow['name']['name-USen']"
    >
      <table-row-details
        :image="selectedRow['image_uri']"
        :quote="selectedRow['museum-desc']"
        :facts="[
          { label: 'Has fake', value: selectedRow['hasFake'] },
          { label: 'Selling price', value: `${selectedRow['sell-price']} Bells` },
        ]"
      />
    </nc-modal>
    <nc-datatable
      id="artTable"
      :columns.sync="columns"
      :rows.sync="displayedRows"
      :rows-total="displayedRowsCount"
      :sort-by="sortBy"
      :sort-direction="sortDirection"
      @sort="onSort"
      @update:filters="onFilter"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import TableRowDetails from './TableRowDetails.vue';

export default Vue.extend({
  name: 'ArtTable',
  components: {
    TableRowDetails,
  },
  data() {
    return {
      modal: false,
      selectedRow: null,
      sortBy: undefined,
      sortDirection: undefined,
      columns: [
        { 
          id: 0, 
          title: 'Name', 
          value: 'name.name-USen', 
          sortable: true, 
          filterable: true, 
          td: {
            on: {
              click: (event, row) => {
                this.selectedRow = row;
                this.modal = true;
              }
            }
          }
        },
        { 
          id: 1, 
          title: 'Has a fake version', 
          value: 'hasFake', 
          sortable: true, 
          filterable: true, 
        },
      ],
    };
  },
  computed: {
    ...mapState('art', {
      displayedRows: 'displayedArt',
    }),
    ...mapGetters('art', {
      displayedRowsCount: 'getDisplayedArtCount',
    }),
  },
  methods: {
    ...mapActions('art', [
      'sortArt',
      'filterArt',
    ]),
    onFilter(filters) {
      this.filters = filters;
      this.filterArt(filters);
    },
    onSort(sortBy, sortDirection) {
      this.sortBy = sortBy;
      this.sortDirection = sortDirection;
      this.sortArt({ sortBy, sortDirection });
    }
  },
});
</script>

<style scoped>
#artTable {
    max-width: 800px;
    margin: 0 auto;
}
</style>
