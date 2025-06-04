import HomePage from '../support/pageObjects/HomePage';
import ProductsPage from '../support/pageObjects/ProductsPage';
import CartPage from '../support/pageObjects/CartPage';

const homePage = new HomePage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();

describe('Test Case 13: Remove Products from Cart', () => {
  it('should add and then remove a product from the cart', () => {
    // Visit and verify home page
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Add a product to cart
    productsPage.visit();
    productsPage.addFirstProductToCart();
    cartPage.visit();

    // Verify cart page is displayed
    cartPage.verifyCartPageVisible();

    // Click 'X' to remove product
    cartPage.removeFirstProduct();

    // Verify product is removed
    cartPage.verifyProductRemoved();
  });
});
