import handleErrors from '../../../../src/store/modules/handle-errors';
import { notificationActions } from '../../../../src/store/modules/mealsModule';

describe('In handleErrors function', () => {
  let notification;
  let dispatch;
  beforeEach(() => {
    notification = {
      type: 'error',
      message: 'There was a problem getting all employees',
    };
    dispatch = jest.fn();
    handleErrors(notificationActions.addNotification, notification, dispatch);
  });

  it('it should dispatch an action', () => {
    expect(dispatch).toHaveBeenCalled();
  });

  it('it should call dispatch with passed actionType, addNotification and root as true', () => {
    expect(dispatch)
      .toHaveBeenCalledWith(notificationActions.addNotification, notification, { root: true });
  });
});
