class cartPage{

    elements = {
        name: () => cy.get('input[data-qa="name-on-card"]'),
        cardNumer: () => cy.get('input[data-qa="card-number"]'),
        cvcNumber: () => cy.get('input[data-qa="cvc"]'),
        expirationMonth: () => cy.get('input[data-qa="expiry-month"]'),
        expirationYear: () => cy.get('input[data-qa="expiry-year"]'),
        confirmBtn: () => cy.get('button[data-qa="pay-button"]'),
        messageOrderPlaced: () => cy.contains('b', 'Order Placed!')
    }

    fillPayment(){
        this.elements.name().type('33');
        this.elements.cardNumer().type('33');
        this.elements.cvcNumber().type('33');
        this.elements.expirationMonth().type('33');
        this.elements.expirationYear().type('33');
        this.elements.confirmBtn().click();
    }

    checkOrderPlaced(){
        this.elements.messageOrderPlaced().should('be.visible');
    }

}

module.exports = new cartPage();