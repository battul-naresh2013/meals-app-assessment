import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/index';
import ingredient from '@/components/meals/Ingredient.vue';

describe('In Ingredient Component', () => {
  let ingredientWrapper;
  let mockStore;
  const router = new VueRouter({ routes });
  const meal = [{ strIngredient1: 'salt' }];
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    mockStore = {
      state: { mealsModule: { meal } },
    };
    ingredientWrapper = shallowMount(ingredient, {
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
    ingredientWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(ingredientWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    const expected = '<b-col-stub tag="div">';
    expect(ingredientWrapper.html()).toContain(expected);
  });

  it('it renders the correct markup', () => {
    const expected = '<li class="no-list-style">';
    expect(ingredientWrapper.html()).toContain(expected);
  });

  it('It should have a b-icon-stub of variant success', () => {
    expect(ingredientWrapper.findAll('[variant="success"]').length).toBe(1);
  });

  it('It should contain salt as ingredient', () => {
    expect(ingredientWrapper.text().includes('salt'));
  });
});
