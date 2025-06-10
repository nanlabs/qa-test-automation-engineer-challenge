class LoginPage {
    enterSignupName(name) {
      cy.get('input[data-qa="signup-name"]').type(name)
    }
  
    enterSignupEmail(email) {
      cy.get('input[data-qa="signup-email"]').type(email)
    }
  
    clickSignupButton() {
      cy.get('button[data-qa="signup-button"]').click()
    }
  }
  
  export const loginPage = new LoginPage()
  