class productsPage{

    elements = {
        searchInput: () => cy.get('#search_product'),
        searchButton: () => cy.get('#submit_search'),
    }

    typeSearchProduct(product){
        this.elements.searchInput().type(product);
    }

    clickSearch(){
        this.elements.searchButton().click();
    }

    clickOnViewProduct(productName){
        cy.contains('.productinfo p', productName)      // Busca el texto "Blue Top"
            .parents('.product-image-wrapper')           // Sube hasta el contenedor del producto
            .find('.choose ul li a')                     // Encuentra el "View Product"
            .contains('View Product')                    // Verifica que sea el correcto
            .click();                                    // Hace clic
    }

}

module.exports = new productsPage();