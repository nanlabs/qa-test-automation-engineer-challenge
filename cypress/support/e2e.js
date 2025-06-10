import '@cypress/code-coverage/support'

beforeEach(() => {
    cy.visit('/')
  })
  
  afterEach(() => {
    // cy.clearCookies()
  })
  