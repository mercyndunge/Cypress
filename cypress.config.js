const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    
    //Any changes made from vs code won't execute the tests automatically - you will have to manually 
    //exeute the tests via the run button on cypress runner.
    watchForFileChanges: false,
  
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('cypress-mochawesome-reporter/plugin')(on); //for reports
    },
  },
});
