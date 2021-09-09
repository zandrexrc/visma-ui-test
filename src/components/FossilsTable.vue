<template>
  <div>
    <nc-modal  
      v-if="selectedRow"
      v-model="modal" 
      :title="selectedRow['name']['name-USen']"
    >
      <table-row-details
        :image="selectedRow['image_uri']"
        :quote="selectedRow['museum-phrase']"
        :facts="[
          { label: 'Belongs to', value: selectedRow['part-of'] },
          { label: 'Selling price', value: `${selectedRow['price']} Bells` },
        ]"
      />
    </nc-modal>
    <nc-datatable
      id="fossilsTable"
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
  name: 'FossilsTable',
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
          title: 'Creature', 
          value: 'part-of', 
          sortable: true, 
          filterable: true, 
        },
      ],
    };
  },
  computed: {
    ...mapState('fossils', {
      displayedRows: 'displayedFossils',
    }),
    ...mapGetters('fossils', {
      displayedRowsCount: 'getDisplayedFossilsCount',
    }),
  },
  methods: {
    ...mapActions('fossils', [
      'sortFossils',
      'filterFossils',
    ]),
    onFilter(filters) {
      this.filters = filters;
      this.filterFossils(filters);
    },
    onSort(sortBy, sortDirection) {
      this.sortBy = sortBy;
      this.sortDirection = sortDirection;
      this.sortFossils({ sortBy, sortDirection });
    }
  },
});
</script>

<style scoped>
#fossilsTable {
    max-width: 800px;
    margin: 0 auto;
}
</style>
