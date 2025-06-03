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
  }
  export default ProductsPage;
  