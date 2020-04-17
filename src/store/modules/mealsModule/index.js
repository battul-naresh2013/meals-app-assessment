export const namespaced = true; // module namespace

export { default as actions } from './actions';

export { default as mutations } from './mutations';

export const state = {
  meal: {},
  meals: [],
};

export { notificationActions, mealsActions } from './action-types.const';
