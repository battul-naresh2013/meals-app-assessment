import Vue from 'vue';
import Vuex from 'vuex';
import * as mealsModule from '@/store/modules/mealsModule/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { mealsModule },
  state: { },
});
