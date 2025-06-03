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

    clickTestCases() {
      cy.get('a[href="/test_cases"]').contains('Test Cases').click();
    }

    clickProducts() {
      cy.get('a[href="/products"]').contains('Products').click();
    }
  }
  export default HomePage
  