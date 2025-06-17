/**
 * @author: drodriguez
 * @date: 06-16-2025
 */

import AccountCreatedPage from './account_created_page'

const BasePage = require('./base_page')

class SignUpPage extends BasePage {

    get pagePath() { return '/signup' }

    // Account info section
    get title() { return cy.get('.login-form > h2') }
    get gender() {
        return {
            mr: cy.get('#uniform-id_gender1'),
            mrs: cy.get('#uniform-id_gender2')
        }
    }
    get nameField() { return cy.get('[data-qa=name]') }
    get emailField() { return cy.get('[data-qa=email]') }
    get passwordField() { return cy.get('[data-qa=password]') }
    get dayField() { return cy.get('[data-qa=days]') }
    get monthField() { return cy.get('[data-qa=months]') }
    get yearField() { return cy.get('[data-qa=years]') }
    // Checkbox
    get signUpNewsletterField() { return cy.get('#newsletter') }
    get receiveOffersField() { return cy.get('#optin') }

    // Address data
    get addressTitle() { return cy.get('form > h2') }
    get firstnameField() { return cy.get('[data-qa=first_name]') }
    get lastnameField() { return cy.get('[data-qa=last_name]') }
    get companyField() { return cy.get('[data-qa=company]') }
    get addressField() { return cy.get('[data-qa=address]') }
    get address2Field() { return cy.get('[data-qa=address2]') }
    get countryField() { return cy.get('[data-qa=country]') }
    get stateField() { return cy.get('[data-qa=state]') }
    get cityField() { return cy.get('[data-qa=city]') }
    get zipField() { return cy.get('[data-qa=zipcode]') }
    get mobileField() { return cy.get('[data-qa=mobile_number]') }

    get createAccountBtn() { return cy.get('[data-qa=create-account]') }

    // Methods
    pageIsDisplayed() {
        cy.url().should('eq', Cypress.config('baseUrl') + this.pagePath)
        this.nameField.should('be.visible')
        this.zipField.should('be.visible')
    }

    fillForm(userData, submitForm = true) {
        this.pageIsDisplayed()
        this.fillAccountInformationForm(userData)
        this.fillAddressInformationForm(userData)
        if (submitForm) this.createAccountBtn.click()
    }

    fillAccountInformationForm(userData) {
        (userData.title == 'Mr') ? this.gender.mr.click() : this.gender.mrs.click()
        this.nameField.invoke('val').should('eq', userData.firstname)
        this.passwordField.type(userData.password)

        //DOB
        let dobArr = userData.dob.split('-')
        this.yearField.select(dobArr[0])
        this.monthField.select(parseInt(dobArr[1]))
        this.dayField.select(parseInt(dobArr[2]))

        if (userData.newsletterCheck) this.signUpNewsletterField.click()
        if (userData.specialOffersCheck) this.receiveOffersField.click()

    }

    fillAddressInformationForm(userData) {
        this.firstnameField.type(userData.firstname)
        this.lastnameField.type(userData.lastname)
        if (userData.company != null) this.companyField.type(userData.company)
        this.addressField.type(userData.address)
        if (userData.address2 != null) this.address2Field.type(userData.address2)

        this.countryField.select(userData.country)
        this.stateField.type(userData.state)
        this.cityField.type(userData.city)
        this.zipField.type(userData.zipcode)
        this.mobileField.type(userData.mobileNumber)
    }

    /**
     * @param {Object} userData retrieved from RandomData.getRandomUser() format
     */
    doSignUpAndContinue(userData) {
        this.pageIsDisplayed()
        this.fillForm(userData)
        return new AccountCreatedPage()
    }

}

export default SignUpPage
