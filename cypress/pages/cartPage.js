class cartPage{

    elements = {
        checkoutBtn: () => cy.get('.btn.btn-default.check_out'),
        productName: () => cy.get('.cart_description a')
    }

    checkProductName(name){
        this.elements.productName().should('have.text', name)
    }

    goToCheckout(){
        this.elements.checkoutBtn().click();
    }

}

module.exports = new cartPage();