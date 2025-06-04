import HomePage from '../support/pageObjects/HomePage';
import LoginPage from '../support/pageObjects/LoginPage';

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Test Case 4: Log out user', () => {
  beforeEach(() => {
    cy.fixture('userInfo').as('inf');
  });

  it('should log in and log out the user successfully', function () {
    // visiting home page
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Go to Login
    homePage.getSignupLoginButton().click();

    // Enter correct email and password
    loginPage.enterLoginEmail(this.inf.email);
    loginPage.enterLoginPassword(this.inf.password);
    loginPage.clickLoginButton();

    // Click logout
    loginPage.clickLogout();

    // Verify redirected to login
    loginPage.verifyRedirectedToLogin();
  });
});
