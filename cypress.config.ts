import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 2000,
    pageLoadTimeout: 30000,
    video: false,
    screenshotOnRunFailure: false,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    // Environment variables can be added here
  },
});
