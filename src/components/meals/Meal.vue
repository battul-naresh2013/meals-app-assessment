<template>
    <b-card
      class="text-center"
      img-top
      :img-src="mealDetails.strMealThumb"
      :img-alt="mealDetails.strMeal"
      :title="mealDetails.strMeal"
    >
      <span class="mr-5">
        {{mealDetails.strArea}}
        <b-icon icon="geo-alt" variant="primary"></b-icon>
      </span>
      <span class="ml-5" variant="primary">
        {{mealDetails.strCategory}}
        <b-icon icon="heart" variant="danger"></b-icon>
      </span>
    </b-card>
</template>

<script>
import mixin from '@/mixins/mixin';

export default {
  name: 'Meal',
  mixins: [mixin],
};
</script>
