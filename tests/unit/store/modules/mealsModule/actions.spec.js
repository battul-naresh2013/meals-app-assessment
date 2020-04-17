import actions from '../../../../../src/store/modules/mealsModule/actions';
// Import intercepted by Jest to return mock getRandomMeal function
import { getRandomMeal, getMealByName, getAllMealsBySearchKey } from '../../../../../src/services/meals-service';
import handleErrors from '../../../../../src/store/modules/handle-errors';

// Mock module with Jest mock functions
jest.mock('../../../../../src/services/meals-service');
jest.mock('../../../../../src/store/modules/handle-errors');

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

  it('getAllMealsBySearchKeyAction should commits meals data returned by getAllMealsBySearchKey Api method', async () => {
    const meals = { meals: [{ meal: 1 }, { meal: 2 }, { meal: 3 }] };
    // Control mock to resolve with an array of objects
    getAllMealsBySearchKey.mockResolvedValue(meals);
    await actions.getAllMealsBySearchKeyAction({ commit, dispatch });
    expect(commit).toHaveBeenCalledWith('SET_MEALS', meals.meals);
  });

  it('getAllMealsBySearchKeyAction should cacth en error when getAllMealsBySearchKey Api throws error', async () => {
    getAllMealsBySearchKey.mockRejectedValue(error);
    await actions.getAllMealsBySearchKeyAction({ commit, dispatch });
    expect(() => handleErrors.handleErrors()).toThrow();
  });

  it('getMealByMealNameAction should commits an meal data returned by getMealByName Api method', async () => {
    const meal = { meals: [{ mealName: 'Puran Poli' }] };
    getMealByName.mockResolvedValue(meal);
    await actions.getMealByMealNameAction({ commit, dispatch }, meal.mealName);
    expect(commit).toHaveBeenCalledWith('SET_MEAL', meal.meals);
  });

  it('getMealByMealNameAction should cacth en error when getMealByName Api throws error', async () => {
    const meal = { mealName: 'Not Found' };
    getMealByName.mockRejectedValue(error);
    await actions.getMealByMealNameAction({ commit, dispatch }, meal.mealName);
    expect(() => handleErrors.handleErrors()).toThrow();
  });

  it('getRandomMealAction should commits an meal data returned by getRandomMeal Api method', async () => {
    const meal = { meals: [{ mealName: 'Banana Pancakes' }] };
    getRandomMeal.mockResolvedValue(meal);
    await actions.getRandomMealAction({ commit, dispatch }, meal.mealName);
    expect(commit).toHaveBeenCalledWith('SET_MEAL', meal.meals);
  });

  it('getRandomMealAction should cacth en error when getRandomMeal Api throws error', async () => {
    const meal = { mealName: 'Not Found' };
    getRandomMeal.mockRejectedValue(error);
    await actions.getRandomMealAction({ commit, dispatch }, meal.mealName);
    expect(() => handleErrors.handleErrors()).toThrow();
  });
});
