import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import appFooter from '../../../../src/components/footer/Footer.vue';
import { routes } from '../../../../src/router/index';

describe('In Footer Component', () => {
  let appFooterWrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    appFooterWrapper = shallowMount(appFooter, {
      localVue,
      router,
    });
  });

  afterEach(() => {
    appFooterWrapper.destroy();
  });

  it('is a Vue instance', () => {
    expect(appFooterWrapper.isVueInstance).toBeTruthy();
  });

  it('it renders the correct markup', () => {
    const expected = '<b-container-stub tag="div" fluid="true" class="footer">';
    expect(appFooterWrapper.html()).toContain(expected);
  });

  it('it should have a b-container-stub element with class="footer"', () => {
    expect(appFooterWrapper.attributes('class')).toBe('footer');
  });
});
