const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cypress.vivifyscrum-stage.com",
    env: {
      userEmail: "nemanjakasikovic95@gmail.com",
      userPassword: "nemanja95",
      apiUrl: "https://cypress-api.vivifyscrum-stage.com/api"
    }
  },
});
