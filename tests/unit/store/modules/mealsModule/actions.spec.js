import actions from '@/store/modules/mealsModule/actions';
// Import intercepted by Jest to return mock getRandomMeal function
import { getRandomMeal, getMealByName, getAllMealsByFirstLetter } from '@/services/meals-service';
import handleErrors from '@/store/modules/handle-errors';

// Mock module with Jest mock functions
jest.mock('@/services/meals-service');
jest.mock('@/store/modules/handle-errors');

describe('In actions, ', () => {
  let commit;
  let dispatch;
  let error;

  beforeEach(() => {
    commit = jest.fn();
    dispatch = jest.fn();
    error = new Error({ message: 'Async error' });
    handleErrors.mockImplementation(() => ({
      handleErrors: () => {
        throw new Error('Test error');
      },
    }));
  });

  it('getAllMealsBySearchKey should commits meals data returned by getAllMealsByFirstLetter Api method', async () => {
    const meals = { meals: [{ meal: 1 }, { meal: 2 }, { meal: 3 }] };
    // Control mock to resolve with an array of objects
    getAllMealsByFirstLetter.mockResolvedValue(meals);
    await actions.getAllMealsBySearchKey({ commit, dispatch });
    expect(commit).toHaveBeenCalledWith('SET_MEALS', meals.meals);
  });

  it('getAllMealsBySearchKey should cacth en error when getAllMealsByFirstLetter Api throws error', async () => {
    getAllMealsByFirstLetter.mockRejectedValue(error);
    await actions.getAllMealsBySearchKey({ commit, dispatch });
    expect(() => handleErrors.handleErrors()).toThrow();
  });

  it('getMealByMealName should commits an meal data returned by getMealByName Api method', async () => {
    const meal = { meals: [{ mealName: 'Puran Poli' }] };
    getMealByName.mockResolvedValue(meal);
    await actions.getMealByMealName({ commit, dispatch }, meal.mealName);
    expect(commit).toHaveBeenCalledWith('SET_MEAL', meal.meals);
  });

  it('getMealByMealName should cacth en error when getMealByName Api throws error', async () => {
    const meal = { mealName: 'Not Found' };
    getMealByName.mockRejectedValue(error);
    await actions.getMealByMealName({ commit, dispatch }, meal.mealName);
    expect(() => handleErrors.handleErrors()).toThrow();
  });

  it('getSingleRandomMeal should commits an meal data returned by getRandomMeal Api method', async () => {
    const meal = { meals: [{ mealName: 'Banana Pancakes' }] };
    getRandomMeal.mockResolvedValue(meal);
    await actions.getSingleRandomMeal({ commit, dispatch }, meal.mealName);
    expect(commit).toHaveBeenCalledWith('SET_MEAL', meal.meals);
  });

  it('getSingleRandomMeal should cacth en error when getRandomMeal Api throws error', async () => {
    const meal = { mealName: 'Not Found' };
    getRandomMeal.mockRejectedValue(error);
    await actions.getSingleRandomMeal({ commit, dispatch }, meal.mealName);
    expect(() => handleErrors.handleErrors()).toThrow();
  });
});
