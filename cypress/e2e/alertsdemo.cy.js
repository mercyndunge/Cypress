describe('Alerts', () => {
 
    //1). Js Alert: Alert has some text and an 'OK' button
    it('Js alert', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
  
      cy.get("button[onclick='jsAlert()']").click();

      cy.on('window:alert',(t)=> {
        expect(t).to.contains('I am a JS Alert');

      })

      //alert window automatically closed by cypress

      cy.get('#result').should('have.text','You successfully clicked an alert')
    })


     //2). Js Alert: Alert has some text and 'OK' and 'Cancel' buttons
     //cancelling the alert using ok button

     it('Js confirm alert - OK', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=> {
            expect(t).to.contains('I am a JS Confirm');
    
          })
    
          //Cypress automatically closed alert window by using ok button- default
    
          cy.get('#result').should('have.text','You clicked: Ok')
        })


        //Cancelling the alert using the cancel button
        it('Js confirm alert - Cancel', () => {
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
            cy.get("button[onclick='jsConfirm()']").click();
    
            cy.on('window:confirm',(t)=> {
                expect(t).to.contains('I am a JS Confirm');
        
              })
        
              cy.on('window:confirm',()=>false); //closing the alert window using the cancel button
        
              cy.get('#result').should('have.text','You clicked: Cancel')
            })


     //3). Js Prompt Alert - Alert has some text with a text box for user input and an 'OK' and 'Cancel' button
     it('Js prompt alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click();

        //cypress will automatically close prompted alert - it will use OK button by default

        cy.get("#result").should('have.text','You entered: Welcome');
  
        //Repeat the same steps above and put the cy.on('window:confirm',()=>false); command to close 
        //the alert using cancel button and then verify the success message
    })

        //4). Js Alert - Authenticated Alert
    it('Js  authenticated alert', () => {

        //approach 1
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            auth: {
                username: "admin",
                password: "admin"
            } 
        });

        cy.get("div[class='example'] p").should('contain','Congratulations')

        //approach 2 - inject username and password into the url

        /*cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get("div[class='example'] p").should('contain','Congratulations')*/

      })
  

     })      
    
