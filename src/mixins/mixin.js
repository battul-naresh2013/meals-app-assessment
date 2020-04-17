export default {
  computed: {
    // meal data
    mealDetails() {
      const { meal } = this.$store.state.mealsModule;
      return meal && meal[0];
    },
    meals() {
      return this.$store.state.mealsModule.meals;
    },
  },
};
