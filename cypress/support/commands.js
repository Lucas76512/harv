import 'cypress-file-upload' 

Cypress.Commands.add('text', (term) => {
  cy.get('input[type="text"]').type(term);
})

Cypress.Commands.add('password', (term) => {
  cy.get('input[type="password"]').type(term);
})

Cypress.Commands.add('button',  (term) => {
  cy.get('button[type="submit"]').type(term).click();
})

Cypress.Commands.add('send',  (term) => {
  cy.get('button[type="button"]').type(term).click();
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })