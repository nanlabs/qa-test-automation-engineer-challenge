import HomePage from '../support/pageObjects/HomePage';
import CartPage from '../support/pageObjects/CartPage';
import ProductsPage from '../support/pageObjects/ProductsPage'

const homePage = new HomePage();
const cartPage = new CartPage();
const productPage = new ProductsPage();

describe('Test Case 11: Subscription from Cart Page', () => {
  it('should allow user to subscribe from footer on cart page', () => {
    // Visit and verify home page
    homePage.visit();
    homePage.verifyHomePageVisible();

    //since i found cart page won't work without an item we need to add one first to view page
          // add product
          cy.log('Cart is empty, adding a product first');
          productPage.visit();
          productPage.addFirstProductToCart();
          cartPage.visit();

    // Scroll down to footer
    cartPage.scrollToFooter();

    // Verify 'SUBSCRIPTION' text
    cartPage.verifySubscriptionTextVisible();

    // Enter email and click arrow
    const email = `test${Date.now()}@example.com`;
    cartPage.enterEmailInSubscription(email);
    cartPage.clickSubscribeArrow();

    // Verify success message
    cartPage.verifySubscriptionSuccessMessage();
  });
});
