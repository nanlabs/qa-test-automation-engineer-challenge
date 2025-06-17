/**
 * @author: drodriguez
 * @date: 06-16-25
 */

import HomePage from './home_page'
import SignUpPage from './signup_page'

const BasePage = require('./base_page')

class LoginPage extends BasePage {

    get pagePath() { return '/login' }

    // Login section
    get loginTitle() { return cy.get('.login-form > h2') }
    get loginEmailInput() { return cy.get('[data-qa=login-email]') }
    get loginPasswordInput() { return cy.get('[data-qa=login-password]') }
    get loginBtn() { return cy.get('[data-qa=login-button]') }
    get errorMessage() { return cy.get('.login-form > form > p') }

    get errorMessageCopy() { return 'Your email or password is incorrect!' }

    // Sign up Section
    get signupTitle() { return cy.get('.signup-form > h2') }
    get signupNameInput() { return cy.get('[data-qa=signup-name]') }
    get signupEmailInput() { return cy.get('[data-qa=signup-email]') }
    get signupBtn() { return cy.get('[data-qa=signup-button]') }

    // Methods
    pageIsDisplayed() {
        cy.url().should('eq', Cypress.config('baseUrl') + this.pagePath)
        this.loginTitle.should('be.visible')
        this.loginEmailInput.should('be.visible')
    }

    fillLoginFormAndSubmit(email, password, submit = true) {
        this.pageIsDisplayed()
        this.loginEmailInput.type(email)
        this.loginPasswordInput.type(password)
        if (submit) this.loginBtn.click()
    }

    fillSignUpFormAndSubmit(name, email, submit = true) {
        this.pageIsDisplayed()
        this.signupNameInput.clear().type(name)
        this.signupEmailInput.clear().type(email)
        if (submit) this.signupBtn.click()
    }

    doSignInAndContinue(name, email) {
        this.pageIsDisplayed()
        this.fillLoginFormAndSubmit(name, email)
        return new HomePage()
    }

    doSignUpAndContinue(name, email) {
        this.pageIsDisplayed()
        this.fillSignUpFormAndSubmit(name, email)
        return new SignUpPage()
    }

    verifyInvalidLoginDataAndMessage(email, pass) {
        this.fillLoginFormAndSubmit(email, pass)
        this.errorMessage.should('be.visible')
        this.errorMessage.should('have.text', this.errorMessageCopy)
        this.pageIsDisplayed()
    }
}

export default LoginPage
