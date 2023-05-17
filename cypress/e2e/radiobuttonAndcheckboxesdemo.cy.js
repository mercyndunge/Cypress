describe('Check UI Elements', () => {
  
    it('Checking radio buttons', () => {
      cy.visit('https://itera-qa.azurewebsites.net/home/automation')
  
      //visibility of radio buttons
      cy.get('#female').should('be.visible')
      cy.get('#male').should('be.visible')

      //Selecting radio buttons
      cy.get('#female').check().should('be.checked')
      cy.get('#male').should('not.be.checked')

      cy.get('#male').check().should('be.checked')
      cy.get('#female').should('not.be.checked')

    })

    it('Checking and unchecking a single check box', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    
        //visibility of the element
        cy.get('#monday').should('be.visible')
       
  
        //Selecting single check box - monday
        cy.get('#monday').check().should('be.checked')
  
        //Unselecting checkbox
        cy.wait(5000)
        cy.get('#monday').uncheck().should('not.be.checked')
  
    
      })


      it('Checking and unchecking all checkboxes', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    
    
        //Selecting all check boxes
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')

        //Unselecting all checkboxes
        cy.wait(5000)
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')
  
    
      })

      it.only('Checking the first and last checkboxes', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
    

        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')
  
    
      })

})