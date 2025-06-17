/**
 * @author: drodriguez
 * @date: 06-16-25
 */

import HomePage from './home_page'

const BasePage = require('./base_page')

class AccountCreatedPage extends BasePage {

    get pagePath() { return '/account_created' }

    // Login section
    get title() { return cy.get('[data-qa=account-created]') }
    get messages() { return cy.get('.row > div > p') }
    get continueBtn() { return cy.get('[data-qa=continue-button]') }

    get siteContent() {
        return {
            title: 'Account Created!',
            congrats: ['Congratulations! Your new account has been successfully created!',
                'You can now take advantage of member privileges to enhance your online shopping experience with us.'
            ],
            continueBtn: {
                text: 'Continue',
                href: '/'
            }
        }
    }

    // Methods
    pageIsDisplayed() {
        cy.url().should('eq', Cypress.config('baseUrl') + this.pagePath)
        this.title.should('be.visible')
        this.messages.should('be.visible')
    }

    verifyCongratsContentAndContinue() {
        this.pageIsDisplayed()
        this.title.contains(this.siteContent.title)
        this.messages.should('have.length', 2).eq(0).should('contain', this.siteContent.congrats[0])
        this.messages.eq(1).should('contain', this.siteContent.congrats[1])

        this.continueBtn.invoke('attr', 'href')
            .should('eq', this.siteContent.continueBtn.href)
        this.continueBtn.should('contain.text', this.siteContent.continueBtn.text)
        this.continueBtn.click()
        return new HomePage()
    }

}

export default AccountCreatedPage
