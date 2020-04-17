import formattedDate from '../../../src/filters/date-filter';

describe('In date filter', () => {
  it("returns the date in full year format 'yyyy'", () => {
    const dd = new Date().getFullYear();
    expect(formattedDate()).toBe(dd);
  });
});
