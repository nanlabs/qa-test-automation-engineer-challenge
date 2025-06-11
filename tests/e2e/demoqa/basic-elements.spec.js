/**
 * DemoQA Basic Elements Test Suite
 * Tests basic UI elements on DemoQA website
 * @author Guada Gramajo
 * @date 11-06-25
 */

import ElementsPage from '../../page-objects/demoqa/elements.page.js'

describe('DemoQA - Basic Elements', () => {
  let elementsPage

  beforeEach(() => {
    elementsPage = new ElementsPage()
    cy.visit('https://demoqa.com')
    cy.waitForPageLoad()
  })

  it('should load homepage and navigate to elements', () => {
    elementsPage.elementsCard.should('be.visible')
    elementsPage.navigateToElements()
    elementsPage.textBoxMenuItem.should('be.visible')
  })

  it('should fill text box form', () => {
    const testData = {
      fullName: 'John Doe',
      email: 'john@example.com',
      currentAddress: '123 Main St',
      permanentAddress: '456 Oak Ave'
    }

    elementsPage
      .navigateToElements()
      .navigateToTextBox()
      .fillTextBoxForm(testData)
      .submitTextBoxForm()
      .verifyTextBoxOutput(testData)
  })

  it('should interact with radio buttons', () => {
    elementsPage
      .navigateToElements()
      .navigateToRadioButton()
      .selectYesRadio()
      .verifyRadioResult('Yes')
  })
}) 