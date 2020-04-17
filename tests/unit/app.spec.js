import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import app from '@/App.vue';
import appHeader from '@/components/header/Header.vue';
import appFooter from '@/components/footer/Footer.vue';

describe('In App Component', () => {
  let appWrapper;
  const router = new VueRouter({ path: '/', name: 'Dashboard' });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    appWrapper = shallowMount(app, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });

  it('renders the correct markup', () => {
    expect(appWrapper.html()).toContain('<div id="app">');
  });

  it('it should have a div element with id="app"', () => {
    expect(appWrapper.attributes('id')).toBe('app');
  });

  describe('it should load appHeader component', () => {
    it('it should load the app-header', () => {
      expect(appHeader).toBeTruthy();
    });

    it('it should have a <app-header-stub></app-header-stub>', () => {
      expect(appWrapper.html()).toContain('<app-header-stub></app-header-stub>');
    });
  });

  describe('it should load appFooter component', () => {
    it('it should load the app-footer', () => {
      expect(appFooter).toBeTruthy();
    });

    it('it should have a <app-footer-stub></app-footer-stub>', () => {
      expect(appWrapper.html()).toContain('<app-footer-stub></app-footer-stub>');
    });
  });
});
