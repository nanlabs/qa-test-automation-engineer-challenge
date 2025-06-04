import HomePage from '../support/pageObjects/HomePage';
import SignupPage from '../support/pageObjects/SignupPage';
import LoginPage from '../support/pageObjects/LoginPage';

const homePage = new HomePage();
const signupPage = new SignupPage();
const loginPage = new LoginPage();

describe('Test Case 5: Register User with existing email', () => {
  beforeEach(() => {
    cy.fixture('UserInfo').as('inf');
  });

  it('should show error when registering with existing email', function () {
    // visiting home page
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Click on Signup/Login
    homePage.getSignupLoginButton().click();

    // Verify New User Signup is visible
    signupPage.verifyNewUserSignupVisible();

    // Enter name and existing email
    signupPage.enterNameEmail(this.inf.name, this.inf.email);
    loginPage.enterLoginPassword(this.inf.password);

    // Click Signup
    signupPage.clickSignupButton();

    // Verify error message
    signupPage.verifyEmailAlreadyExistsError();

    
  });
});
