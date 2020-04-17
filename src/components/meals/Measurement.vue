<template>
  <b-col>
    <div class="text-left">
      <strong>Measure</strong>
    </div>
    <b-card-text class="text-left">
      <template v-for="(index) in 20">
        <li class="no-list-style" v-if="getMeasure(index)" :key="index">
          <b-icon icon="check" variant="success"></b-icon>
          {{ getMeasure(index) }}
        </li>
      </template>
    </b-card-text>
  </b-col>
</template>

<script>
import mixin from '@/mixins/mixin';

export default {
  name: 'Measurement',
  mixins: [mixin],
  methods: {
    getMeasure(index) {
      const measureKey = `strMeasure${index}`;
      const measure = this.mealDetails[measureKey];
      return measure && measure.trim();
    },
  },
};
</script>
<style scoped>
.no-list-style {
  list-style-type: none;
}
</style>
