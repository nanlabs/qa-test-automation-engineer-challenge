class ProductDetailPage {
    verifyProductDetails() {
      cy.get('.product-information').within(() => {
        cy.get('h2').should('be.visible');                      // Product Name
        cy.contains('Category').should('be.visible');           // Categoria
        cy.contains('Rs.').should('be.visible');                // Precio
        cy.contains('Availability').should('be.visible');       // disponible
        cy.contains('Condition').should('be.visible');          // Condicion
        cy.contains('Brand').should('be.visible');              // marca
      });
    }
  }
  export default ProductDetailPage;
  