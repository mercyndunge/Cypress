const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    //Any changes made from vs code won't execute the tests automatically - you will have to manually 
    //exeute the tests via the refresh button on cypress runner.
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
