import BasePage from './BasePage';

/**
 * Page object for the Login/Signup page
 */
class LoginPage extends BasePage {
    protected path = '/login';

    // Login section
    private readonly loginForm = '.login-form';
    private readonly loginEmail = 'input[data-qa="login-email"]';
    private readonly loginPassword = 'input[data-qa="login-password"]';
    private readonly loginButton = 'button[data-qa="login-button"]';
    private readonly loginErrorMessage = '.login-form p';

    // Signup section
    private readonly signupForm = '.signup-form';
    private readonly signupName = 'input[data-qa="signup-name"]';
    private readonly signupEmail = 'input[data-qa="signup-email"]';
    private readonly signupButton = 'button[data-qa="signup-button"]';
    private readonly signupErrorMessage = '.signup-form p';

    verifyNewUserSignupIsVisible(): void {
        cy.contains(/New User Signup!/i).should('be.visible');
    }

    verifyLoginToYourAccountIsVisible(): void {
        cy.contains(/Login to your account/i).should('be.visible');
    }

     // Login with the given credentials
  
    login(email: string, password: string): void {
        cy.get(this.loginEmail).type(email);
        cy.get(this.loginPassword).type(password);
        cy.get(this.loginButton).click();
    }

    verifyLoginErrorMessage(): void {
        cy.get(this.loginForm).contains(/Your email or password is incorrect!/i).should('be.visible');
    }

    verifyLoginPageIsCurrentPage() {
        cy.url().should('contain', '/login');
    }

    signup(name: string, email: string): void {
        cy.get(this.signupName).type(name);
        cy.get(this.signupEmail).type(email);
        cy.get(this.signupButton).click();
    }
    
    verifySignupErrorMessage(message: string): void {
        cy.get(this.signupForm)
            .contains('Email Address already exist!').should('be.visible');

    }

    verifyEnterAccountMessageIsVisible() {
        cy.contains(/ENTER ACCOUNT INFORMATION/i).should('be.visible');
    }
} export default new LoginPage();