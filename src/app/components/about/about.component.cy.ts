import { AboutComponent } from './about.component';


describe('AboutComponent', () => {
  it('mounts', () => {
    cy.mount(AboutComponent);
    cy.get('h1').should('have.text', '1111')
  })
})
