class HomePage {
    verifyHomePageVisible() {
      cy.url().should('include', 'automationexercise.com')
    }

    visit() {
      cy.visit('http://automationexercise.com');
    }

    getSignupLoginButton() {
      return cy.get('a[href="/login"]');
    }

    verifyHomePageVisible() {
      cy.get('body').should('contain', 'Home');
    }

  
    clickSignupLogin() {
      cy.contains('Signup / Login').click()
    }
  }
  export default HomePage
  