// Import intercepted by Jest to return mock getMealByName function
import { getRandomMeal, getMealByName, getAllMealsByFirstLetter } from '@/services/meals-service';
import clientApi from '@/services/client-api';

// Mock module with Jest mock functions
jest.mock('@/services/client-api');

describe('In Meals service, ', () => {
  it('getAllMealsBySearchKey api should call', () => {
    const meals = { meals: [{ meal: 1 }, { meal: 2 }, { meal: 3 }] };
    clientApi.get.mockResolvedValue(meals.meals);
    getAllMealsByFirstLetter().then(((result) => {
      expect(result).toEqual(meals.meals);
    }));
  });

  it('getRandomMeal api should call', () => {
    const meal = { meals: [{ mealName: 'Puran Poli' }] };
    clientApi.get.mockResolvedValue(meal);
    getRandomMeal().then(((result) => {
      expect(result).toEqual(meal);
    }));
  });

  it('getMealByName api should call', () => {
    const meal = { meals: [{ mealName: 'Banana Pancakes' }] };
    clientApi.get.mockResolvedValue(meal);
    getMealByName().then(((result) => {
      expect(result).toEqual(meal);
    }));
  });
});
