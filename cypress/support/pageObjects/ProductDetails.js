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

    verifyReviewSectionVisible() {
      cy.contains('Write Your Review').should('be.visible');
    }

    verifyReviewSuccessMessage() {
      cy.contains('Thank you for your review.').should('be.visible');
    }

    submitReview(name, email, review) {
      cy.get('#name').type(name);
      cy.get('#email').type(email);
      cy.get('#review').type(review);
      cy.get('#button-review').click();
    }

  }
  export default ProductDetailPage;
  