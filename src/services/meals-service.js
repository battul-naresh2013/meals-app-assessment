import slugs from '@/shared/app.const';
import clientApi from '@/services/client-api';

// a request for random meal
export const getRandomMeal = () => clientApi.get(slugs.randomMeal);

// a request for meal by provided search letters
export const getAllMealsByFirstLetter = (letters) => clientApi.get(`${slugs.searchMealByLetters}${letters}`);

// a request for meal by provided meal name
export const getMealByName = (mealName) => clientApi.get(`${slugs.searchMealByName}${mealName}`);
