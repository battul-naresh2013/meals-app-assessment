import { getRandomMeal, getMealByName, getAllMealsBySearchKey } from '@/services/meals-service';
import { notificationActions } from './action-types.const';
import handleErrors from '../handle-errors';

const actions = {
  async getMealByMealNameAction({ commit, dispatch }, mealName) {
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

  async getAllMealsBySearchKeyAction({ commit, dispatch }, searchKey) {
    return getAllMealsBySearchKey(searchKey)
      .then((meals) => commit('SET_MEALS', meals.meals))
      .catch((error) => {
        const notification = {
          type: 'error',
          message: `There was a problem getting all meals: ${error.message}`,
        };
        handleErrors(notificationActions.addNotification, notification, dispatch);
      });
  },

  async getRandomMealAction({ commit, dispatch }) {
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
