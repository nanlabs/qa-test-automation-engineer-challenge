import HomePage from '../support/pageObjects/HomePage';
import ProductsPage from '../support/pageObjects/ProductsPage';
import CartPage from '../support/pageObjects/CartPage';

const homePage = new HomePage();
const productPage = new ProductsPage();
const cartPage = new CartPage();

describe('Test Case 12: Adding Products to Cart', () => {
  it('should add product to the cart and verify details', () => {
    // Launch and verify homepage
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Navigate to Products page
    productPage.visit();

    // Add first product (index 0)
    productPage.addFirstProductToCart();

    // Click View Cart
    cartPage.visit();

    // Verify price, quantity, and total price
    cartPage.verifyProductPricesAndTotal();
  });
});
