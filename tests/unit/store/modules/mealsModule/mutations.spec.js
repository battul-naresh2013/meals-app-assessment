import mutations from '@/store/modules/mealsModule/mutations';

describe('In mutations', () => {
  it('SET_MEALS sets state.meals to meals', () => {
    const meals = [{ mealName: 'Chicken Biryani' }, { mealName: 'Ribollita' }];
    const state = {
      meals: {},
    };
    mutations.SET_MEALS(state, meals);
    expect(state.meals).toBe(meals);
  });

  it('SET_MEAL sets state.meal to meal', () => {
    const meal = { name: 'Ribollita' };
    const state = {
      meal: {},
    };
    mutations.SET_MEAL(state, meal);
    expect(state.meal).toBe(meal);
  });
});
