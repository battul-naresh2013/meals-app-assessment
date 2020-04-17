import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import * as mealsModule from '../../../../../src/store/modules/mealsModule';
import { getMealByName } from '../../../../../src/services/meals-service';

// Mock module with Jest mock functions
jest.mock('../../../../../src/services/meals-service');

// create local vue instance
const localVue = createLocalVue();
localVue.use(Vuex);
describe('In store', () => {
  it('returns some dummy meal names', async () => {
    const items = { meals: [{ meal: 1 }, { meal: 2 }, { meal: 3 }] };

    // Control mock to resolve with an array
    getMealByName.mockResolvedValue(items);

    // create store instance
    const store = new Vuex.Store({
      modules: { mealsModule },
      state: {},
    });

    await store.dispatch('mealsModule/getMealByMealNameAction');
    expect(store.state.mealsModule.meal).toEqual(items.meals);
  });
});
