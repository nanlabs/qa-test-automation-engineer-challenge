/**
 * @author: drodriguez
 * @date: 06-16-25
 */

/// <reference types="cypress" />

import LoginPage from "../../support/pages/login_page"
import RandomData from "../../support/utils/random_data"

const loginPage = new LoginPage
let userData

describe('Authentication happy paths', () => {

  before(() => {
    cy.fixture('users').then((data) => {
      userData = data[Cypress.env('environment')].login // Usa los datos específicos de ese archivo
    });
  })

  beforeEach(() => {
    loginPage.navigate()
    loginPage.pageIsDisplayed()
  })

  it('Doing a login with valid data', () => {
    const homePage = loginPage.doSignInAndContinue(userData.email, userData.pass)
    homePage.pageIsDisplayed()
  })

  it('Doing a sign up', () => {

    let userData = RandomData.getRandomUser()
    cy.log(userData)
    //Doing initial sign up form
    const signUpPage = loginPage.doSignUpAndContinue(userData.firstname, userData.email)
    signUpPage.pageIsDisplayed()

    // Doing Sign up form and continue
    const accountCreatedPage = signUpPage.doSignUpAndContinue(userData)

    accountCreatedPage.pageIsDisplayed()

    // Verifying Account created page and continue
    const homePage = accountCreatedPage.verifyCongratsContentAndContinue()
    homePage.pageIsDisplayed()

  })

  it('Doing a sign out', () => {
    const homePage = loginPage.doSignInAndContinue(userData.email, userData.pass)

    // Verifying user is authenticated and header was updated
    homePage.getHeader().verifyUserIsLoggedIn()
    homePage.getHeader().doLogout(false)

    // Verifying user is not authenticated and header was updated
    loginPage.pageIsDisplayed()
    homePage.getHeader().verifyUserIsNotLoggedIn()
  })

})
