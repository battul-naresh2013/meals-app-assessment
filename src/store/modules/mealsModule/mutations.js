const mutations = {
  // set list of meals
  SET_MEALS(state, meals) {
    state.meals = meals;
  },
  // set single meal
  SET_MEAL(state, meal) {
    state.meal = meal;
  },
};

export default mutations;
