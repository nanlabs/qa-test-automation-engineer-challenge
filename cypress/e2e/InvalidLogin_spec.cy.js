import HomePage from '../support/pageObjects/HomePage';
import LoginPage from '../support/pageObjects/LoginPage';

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Test Case 3: Login User with incorrect email and password', () => {
  beforeEach(() => {
    cy.fixture('InvalidData').as('invalid');
  });

  it('should display error for invalid login', function () {
    // Step 1-3: Launch and verify
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Step 4: Click login
    homePage.getSignupLoginButton().click();

    // Step 5: Verify login form visible
    cy.contains('Login to your account').should('be.visible');

    // Step 6-7: Enter incorrect creds and submit
    loginPage.enterLoginEmail(this.invalid.invalidEmail);
    loginPage.enterLoginPassword(this.invalid.invalidPassword);
    loginPage.clickLoginButton();

    // Step 8: Verify error message
    loginPage.verifyLoginErrorVisible();
  });
});
