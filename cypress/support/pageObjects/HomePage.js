class HomePage {
    verifyHomePageVisible() {
      cy.url().should('include', 'automationexercise.com')
    }
  
    clickSignupLogin() {
      cy.contains('Signup / Login').click()
    }
  }
  export default HomePage
  