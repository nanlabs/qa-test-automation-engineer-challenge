const elements = {
  dropdown: '#dropdown',
  selectedOption: '#dropdown option:selected'
};

class DropdownPage {
  visit() {
    cy.visit('/dropdown');
  }

  selectOption(value) {
    cy.get(elements.dropdown).select(value);
  }

  assertSelectedOptionValue(value) {
    cy.get(elements.dropdown).should('have.value', value);
  }

  assertSelectedOptionText(text) {
    cy.get(elements.selectedOption).should('have.text', text);
  }

  tryToSelectInvalidOption(value) {
    cy.get(elements.dropdown).select(value, { force: true });
  }
}

export default new DropdownPage();
