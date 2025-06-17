const { defineConfig } = require("cypress");
const urlData = require('./cypress/support/config/url_data.js')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const env = config.env.environment || 'stg';
      config.baseUrl = urlData[env];
      console.log(`Setting baseUrl: ${urlData[env]}`);

      config.env.environment = env; // Setting environment if was not specified on command line
      return config;
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: false,
      html: false,
      json: true
    }
  },
});