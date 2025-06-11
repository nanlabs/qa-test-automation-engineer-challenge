/**
 * Cypress E2E Support File
 * This file is processed and loaded automatically before your test files.
 * It's a great place to put global configuration and behavior that modifies Cypress.
 */

// Import custom commands
import './commands'

// Import third-party plugins
import 'cypress-axe'
import 'cypress-real-events/support'
// import '@cypress/code-coverage/support' // Disabled for API-only testing

// Global configuration
Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing on uncaught exceptions
  // that are not related to our test code
  
  // Handle ResizeObserver errors (common in modern browsers)
  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    return false
  }
  
  // Handle promise rejection errors
  if (err.message.includes('Non-Error promise rejection captured')) {
    return false
  }
  
  // Handle cross-origin script errors (common with external sites like DemoQA)
  if (err.message.includes('Script error')) {
    return false
  }
  
  // Handle network/loading errors
  if (err.message.includes('Loading chunk') || err.message.includes('ChunkLoadError')) {
    return false
  }
  
  // Handle third-party script errors
  if (err.message.includes('google') || err.message.includes('facebook') || err.message.includes('ads')) {
    return false
  }
  
  // Handle DemoQA specific errors
  if (err.message.includes('demoqa') || err.stack?.includes('demoqa.com')) {
    return false
  }
  
  // Handle generic JavaScript errors from external domains
  if (err.stack && !err.stack.includes(Cypress.config('baseUrl'))) {
    return false
  }
  
  // Allow actual test-related errors to fail the test
  return true
})

// Global before hook
beforeEach(() => {
  // Set viewport for consistent testing
  cy.viewport(1920, 1080)
  
  // Clear local storage before each test (optional)
  // cy.clearLocalStorage()
})

// Global after hook
afterEach(() => {
  // Capture screenshot on failure
  if (Cypress.currentTest.state === 'failed') {
    const testName = Cypress.currentTest.title.replace(/\s+/g, '-').toLowerCase()
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    cy.screenshot(`failed-${testName}-${timestamp}`)
  }
}) 