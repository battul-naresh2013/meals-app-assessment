import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { routes } from '@/router/index';
import dashboard from '@/views/Dashboard.vue';
import spinner from '@/components/spinner/Spinner.vue';
import mealDetails from '@/components/meals/MealDetails.vue';

describe('In Dashboard Component', () => {
  let wrapper;
  let mockStore;
  const router = new VueRouter({ routes });
  const meal = [{ strInstructions: 'Preheat the oven.' }];
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    mockStore = {
      state: { mealsModule: { meal } },
      dispatch: jest.fn(),
    };
    wrapper = shallowMount(dashboard, {
      mocks: {
        $store: mockStore,
      },
      computed: {
        meal: () => 'meal',
      },
      localVue,
      router,
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="container pt-3">');
  });

  describe('it should load mealDetails component', () => {
    it('it should load the meal-details', () => {
      expect(mealDetails).toBeTruthy();
    });

    it('it should have a <meal-details-stub></meal-details-stub>', () => {
      expect(wrapper.html()).toContain('<meal-details-stub></meal-details-stub>');
    });
  });

  describe('it should load spinner component', () => {
    it('it should load the spinner', () => {
      expect(spinner).toBeTruthy();
    });
  });
});
