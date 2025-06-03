const elements = {
  usernameInput: '#username',
  passwordInput: '#password',
  submitButton: 'button[type="submit"]',
  flashMessage: '#flash',
  logoutButton: 'a[href="/logout"]'
};

class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillUsername(username) {
    cy.get(elements.usernameInput).clear().type(username);
  }

  fillPassword(password) {
    cy.get(elements.passwordInput).clear().type(password);
  }

  submit() {
    cy.get(elements.submitButton).click();
  }

  login(username, password){
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }

  assertLoginSuccess() {
    cy.url().should('include', '/secure');
    cy.get(elements.flashMessage)
      .should('be.visible')
      .and('contain.text', 'logged into a secure area');
  }

  assertLoginError() {
    cy.url().should('include', '/login');
    cy.get(elements.flashMessage)
      .should('be.visible')
      .and('contain.text', 'invalid');
  }
}

export const loginPage = new LoginPage();
