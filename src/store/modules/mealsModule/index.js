export const namespaced = true; // module namespace

export { default as actions } from '@/store/modules/mealsModule/actions';

export { default as mutations } from '@/store/modules/mealsModule/mutations';

export const state = {
  meal: {},
  meals: [],
};

export { notificationActions, mealsActions } from '@/store/modules/mealsModule/action-types.const';
