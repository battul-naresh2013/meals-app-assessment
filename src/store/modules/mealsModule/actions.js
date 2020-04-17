import { getRandomMeal, getMealByName, getAllMealsByFirstLetter } from '@/services/meals-service';
import { notificationActions } from '@/store/modules/mealsModule/action-types.const';
import handleErrors from '@/store/modules/handle-errors';

const actions = {
  async getMealByMealName({ commit, dispatch }, mealName) {
    return getMealByName(mealName)
      .then((meal) => meal && meal.meals && commit('SET_MEAL', meal.meals))
      .catch((error) => {
        const notification = {
          type: 'error',
          message: `There was a problem getting meal: ${error.message}`,
        };
        handleErrors(notificationActions.addNotification, notification, dispatch);
      });
  },

  async getAllMealsBySearchKey({ commit, dispatch }, searchKey) {
    return getAllMealsByFirstLetter(searchKey)
      .then((meals) => commit('SET_MEALS', meals.meals))
      .catch((error) => {
        const notification = {
          type: 'error',
          message: `There was a problem getting all meals: ${error.message}`,
        };
        handleErrors(notificationActions.addNotification, notification, dispatch);
      });
  },

  async getSingleRandomMeal({ commit, dispatch }) {
    return getRandomMeal()
      .then((meal) => meal && meal.meals && commit('SET_MEAL', meal.meals))
      .catch((error) => {
        const notification = {
          type: 'error',
          message: `There was a problem getting meal: ${error.message}`,
        };
        handleErrors(notificationActions.addNotification, notification, dispatch);
      });
  },
};

export default actions;
