import HomePage from '../support/pageObjects/HomePage';
import LoginPage from '../support/pageObjects/LoginPage';

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Test Case 3: Login User with incorrect email and password', () => {
  beforeEach(() => {
    cy.fixture('InvalidData').as('invalid');
  });

  it('should display error for invalid login', function () {
    // Launch and verify
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Click login
    homePage.getSignupLoginButton().click();

    // Verify login form visible
    cy.contains('Login to your account').should('be.visible');

    // Enter incorrect creds and submit
    loginPage.enterLoginEmail(this.invalid.invalidEmail);
    loginPage.enterLoginPassword(this.invalid.invalidPassword);
    loginPage.clickLoginButton();

    // Verify error message
    loginPage.verifyLoginErrorVisible();
  });
});
