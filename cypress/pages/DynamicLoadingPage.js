const elements = {
    startButton: '#start button',
    loadingSpinner: '#loading',
    resultText: '#finish h4'
};

class DynamicLoadingPage {
    visit() {
        cy.visit('/dynamic_loading/1');
    }

    clickStart() {
        cy.get(elements.startButton).click();
    }

    assertLoading() {
        cy.get(elements.loadingSpinner).should('be.visible');
    }

    assertResultText(expectedText) {
        cy.get(elements.resultText, { timeout: 10000 }).should('be.visible').and('have.text', expectedText);
    }
}

export default new DynamicLoadingPage();
