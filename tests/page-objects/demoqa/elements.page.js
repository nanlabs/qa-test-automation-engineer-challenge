/**
 * DemoQA Elements Page Object
 * Contains all elements and methods for the DemoQA elements page
 * @author Guada Gramajo
 * @date 11-06-25
 */

class ElementsPage {
  // Main menu items
  get elementsCard() { return cy.contains('.card', 'Elements') }
  get formsCard() { return cy.contains('.card', 'Forms') }
  get alertsCard() { return cy.contains('.card', 'Alerts, Frame & Windows') }
  get widgetsCard() { return cy.contains('.card', 'Widgets') }
  get interactionsCard() { return cy.contains('.card', 'Interactions') }
  get bookStoreCard() { return cy.contains('.card', 'Book Store Application') }

  // Elements submenu
  get textBoxMenuItem() { return cy.get('#item-0').contains('Text Box') }
  get checkBoxMenuItem() { return cy.get('#item-1').contains('Check Box') }
  get radioButtonMenuItem() { return cy.get('#item-2').contains('Radio Button') }
  get webTablesMenuItem() { return cy.get('#item-3').contains('Web Tables') }
  get buttonsMenuItem() { return cy.get('#item-4').contains('Buttons') }
  get linksMenuItem() { return cy.get('#item-5').contains('Links') }
  get brokenLinksMenuItem() { return cy.get('#item-6').contains('Broken Links - Images') }
  get uploadDownloadMenuItem() { return cy.get('#item-7').contains('Upload and Download') }
  get dynamicPropertiesMenuItem() { return cy.get('#item-8').contains('Dynamic Properties') }

  // Text Box elements
  get fullNameInput() { return cy.get('#userName') }
  get emailInput() { return cy.get('#userEmail') }
  get currentAddressInput() { return cy.get('#currentAddress') }
  get permanentAddressInput() { return cy.get('#permanentAddress') }
  get submitButton() { return cy.get('#submit') }
  get outputName() { return cy.get('#name') }
  get outputEmail() { return cy.get('#email') }
  get outputCurrentAddress() { return cy.get('p#currentAddress') }
  get outputPermanentAddress() { return cy.get('p#permanentAddress') }

  // Check Box elements
  get expandAllButton() { return cy.get('.rct-option-expand-all') }
  get collapseAllButton() { return cy.get('.rct-option-collapse-all') }
  get homeCheckbox() { return cy.get('label[for="tree-node-home"] .rct-checkbox') }
  get desktopCheckbox() { return cy.get('label[for="tree-node-desktop"] .rct-checkbox') }
  get documentsCheckbox() { return cy.get('label[for="tree-node-documents"] .rct-checkbox') }
  get downloadsCheckbox() { return cy.get('label[for="tree-node-downloads"] .rct-checkbox') }
  get checkboxResult() { return cy.get('#result') }

  // Radio Button elements
  get yesRadioButton() { return cy.get('#yesRadio') }
  get yesRadioLabel() { return cy.get('label[for="yesRadio"]') }
  get impressiveRadioButton() { return cy.get('#impressiveRadio') }
  get impressiveRadioLabel() { return cy.get('label[for="impressiveRadio"]') }
  get noRadioButton() { return cy.get('#noRadio') }
  get noRadioLabel() { return cy.get('label[for="noRadio"]') }
  get radioResult() { return cy.get('.text-success') }

  // Web Tables elements
  get addButton() { return cy.get('#addNewRecordButton') }
  get searchBox() { return cy.get('#searchBox') }
  get webTable() { return cy.get('.rt-table') }
  get tableRows() { return cy.get('.rt-tbody .rt-tr-group') }
  get editButtons() { return cy.get('span[title="Edit"]') }
  get deleteButtons() { return cy.get('span[title="Delete"]') }

  // Registration form (modal)
  get firstNameInput() { return cy.get('#firstName') }
  get lastNameInput() { return cy.get('#lastName') }
  get userEmailInput() { return cy.get('#userEmail') }
  get ageInput() { return cy.get('#age') }
  get salaryInput() { return cy.get('#salary') }
  get departmentInput() { return cy.get('#department') }
  get submitModalButton() { return cy.get('#submit') }
  get closeModalButton() { return cy.get('.close') }

  // Buttons elements
  get doubleClickButton() { return cy.get('#doubleClickBtn') }
  get rightClickButton() { return cy.get('#rightClickBtn') }
  get dynamicClickButton() { return cy.contains('button', 'Click Me') }
  get doubleClickMessage() { return cy.get('#doubleClickMessage') }
  get rightClickMessage() { return cy.get('#rightClickMessage') }
  get dynamicClickMessage() { return cy.get('#dynamicClickMessage') }

