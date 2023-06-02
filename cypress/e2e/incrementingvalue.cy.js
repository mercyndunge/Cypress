describe('Incrementing value test', () => {
    it('Increments the value on button click', () => {
      // Visit the page or navigate to the specific component where the incrementing value is displayed
      cy.visit('/your-page');
  
      // Get the initial value
      cy.get('.value').invoke('text').as('initialValue');
  
      // Click the button that increments the value
      cy.get('.increment-button').click();
  
      // Get the updated value
      cy.get('.value').invoke('text').as('updatedValue');
  
      // Assert that the updated value is greater than the initial value
      cy.get('@initialValue').then((initialValue) => {
        cy.get('@updatedValue').then((updatedValue) => {
          expect(parseInt(updatedValue)).to.be.greaterThan(parseInt(initialValue));
        });
      });
    });
  });
  