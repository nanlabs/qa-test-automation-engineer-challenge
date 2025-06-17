import NavBar from "./NavBar";

/**
 * Base Page Object that all other page objects will extend
 * Contains common methods and properties shared across all pages
 */
export default abstract class BasePage {

  public readonly navbar = new NavBar(); //Override it as undefined in pages with no NavBar
  
  
  // The URL path for the page, to be implemented by each page object
   
  protected abstract path: string;

  visit(options?: Partial<Cypress.VisitOptions>): Cypress.Chainable<Cypress.AUTWindow> {
    return cy.visit(this.path, options);
  }

  
  // Navigate to the page
   
  get body() {
    return cy.get('body');
  }
  
}