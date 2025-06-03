import HomePage from '../support/pageObjects/HomePage';
import ProductsPage from '../support/pageObjects/ProductsPage';
import ProductDetails from '../support/pageObjects/ProductDetails';

const homePage = new HomePage();
const productsPage = new ProductsPage();
const productDetails = new ProductDetails();

describe('Test Case 8: Verify All Products and Product Detail Page', () => {
  it('should navigate to All Products and verify product details', () => {
    // Steps 1-3: Launch & verify homepage
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Step 4: Click 'Products'
    homePage.clickProducts();

    // Steps 5-6: Verify product list
    productsPage.verifyProductsPageVisible();
    productsPage.verifyProductsListVisible();

    // Step 7: Click 'View Product' of first product
    productsPage.clickFirstViewProduct();

    // Steps 8-9: Verify product detail page
    cy.url().should('include', '/product_details/');
    productDetails.verifyProductDetails();
  });
});
