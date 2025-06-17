/**
 * @author: drodriguez
 * @date: 06-16-2025
 */


const BasePage = require('./base_page')

class HomePage extends BasePage {

    get pagePath() { return '/' }
    get carouselContainer() { return cy.get('#slider-carousel') }
    get carouselDots() { return cy.get('.carousel-indicators') }


    // Methods
    pageIsDisplayed() {
        cy.url().should('eq', Cypress.config('baseUrl') + this.pagePath)
        this.carouselContainer.should('be.visible')
        this.carouselDots.should('be.visible')
    }

}

export default HomePage
