import BasePage from './BasePage';
import NavBar from './NavBar';


/**
 * Page object for the Home page
 */
class HomePage extends BasePage {
  protected path = '/';
  
  // Selectors
  private readonly homeHeading = 'h1';
  private readonly subscriptionHeading = '.single-widget h2';
  private readonly categories = '.left-sidebar h2';
  private readonly brands = '.brands_products h2';
  private readonly scrollUpButton = '#scrollUp';

  verifyHomePageIsVisible(): void {
    cy.title().should('eq', 'Automation Exercise');
    cy.get(this.homeHeading)
        .first().should('contain', 'Automation');
  }
} export default new HomePage();