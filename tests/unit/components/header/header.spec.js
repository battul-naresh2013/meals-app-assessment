import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import appHeader from '../../../../src/components/header/Header.vue';
import { routes } from '../../../../src/router/index';
import searchMeal from '../../../../src/components/meals/SearchMeal.vue';

describe('In Header Component', () => {
  let appHeaderWrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    appHeaderWrapper = shallowMount(appHeader, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    appHeaderWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(appHeaderWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    const expected = '<b-navbar-stub tag="nav" type="light" variant="warning" toggleable="lg" fixed="top">';
    expect(appHeaderWrapper.html()).toContain(expected);
  });

  it('it should have a <b-navbar-brand> element', () => {
    expect(appHeaderWrapper.contains('b-navbar-brand-stub')).toBe(true);
  });

  it('it should have a <b-navbar-toggle> element', () => {
    expect(appHeaderWrapper.contains('b-navbar-toggle-stub')).toBe(true);
  });

  it('it should have a <b-navbar-nav> element', () => {
    expect(appHeaderWrapper.contains('b-navbar-nav-stub')).toBe(true);
  });

  it('it should have a <b-nav-form> element', () => {
    expect(appHeaderWrapper.findAll('b-nav-form-stub').length).toBe(1);
  });

  it('renders a router-link tag with to home url', () => {
    expect(appHeaderWrapper.vm.$route.path).toBe(routes[0].path);
  });

  describe('it should load searchMeal component', () => {
    it('it should load the search-meal', () => {
      expect(searchMeal).toBeTruthy();
    });

    it('it should have a <search-meal-stub></search-meal-stub>', () => {
      expect(appHeaderWrapper.html()).toContain('<search-meal-stub></search-meal-stub>');
    });
  });
});
