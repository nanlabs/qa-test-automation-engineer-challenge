class CartPage {
    visit() {
      cy.visit('https://automationexercise.com/view_cart');
    }

    verifyProductCount(expectedCount) {
      cy.get('.cart_quantity').should('have.length', expectedCount);
    }
  
    scrollToFooter() {
      cy.scrollTo('bottom');
    }
  
    verifySubscriptionTextVisible() {
      cy.contains('Subscription').should('be.visible');
    }
  
    enterEmailInSubscription(email) {
      cy.get('#susbscribe_email').type(email);
    }
  
    clickSubscribeArrow() {
      cy.get('#subscribe').click();
    }
  
    verifySubscriptionSuccessMessage() {
      cy.contains('You have been successfully subscribed!').should('be.visible');
    }

    verifyProductCount(expectedCount) {
      cy.get('.cart_quantity').should('have.length', expectedCount);
    }

    verifyProductPricesAndTotal() {
      cy.get('.cart_total_price').each(($el, index) => {
        cy.wrap($el).should('not.be.empty');
      });
      cy.get('.cart_price').each(($el, index) => {
        cy.wrap($el).should('not.be.empty');
      });
      cy.get('.cart_quantity').each(($el, index) => {
        cy.wrap($el).should('not.be.empty');
      });
    }
    
  }
  
  export default CartPage;
  