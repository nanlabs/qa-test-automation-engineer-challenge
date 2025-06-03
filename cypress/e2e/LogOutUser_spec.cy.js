import HomePage from '../support/pageObjects/HomePage';
import LoginPage from '../support/pageObjects/LoginPage';

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Test Case 4: Log out user', () => {
  beforeEach(() => {
    cy.fixture('userInfo').as('inf');
  });

  it('should log in and log out the user successfully', function () {
    // Step 1-3
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Step 4: Go to Login
    homePage.getSignupLoginButton().click();

    // Step 6-7: Enter correct email and password
    loginPage.enterLoginEmail(this.inf.email);
    loginPage.enterLoginPassword(this.inf.password);
    loginPage.clickLoginButton();

    // Step 8: Click logout
    loginPage.clickLogout();

    // Step 9: Verify redirected to login
    loginPage.verifyRedirectedToLogin();
  });
});
