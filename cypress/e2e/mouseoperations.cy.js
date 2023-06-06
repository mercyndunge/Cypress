
describe("Mouse Operations", ()=> {

    it('MouseHover',() => {
        cy.visit('https://demo.opencart.com/')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle')
        

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click(); //'trigger keyword is used to invoke the mouse actions'

        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)')
        .should('be.visible');  

     
    });


    it('Right click',() => {

        // Approach 1 - using 'trigger' keyword
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

       // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu'); //'context menu' does the right clicking

        //cy.get('.context-menu-icon-paste > span').should('be.visible')
        

        // Approach 2 - Directly right clicking

        cy.get('.context-menu-one.btn.btn-neutral').rightclick();

        cy.get('.context-menu-icon-paste > span').should('be.visible')
     
    });


    it.only('Doubleclick',() => {

        cy.visit('https://mousetester.com/')

        cy.get('#clickMe').trigger('dbclick')



     
    });

    it('DragandDrop',() => {

     
    });

    it('ScrollingPage',() => {

     
    });

});