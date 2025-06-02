class productDetailsPage{

    elements = {
        addToCartBtn: () => cy.get('.btn.btn-default.cart'),
        productName: () => cy.get('.product-information h2'),
        viewCartBtn: () => cy.contains('u', 'View Cart')
    }

    checkProductName(name){
        this.elements.productName().should('have.text', name)
    }

    clickAddToCart(){
        this.elements.addToCartBtn().click();
    }

    goToCart(){
        this.elements.viewCartBtn().click();
    }

}

module.exports = new productDetailsPage();