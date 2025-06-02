class loginPage{

    elements = {
        emailInput: () => cy.get('input[data-qa="login-email"]'),
        passwordInput: () => cy.get('input[data-qa="login-password"]'),
        loginBtn: () => cy.get('button[data-qa="login-button"]'),
        errorMessage: () => cy.contains('p', 'Your email or password is incorrect!')
    }

    typeUsername(username){
        this.elements.emailInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }

    checkErrorMessage(){
        this.elements.errorMessage().should('be.visible');
    }


}

module.exports = new loginPage();