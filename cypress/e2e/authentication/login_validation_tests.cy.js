/**
 * @author: drodriguez
 * @date: 06-16-2025
 */

/// <reference types="cypress" />

import LoginPage from "../../support/pages/login_page"

const loginPage = new LoginPage
let userData

describe('Login feature', () => {

  before(() => {
    cy.fixture('users').then((data) => {
      console.log(data)
      console.log(Cypress.env('environment'))
      userData = data[Cypress.env('environment')].login // Usa los datos específicos de ese archivo
    });
  })

  beforeEach(() => {
    loginPage.navigate()
    loginPage.pageIsDisplayed()
  })

  it('Submit login form with empty fields', () => {
    loginPage.fillLoginFormAndSubmit('{backspace}', '{backspace}')
    // Verifying user stuck on same page
    loginPage.pageIsDisplayed()
  })

  it('Submit login form with empty email address', () => {
    loginPage.fillLoginFormAndSubmit('{backspace}', 'InvalidTest1234')
    // Verifying user stuck on same page
    loginPage.pageIsDisplayed()
  })

  it.only('Submit login form with empty password', () => {
    loginPage.fillLoginFormAndSubmit(userData.email, '{backspace}')
  })

  it('Submit login form with invalid email', () => {
    loginPage.verifyInvalidLoginDataAndMessage('FakeEmail12341@gmail.com', userData.pass)
  })

  it('Submit login form with invalid password', () => {
    loginPage.verifyInvalidLoginDataAndMessage(userData.email, 'invalidPassword1!')
  })

})
