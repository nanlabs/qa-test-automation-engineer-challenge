class LoginPage {
    verifyLoginFormVisible() {
      cy.contains('Login to your account').should('be.visible');
    }
  
    enterLoginEmail(email) {
      cy.get('input[data-qa="login-email"]').type(email);
    }
  
    enterLoginPassword(password) {
      cy.get('input[data-qa="login-password"]').type(password);
    }
  
    clickLoginButton() {
      cy.get('button[data-qa="login-button"]').click();
    }

    verifyLoginErrorVisible() {
      cy.contains('Your email or password is incorrect!').should('be.visible');
    }

    clickLogout() {
      cy.contains('Logout').click();
    }

    verifyRedirectedToLogin() {
      cy.contains('Login to your account').should('be.visible');
    }


  }
  export default LoginPage;
  