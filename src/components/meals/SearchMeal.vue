<template>
  <div>
    <b-form-input
      size="md"
      class="mr-sm-3"
      v-model="mealName"
      debounce="200"
      list="meals"
      placeholder="Find a meal.. (type slowly)"
      id="search"
    ></b-form-input>
    <datalist id="meals">
      <option v-for="(meal, index) in meals" :key="index">{{ meal.strMeal }}</option>
    </datalist>
  </div>
</template>

<script>
import mixin from '@/mixins/mixin';
import { mealsActions } from '@/store/modules/mealsModule';

export default {
  name: 'SearchMeal',
  mixins: [mixin],
  data() {
    return {
      mealName: '',
    };
  },
  watch: {
    mealName() {
      if (!this.mealName) {
        return;
      }
      if (this.mealName.length !== 1) {
        this.searchMeal();
      } else {
        this.searchMealBySearchKey();
      }
    },
  },
  methods: {
    // this function is uesed to get meal by passing full meal name
    searchMeal() {
      this.$store.dispatch(mealsActions.getMealByMealName, this.mealName);
    },
    // this function is uesed to get meal by passing letters from the meal name.
    searchMealBySearchKey() {
      this.$store.dispatch(mealsActions.getAllMealsBySearchKey, this.mealName);
    },
  },
};
</script>
