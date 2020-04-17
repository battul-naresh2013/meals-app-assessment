import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/index';
import searchMeal from '@/components/meals/SearchMeal.vue';

describe('In SearchMeal Component', () => {
  let searchMealWrapper;
  let mockStore;
  const router = new VueRouter({ routes });
  const meals = [{ strMeal: 'Dal fry' }, { strMeal: 'Chicken' }];
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    mockStore = {
      state: { mealsModule: { meals } },
      dispatch: jest.fn(),
    };
    searchMealWrapper = shallowMount(searchMeal, {
      mocks: {
        $store: mockStore,
      },
      computed: {
        meals: () => 'meals',
      },
      data: () => ({ mealName: '' }),
      localVue,
      router,
    });
  });

  afterEach(() => {
    searchMealWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(searchMealWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    const expected = '<b-form-input-stub id="search" size="md"';
    expect(searchMealWrapper.html()).toContain(expected);
  });

  describe('Watchers - mealName', () => {
    beforeEach(() => {
      searchMealWrapper.vm.searchMeal = jest.fn();
      searchMealWrapper.vm.searchMealBySearchKey = jest.fn();
    });

    it('when mealName has full name, then searchMeal funtion should call', () => {
      searchMealWrapper.setData({ mealName: 'Dal fry' });
      searchMealWrapper.vm.$options.watch.mealName.call(searchMealWrapper.vm);
      expect(searchMealWrapper.vm.searchMeal).toBeCalled();
      expect(searchMealWrapper.vm.searchMealBySearchKey).not.toBeCalled();
    });

    it('when mealName has first letter, then searchMealBySearchKey funtion should call', () => {
      searchMealWrapper.setData({ mealName: 'D' });
      searchMealWrapper.vm.$options.watch.mealName.call(searchMealWrapper.vm);
      expect(searchMealWrapper.vm.searchMealBySearchKey).toBeCalled();
      expect(searchMealWrapper.vm.searchMeal).not.toBeCalled();
    });

    it('when mealName has null or empty, then it should not call', () => {
      searchMealWrapper.setData({ mealName: '' });
      searchMealWrapper.vm.$options.watch.mealName.call(searchMealWrapper.vm);
      expect(searchMealWrapper.vm.searchMeal).not.toBeCalled();
      expect(searchMealWrapper.vm.searchMealBySearchKey).not.toBeCalled();
    });
  });
});
