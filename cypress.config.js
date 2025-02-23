const cucumber = require('cypress-cucumber-preprocessor').default
const cypress = require('cypress');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
  },
  // waits 
  // retries 
});
