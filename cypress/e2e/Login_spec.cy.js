import HomePage from '../support/pageObjects/HomePage';
import LoginPage from '../support/pageObjects/LoginPage';
import AccountPage from '../support/pageObjects/AccountPage';
import SignupPage from '../support/pageObjects/SignupPage'

const homePage = new HomePage();
const loginPage = new LoginPage();
const accountPage = new AccountPage();
const signupPage = new SignupPage()

describe('Test Case 2: Login User with correct email and password', () => {
  beforeEach(() => {
    cy.fixture('userInfo').as('userInf');
  });

  it('should login if user exists, or register first if not', function () {
    homePage.visit();
    homePage.verifyHomePageVisible();
    homePage.getSignupLoginButton().click();

    cy.contains('New User Signup!').should('be.visible');

    // Step 1: Try to create user to check existence
    cy.get('[data-qa="signup-name"]').type(this.userInf.name);
    cy.get('[data-qa="signup-email"]').type(this.userInf.email);
    cy.get('[data-qa="signup-button"]').click();

    cy.get('body').then(($body) => {
      if ($body.text().includes('Email Address already exist!')) {
        cy.log('Email exists. Proceeding with login...');

        // Go back to Login section
        loginPage.enterLoginEmail(this.userInf.email);
        loginPage.enterLoginPassword(this.userInf.password);
        loginPage.clickLoginButton();
        //accountPage.verifyLoggedIn(this.userInf.username);
        accountPage.clickDeleteAccount();
        accountPage.verifyAccountDeleted();

      } else {
        // Email did not exist, so registration happened
        signupPage.verifyAccountInfoVisible();
        signupPage.fillAccountInfo(this.userInf); // Your reusable fill form function
        signupPage.clickCreateAccount();
        accountPage.verifyAccountCreated();
        accountPage.clickContinue();
       // accountPage.verifyLoggedIn(this.userInf.username);
        accountPage.clickDeleteAccount();
        accountPage.verifyAccountDeleted();
      }

  });
});
});
