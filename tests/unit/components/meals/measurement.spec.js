import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter from 'vue-router';
import { routes } from '../../../../src/router/index';
import measurement from '../../../../src/components/meals/Measurement.vue';

describe('In Measurement Component', () => {
  let measurementWrapper;
  let mockStore;
  const router = new VueRouter({ routes });
  const meal = [{ strMeasure1: '225g' }];
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    mockStore = {
      state: { mealsModule: { meal } },
    };
    measurementWrapper = shallowMount(measurement, {
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
    measurementWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(measurementWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    const expected = '<b-col-stub tag="div">';
    expect(measurementWrapper.html()).toContain(expected);
  });

  it('it renders the correct markup', () => {
    const expected = '<li class="no-list-style">';
    expect(measurementWrapper.html()).toContain(expected);
  });

  it('It should have a b-icon-stub of variant success', () => {
    expect(measurementWrapper.findAll('[variant="success"]').length).toBe(1);
  });

  it('It should contain 225g as measurement', () => {
    expect(measurementWrapper.text().includes('225g'));
  });
});
