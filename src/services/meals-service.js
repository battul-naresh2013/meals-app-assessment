import clientApi from './client-api';
import slugs from '../shared/app.const';

// a request for random meal
export const getRandomMeal = () => clientApi.get(slugs.randomMeal);

// a request for meal by provided search letters
export const getAllMealsBySearchKey = (searchKey) => clientApi.get(`${slugs.searchMealBySearchKey}${searchKey}`);

// a request for meal by provided meal name
export const getMealByName = (mealName) => clientApi.get(`${slugs.searchMealByName}${mealName}`);
