describe('In Delicious Meal App', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('a', 'Delicious Meals');
    cy.wait(2000);
    cy.get('#search')
      .type('Ratatouille');
    cy.wait(1000);
    cy.get('#search')
      .type('notFound');
  });
});
