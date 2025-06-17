/**
 * @author: drodriguez
 * @date: 06-16-2025
 */

const BasePage = require('./base_page')

class ProductsPage extends BasePage {

    get pagePath() { return '/products' }

    // Login section
    get loginTitle() { return cy.get('.login-form > h2') }
    get loginEmailInput() { return cy.get('[data-qa=login-email]') }
    get loginPasswordInput() { return cy.get('[data-qa=login-password]') }
    get loginBtn() { return cy.get('[data-qa=login-button]') }

    // Sign up Section
    get signupTitle() { return cy.get('.signup-form > h2') }
    get signupNameInput() { return cy.get('[data-qa=signup-name]') }
    get signupEmailInput() { return cy.get('[data-qa=signup-email]') }
    get signupBtn() { return cy.get('[data-qa=signup-button]') }


}

export default ProductsPage
