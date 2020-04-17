<template>
  <b-col>
    <div class="text-left">
      <strong>Ingredient</strong>
    </div>
    <b-card-text class="text-left">
      <template v-for="(index) in 20">
        <li class="no-list-style" v-if="getIngredient(index)" :key="index">
          <b-icon icon="check" variant="success"></b-icon>
          {{ getIngredient(index) }}
        </li>
      </template>
    </b-card-text>
  </b-col>
</template>

<script>
import mixin from '@/mixins/mixin';

export default {
  name: 'Ingredient',
  mixins: [mixin],
  methods: {
    getIngredient(index) {
      const ingredientKey = `strIngredient${index}`;
      const ingredient = this.mealDetails[ingredientKey];
      return ingredient && ingredient.trim();
    },
  },
};
</script>
<style scoped>
.no-list-style {
  list-style-type: none;
}
</style>
