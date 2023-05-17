describe('handle dropdowns', () => {
  
    it('Dropdown with select', () => {

        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        
        cy.get('#zcf_address_country')
        .select('Israel')
        .should('have.value','Israel')
      
    })

    it('Dropdown without select tag in html', () => {

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Kenya').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Kenya')
      
    })

    it('Autosuggest dropdown', () => {

        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput').type('Kenya')

        cy.get('.suggestion-title').contains('Kenya').click()

      
    })

    it.only('Dynamic dropdown', () => {

        cy.visit('https://www.google.com/')

        cy.get('.gLFyf').type('cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length',12)

        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
           if ($el.text()=='cypress automation tutorial')
           {
            cy.wrap($el).click()

           }
    })

    cy.get('.gLFyf').should('have.value','cypress automation tutorial')

      
    })
})