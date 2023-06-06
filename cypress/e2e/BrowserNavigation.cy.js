describe('MyTestSuite', () => {

    it('NavigationTest',()=> {
        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq', 'Your Store') //Home Page

        cy.get('.nav > :nth-child(4) > .nav-link').click();
        cy.get('h2').should('have.text','Tablets') //Tablets page

        //Method 2 for navigation

        cy.go('back') //Go back to home page
        cy.title().should('eq', 'Your Store') 

        cy.go('forward') //Go to cameras page again
        cy.get('h2').should('have.text','Tablets') //Tablets page

        //Method 2 for navigation
        cy.go(-1) //Going back to homepage
        cy.title().should('eq', 'Your Store') 

        cy.go(1) //Go to tablets page
        cy.get('h2').should('have.text','Tablets') //Tablets page


    }) 
    })
  
    
  
