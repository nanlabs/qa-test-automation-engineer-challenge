// File: cypress/e2e/signup_delete_spec.cy.js
import SignupPage from '../support/pageObjects/SignupPage'
import HomePage from '../support/pageObjects/HomePage'
import AccountPage from '../support/pageObjects/AccountPage'
import LoginPage from '../support/pageObjects/LoginPage';

describe('Test case 1: Signup and Delete Account Flow', () => {
  const signupPage = new SignupPage()
  const homePage = new HomePage()
  const accountPage = new AccountPage()
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
    cy.fixture('UserInfo').as('userInf')
  })

  it('Should sign up a new user and delete the account', function () {
    homePage.verifyHomePageVisible()
    homePage.clickSignupLogin()

    signupPage.verifyNewUserSignupVisible()
    signupPage.enterNameEmail(this.userInf.name, this.userInf.email)
    signupPage.clickSignupButton()

    cy.get('body').then(($body) => {
        if ($body.text().includes('Email Address already exist!')){

            cy.log('Email exists. Proceeding to login and then delete...');

        loginPage.enterLoginEmail(this.userInf.email);
        loginPage.enterLoginPassword(this.userInf.password);
        loginPage.clickLoginButton();
        accountPage.clickDeleteAccount();
        accountPage.verifyAccountDeleted();

        
        }
        else {
            // Email did not exist, so registration happened
        signupPage.verifyEnterAccountInfoVisible();
        signupPage.fillAccountInfo(this.userInf); 
        signupPage.submitAccountCreation();
        accountPage.verifyAccountCreated();
        accountPage.clickContinueButton();
        }

      //  resusable code
      /*
        signupPage.verifyEnterAccountInfoVisible()
        signupPage.fillAccountInfo(this.userInf)
        signupPage.submitAccountCreation()

        accountPage.verifyAccountCreated()
        accountPage.clickContinueButton()
        accountPage.verifyLoggedIn(this.userInf.name)
        accountPage.deleteAccount()
        accountPage.verifyAccountDeleted()
        */
  })
  
    });


});