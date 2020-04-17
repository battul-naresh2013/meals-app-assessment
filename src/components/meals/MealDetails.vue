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
import meal from '@/components/meals/Meal.vue';
import ingredient from '@/components/meals/Ingredient.vue';
import measurement from '@/components/meals/Measurement.vue';
import instrucions from '@/components/meals/Instructions.vue';

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
