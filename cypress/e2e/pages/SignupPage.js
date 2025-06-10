class SignupPage {
  verifyLoginFormVisible() {
    cy.contains('Login to your account').should('be.visible')
  }

  login(email, password) {
    cy.get('input[data-qa="login-email"]').should('be.visible').clear().type(email)
    cy.get('input[data-qa="login-password"]').should('be.visible').clear().type(password)
    cy.get('button[data-qa="login-button"]').should('be.visible').click()
  }

  verifyLoggedInAs(name) {
    cy.get('a').contains(`Logged in as ${name}`).should('be.visible')
  }

  verifyLoginError() {
    cy.contains('Your email or password is incorrect!').should('be.visible')
  }
}

export const signupPage = new SignupPage()
