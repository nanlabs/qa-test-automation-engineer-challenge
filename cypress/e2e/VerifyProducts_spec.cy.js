import HomePage from '../support/pageObjects/HomePage';
import ProductsPage from '../support/pageObjects/ProductsPage';
import ProductDetails from '../support/pageObjects/ProductDetails';

const homePage = new HomePage();
const productsPage = new ProductsPage();
const productDetails = new ProductDetails();

describe('Test Case 8: Verify All Products and Product Detail Page', () => {
  it('should navigate to All Products and verify product details', () => {
    // Launch & verify homepage
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Click 'Products'
    homePage.clickProducts();

    // Verify product list
    productsPage.verifyProductsPageVisible();
    productsPage.verifyProductsListVisible();

    // Click 'View Product' of first product
    productsPage.clickFirstViewProduct();

    // Verify product detail page
    cy.url().should('include', '/product_details/');
    productDetails.verifyProductDetails();
  });
});
