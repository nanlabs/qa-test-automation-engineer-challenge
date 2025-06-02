class checkoutPage{

    elements = {
        placeOrderBtn: () => cy.get('.btn.btn-default.check_out'),
        productName: () => cy.get('.cart_description a'),
        nameField: ()  => cy.get('.address_firstname.address_lastname')
    }

    checkName(name){
        this.elements.nameField().first().should('have.text', name)
    }

    checkProductName(name){
        this.elements.productName().should('have.text', name)
    }

    placeOrer(){
        this.elements.placeOrderBtn().click();
    }

}

module.exports = new checkoutPage();