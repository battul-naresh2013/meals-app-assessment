import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/index';
import instructions from '@/components/meals/Instructions.vue';

describe('In Instructions Component', () => {
  let instructionsWrapper;
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
    };
    instructionsWrapper = shallowMount(instructions, {
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
    instructionsWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(instructionsWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    const expected = '<b-col-stub tag="div">';
    expect(instructionsWrapper.html()).toContain(expected);
  });

  it('It should contain Preheat the oven. as measurement', () => {
    expect(instructionsWrapper.text().includes('Preheat the oven.'));
  });
});
