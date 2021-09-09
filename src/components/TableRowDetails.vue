<template>
    <nc-container>
        <nc-row>
          <nc-column>
            <img 
              :src="image" 
              alt="image"
              width="auto"
            >
          </nc-column>
          <nc-column>
            <nc-list-group>
              <nc-list-group-item
                v-for="fact in facts"
                :key="fact.label"
              >
                <b>{{ fact.label }}</b> <br> {{ fact.value }}
              </nc-list-group-item>
            </nc-list-group>
          </nc-column>
        </nc-row>
        <nc-row class="quote">
          <nc-column>
            <h3><i>{{ quote }}</i></h3>
          </nc-column>
        </nc-row>
      </nc-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'TableRowDetails',
  props: {
      image: {
          type: String,
          required: true,
      },
      facts: {
          type: Array,
          required: true,
      },
      quote: {
          type: String,
          required: true,
      },
  },
});
</script>

<style scoped>
.quote {
    margin-top: 1.5em;
}
</style>