/**
 * @author: drodriguez
 * @date: 06-16-2025
 */
const headerComponent = require('./shared_components/header_page')
const footerComponent = require('./shared_components/footer_page')

class BasePage {

  get pagePath() { return '/' } // This will be overwritten on each page (example: /login)
  get header() { return headerComponent }
  get footer() { return footerComponent }

  navigate() {
    const url = `${Cypress.config('baseUrl').replace(/\/$/, '')}${this.pagePath}`;
    cy.log(`Navigating to ${url}`);
    cy.visit(url);
  }

  getHeader() {
    return this.header
  }

  getFooter() {
    return this.footer
  }

}

export default BasePage
