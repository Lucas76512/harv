
Cypress.Commands.add('text', (term) => {
    cy.get('').type(term);
  })