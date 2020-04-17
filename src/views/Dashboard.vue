<template>
  <div class="container pt-3" v-if="!!mealDetails">
    <meal-details />
  </div>
  <div v-else>
    <spinner />
  </div>
</template>

<script>
import { mealsActions } from '@/store/modules/mealsModule';
import spinner from '@/components/spinner/Spinner.vue';
import mealDetails from '@/components/meals/MealDetails.vue';
import mixin from '@/mixins/mixin';

export default {
  name: 'Dashboard',
  mixins: [mixin],
  components: { spinner, mealDetails },
  mounted() {
    this.getRandomMeal();
  },
  methods: {
    getRandomMeal() {
      this.$store.dispatch(mealsActions.getRandomMealAction);
    },
  },
};
</script>
