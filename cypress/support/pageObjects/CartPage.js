class CartPage {
    visit() {
      cy.visit('https://automationexercise.com/view_cart');
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
  }
  
  export default CartPage;
  