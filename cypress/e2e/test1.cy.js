describe('sign up', () => {
  
  it('Verify title', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.title().should('eq','OrangeHRM')

  })

  it.skip('Verify title negative test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.title().should('eq','OrangeHRM0')

  })

})