<template>
  <div>
    <nc-modal  
      v-if="selectedVillager"
      v-model="modal" 
      :title="selectedVillager['name']['name-USen']"
    >
      <nc-container>
        <nc-row>
          <nc-column>
            <img 
              :src="selectedVillager['image_uri']" 
              alt="image"
              width="auto"
            >
          </nc-column>
          <nc-column>
            <nc-list-group>
              <nc-list-group-item>
                <b>Species</b> <br> {{ selectedVillager['species'] }}
              </nc-list-group-item>
              <nc-list-group-item>
                <b>Personality</b> <br> {{ selectedVillager['personality'] }}
              </nc-list-group-item>
              <nc-list-group-item>
                <b>Gender</b> <br> {{ selectedVillager['gender'] }}
              </nc-list-group-item>
              <nc-list-group-item>
                <b>Birthday</b> <br> {{ selectedVillager['birthday-string'] }}
              </nc-list-group-item>
            </nc-list-group>
          </nc-column>
        </nc-row>
      </nc-container>
      <template #footer>
        <h3><i>{{ selectedVillager['saying'] }}</i></h3>
      </template>
    </nc-modal>
    <nc-datatable
      id="table"
      :columns.sync="columns"
      :rows.sync="displayedVillagers"
      :rows-total="getDisplayedVillagersCount"
      :sort-by="sortBy"
      :sort-direction="sortDirection"
      @sort="onSort"
      @update:filters="filterVillagers"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';

export default Vue.extend({
  name: 'AppTable',
  data() {
    return {
      modal: false,
      selectedVillager: null,
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
                this.selectedVillager = row;
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
    ...mapState([
      'displayedVillagers',
    ]),
    ...mapGetters([
      'getVillager',
      'getDisplayedVillagersCount',
    ]),
  },
  methods: {
    ...mapActions([
      'setVillagers',
      'sortVillagers',
      'filterVillagers',
    ]),
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
