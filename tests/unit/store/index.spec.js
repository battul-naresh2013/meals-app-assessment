import store from '../../../src/store';

describe('In Store', () => {
  it('it should have all state objects ', () => {
    expect(store.state.mealsModule).toBeTruthy();
  });
});
