// File: cypress/e2e/signup_delete_spec.cy.js
import SignupPage from '../support/pageObjects/SignupPage'
import HomePage from '../support/pageObjects/HomePage'
import AccountPage from '../support/pageObjects/AccountPage'

describe('Signup and Delete Account Flow', () => {
  const signupPage = new SignupPage()
  const homePage = new HomePage()
  const accountPage = new AccountPage()

  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
    cy.fixture('UserInfo').as('userData')
  })

  it('Should sign up a new user and delete the account', function () {
    homePage.verifyHomePageVisible()
    homePage.clickSignupLogin()

    signupPage.verifyNewUserSignupVisible()
    signupPage.enterNameEmail(this.userData.name, this.userData.email)
    signupPage.clickSignupButton()

    signupPage.verifyEnterAccountInfoVisible()
    signupPage.fillAccountInfo(this.userData)
    signupPage.submitAccountCreation()

    accountPage.verifyAccountCreated()
    accountPage.clickContinueButton()
    accountPage.verifyLoggedIn(this.userData.name)
    accountPage.deleteAccount()
    accountPage.verifyAccountDeleted()
  })
})