  // Page methods
  visit() {
    cy.visit('https://demoqa.com')
    return this
  }

  navigateToElements() {
    this.elementsCard.click()
    return this
  }

  navigateToTextBox() {
    this.textBoxMenuItem.click()
    cy.url().should('include', '/text-box')
    return this
  }

  navigateToCheckBox() {
    this.checkBoxMenuItem.click()
    cy.url().should('include', '/checkbox')
    return this
  }

  navigateToRadioButton() {
    this.radioButtonMenuItem.click()
    cy.url().should('include', '/radio-button')
    return this
  }

  navigateToWebTables() {
    this.webTablesMenuItem.click()
    cy.url().should('include', '/webtables')
    return this
  }

  navigateToButtons() {
    this.buttonsMenuItem.click()
    cy.url().should('include', '/buttons')
    return this
  }

  // Text Box methods
  fillTextBoxForm(userData) {
    this.fullNameInput.clear().type(userData.fullName)
    this.emailInput.clear().type(userData.email)
    this.currentAddressInput.clear().type(userData.currentAddress)
    this.permanentAddressInput.clear().type(userData.permanentAddress)
    return this
  }

  submitTextBoxForm() {
    this.submitButton.click()
    return this
  }

  verifyTextBoxOutput(expectedData) {
    this.outputName.should('contain.text', expectedData.fullName)
    this.outputEmail.should('contain.text', expectedData.email)
    this.outputCurrentAddress.should('contain.text', expectedData.currentAddress)
    this.outputPermanentAddress.should('contain.text', expectedData.permanentAddress)
    return this
  }

  // Check Box methods
  expandAllCheckboxes() {
    this.expandAllButton.click()
    return this
  }

  collapseAllCheckboxes() {
    this.collapseAllButton.click()
    return this
  }

  selectHomeCheckbox() {
    this.homeCheckbox.click()
    return this
  }

  selectDesktopCheckbox() {
    this.desktopCheckbox.click()
    return this
  }

  verifyCheckboxResult(expectedText) {
    this.checkboxResult.should('contain.text', expectedText)
    return this
  }

  // Radio Button methods
  selectYesRadio() {
    this.yesRadioLabel.click()
    return this
  }

  selectImpressiveRadio() {
    this.impressiveRadioLabel.click()
    return this
  }

  verifyRadioResult(expectedText) {
    this.radioResult.should('contain.text', expectedText)
    return this
  }

  verifyNoRadioDisabled() {
    this.noRadioButton.should('be.disabled')
    return this
  }

  // Web Tables methods
  clickAddButton() {
    this.addButton.click()
    return this
  }

  searchInTable(searchTerm) {
    this.searchBox.clear().type(searchTerm)
    return this
  }

  fillRegistrationForm(userData) {
    this.firstNameInput.clear().type(userData.firstName)
    this.lastNameInput.clear().type(userData.lastName)
    this.userEmailInput.clear().type(userData.email)
    this.ageInput.clear().type(userData.age.toString())
    this.salaryInput.clear().type(userData.salary.toString())
    this.departmentInput.clear().type(userData.department)
    return this
  }

  submitRegistrationForm() {
    this.submitModalButton.click()
    return this
  }

  verifyTableContainsData(userData) {
    this.webTable.should('contain.text', userData.firstName)
    this.webTable.should('contain.text', userData.lastName)
    this.webTable.should('contain.text', userData.email)
    return this
  }

  editFirstRecord() {
    this.editButtons.first().click()
    return this
  }

  deleteFirstRecord() {
    this.deleteButtons.first().click()
    return this
  }

  getTableRowCount() {
    return this.tableRows.its('length')
  }

  // Buttons methods
  performDoubleClick() {
    this.doubleClickButton.dblclick()
    return this
  }

  performRightClick() {
    this.rightClickButton.rightclick()
    return this
  }

  performDynamicClick() {
    this.dynamicClickButton.click()
    return this
  }

  verifyDoubleClickMessage() {
    this.doubleClickMessage.should('contain.text', 'You have done a double click')
    return this
  }

  verifyRightClickMessage() {
    this.rightClickMessage.should('contain.text', 'You have done a right click')
    return this
  }

  verifyDynamicClickMessage() {
    this.dynamicClickMessage.should('contain.text', 'You have done a dynamic click')
    return this
  }

  // Utility methods
  scrollToTop() {
    cy.scrollTo('top')
    return this
  }

  scrollToBottom() {
    cy.scrollTo('bottom')
    return this
  }

  takeScreenshot(name) {
    cy.screenshot(`demoqa-${name}`)
    return this
  }
}

export default ElementsPage 