import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import spinner from '@/components/spinner/Spinner.vue';
import { routes } from '@/router/index';

describe('In Spinner Component', () => {
  let spinnerWrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    spinnerWrapper = shallowMount(spinner, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    spinnerWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(spinnerWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    const expected = '<div class="spinner">';
    expect(spinnerWrapper.html()).toContain(expected);
  });

  it('it should have a div element with class="spinner"', () => {
    expect(spinnerWrapper.attributes('class')).toBe('spinner');
  });

  it('it should have a <b-spinner-stub> element', () => {
    expect(spinnerWrapper.contains('b-spinner-stub')).toBe(true);
  });
});
