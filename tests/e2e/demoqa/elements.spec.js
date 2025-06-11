/**
 * DemoQA Elements Test Suite
 * Tests the various UI elements and interactions on DemoQA website
 * @author Guada Gramajo
 * @date 11-06-25
 * @requires ElementsPage page object
 */

import ElementsPage from '../../page-objects/demoqa/elements.page.js'

describe('DemoQA - Elements', () => {
  let elementsPage

  beforeEach(() => {
    // Initialize page object and navigate to DemoQA
    elementsPage = new ElementsPage()
    elementsPage.visit()
    cy.waitForPageLoad()
    
    // Wait for any scripts to load and settle
    cy.wait(2000)
    
    // Ensure page is fully interactive
    cy.get('body').should('be.visible')
  })

  describe('Page Load and Navigation', () => {
    it('should load DemoQA homepage successfully', () => {
      // Verify main cards are visible
      elementsPage.elementsCard.should('be.visible')
      elementsPage.formsCard.should('be.visible')
      elementsPage.alertsCard.should('be.visible')
      elementsPage.widgetsCard.should('be.visible')
      elementsPage.interactionsCard.should('be.visible')
      elementsPage.bookStoreCard.should('be.visible')
      
      // Take screenshot for documentation
      cy.takeScreenshot('demoqa-homepage')
    })

    it('should navigate to elements section', () => {
      elementsPage.navigateToElements()
      
      // Verify elements submenu is visible
      elementsPage.textBoxMenuItem.should('be.visible')
      elementsPage.checkBoxMenuItem.should('be.visible')
      elementsPage.radioButtonMenuItem.should('be.visible')
      elementsPage.webTablesMenuItem.should('be.visible')
      elementsPage.buttonsMenuItem.should('be.visible')
    })
  })

  

  afterEach(() => {
    // Clean up after each test
    cy.clearLocalStorage()
    cy.clearCookies()
  })
}) 