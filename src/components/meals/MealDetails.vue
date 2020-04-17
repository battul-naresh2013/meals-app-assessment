<template>
  <b-card-group>
    <meal />
    <b-card class="meal-font">
      <b-row>
        <ingredient />
        <measurement />
      </b-row>
      <b-row>
        <instrucions />
      </b-row>
    </b-card>
  </b-card-group>
</template>
<script>
import mixin from '@/mixins/mixin';
import meal from './Meal.vue';
import ingredient from './Ingredient.vue';
import measurement from './Measurement.vue';
import instrucions from './Instructions.vue';

export default {
  name: 'MealDetails',
  mixins: [mixin],
  components: {
    meal, ingredient, measurement, instrucions,
  },
};
</script>
<style scoped>
.meal-font {
  font-size: 0.9rem;
}
</style>
