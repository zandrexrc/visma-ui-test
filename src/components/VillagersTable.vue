<template>
  <div>
    <nc-modal  
      v-if="selectedRow"
      v-model="modal" 
      :title="selectedRow['name']['name-USen']"
    >
      <table-row-details
        :image="selectedRow['image_uri']"
        :quote="selectedRow['saying']"
        :facts="[
          { label: 'Species', value: selectedRow['species'] },
          { label: 'Personality', value: selectedRow['personality'] },
          { label: 'Gender', value: selectedRow['gender'] },
          { label: 'Birthday', value: selectedRow['birthday-string'] },
        ]"
      />
    </nc-modal>
    <nc-datatable
      id="table"
      :columns.sync="columns"
      :rows.sync="displayedRows"
      :rows-total="displayedRowsCount"
      :filters="filters"
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
  name: 'VillagersTable',
  components: {
    TableRowDetails,
  },
  data() {
    return {
      filters: {},
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
          title: 'Species', 
          value: 'species', 
          sortable: true, 
          filterable: true, 
        },
        { 
          id: 2, 
          title: 'Personality', 
          value: 'personality', 
          sortable: true, 
          filterable: true, 
        },
        { 
          id: 3, 
          title: 'Gender', 
          value: 'gender', 
          sortable: true, 
          filterable: true, 
        },
      ],
    };
  },
  computed: {
    ...mapState('villagers', {
      displayedRows: 'displayedVillagers',
    }),
    ...mapGetters('villagers', {
      displayedRowsCount: 'getDisplayedVillagersCount',
    }),
  },
  methods: {
    ...mapActions('villagers', [
      'sortVillagers',
      'filterVillagers',
    ]),
    onFilter(filters) {
      this.filters = filters;
      this.filterVillagers(filters);
    },
    onSort(sortBy, sortDirection) {
      this.sortBy = sortBy;
      this.sortDirection = sortDirection;
      this.sortVillagers({ sortBy, sortDirection });
    }
  },
});
</script>

<style scoped>
#table {
    max-width: 800px;
    margin: 0 auto;
}
</style>
