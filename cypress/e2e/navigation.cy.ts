describe('Navigation', () => {
  it('Should go home', () => {
    cy.visit('/home');
    cy.getBySel('Home-Text-P');
  })

  it('Should go about', () => {
    cy.getBySel('Side-Bar-Link-About').click();
    cy.getBySel('About-Text-P');
  })

  it('Should go my-skills', () => {
    cy.getBySel('Side-Bar-Link-My-Skills').click();
    cy.getBySel('My-Skills-Text-P');
  })

  it('Should go work', () => {
    cy.getBySel('Side-Bar-Link-Work').click();
    cy.getBySel('Work-Text-P');
  })


  it('Should go contact', () => {
    cy.getBySel('Side-Bar-Link-Contact').click();
    cy.getBySel('Contact-Text-P');
  })

  it('Should go blog', () => {
    cy.getBySel('Side-Bar-Link-Blog').click();
    cy.getBySel('Blog-List-Ul');
  })
})
