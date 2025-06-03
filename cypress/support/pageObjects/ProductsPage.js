class ProductsPage {
    verifyProductsPageVisible() {
      cy.url().should('include', '/products');
      cy.contains('All Products').should('be.visible');
    }
  
    verifyProductsListVisible() {
      cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
    }
  
    clickFirstViewProduct() {
      cy.get('.product-overlay').first().invoke('show');
      cy.contains('View Product').first().click();
    }

    enterSearchTerm(term) {
      cy.get('#search_product').type(term);
    }

    clickSearchButton() {
      cy.get('#submit_search').click();
    }

    verifySearchedProductsTitleVisible() {
      cy.contains('Searched Products').should('be.visible');
    }

    verifySearchedProductsVisible() {
      cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
    }

    visit() {
      cy.visit('https://automationexercise.com/products');
    }

    addFirstProductToCart() {
      cy.get('.product-overlay').first().invoke('show');
      cy.contains('Add to cart').first().click();
      cy.contains('Continue Shopping').click();
    }

    addProductToCartByIndex(index) {
      cy.get('.product-overlay').eq(index).invoke('show');
      cy.get('.product-overlay')
        .eq(index)
        .contains('Add to cart')
        .click();
    }

    clickContinueShopping() {
      cy.contains('Continue Shopping').click();
    }

    clickViewCart() {
      cy.contains('View Cart').click();
    }
    

  }
  export default ProductsPage;
  