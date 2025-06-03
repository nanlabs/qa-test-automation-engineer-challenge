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
    // Step 1-3
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Step 4: Click on Signup/Login
    homePage.getSignupLoginButton().click();

    // Step 5: Verify New User Signup is visible
    signupPage.verifyNewUserSignupVisible();

    // Step 6: Enter name and existing email
    signupPage.enterNameEmail(this.inf.name, this.inf.email);
    loginPage.enterLoginPassword(this.inf.password);

    // Step 7: Click Signup
    signupPage.clickSignupButton();

    // Step 8: Verify error message
    signupPage.verifyEmailAlreadyExistsError();

    
  });
});
