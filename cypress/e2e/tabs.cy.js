describe('Handle tabs', () => {
  
    it('Approach 1 - removing child tab and opening a link on the same tab', () => {
      cy.visit('http://the-internet.herokuapp.com/windows') //parent tab
  
      cy.get("a[href='/windows/new']").invoke('removeAttr','target').click(); //remove attribute and click link

      cy.url().should('include', 'http://the-internet.herokuapp.com/windows/new')

      cy.wait(5000)

      cy.go('back');
    })



    it.only('Approach 2', () => {
        cy.visit('http://the-internet.herokuapp.com/windows') //parent tab
    
        cy.get("a[href='/windows/new']").then((e)=>{
            let url=e.prop('href');
            cy.visit(url);
        })

        cy.url().should('include', 'http://the-internet.herokuapp.com/windows/new')

      cy.wait(5000)

      cy.go('back');
        
})
})