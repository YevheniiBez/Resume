/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

export {};
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      getBySel(e2eTagSelector: string): Chainable<JQuery<HTMLElement>>
    }
  }
}

// -- This is a parent command --
Cypress.Commands.add('getBySel', (e2eTagSelector: string) => {
  return cy.get(`[data-cy=${e2eTagSelector}]`)
})
