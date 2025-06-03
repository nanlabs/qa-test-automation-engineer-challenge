import HomePage from '../support/pageObjects/HomePage';
import ProductsPage from '../support/pageObjects/ProductsPage';

const homePage = new HomePage();
const productsPage = new ProductsPage();

describe('Test Case 9: Search Product', () => {
  it('should search for a product and display matching results', () => {
    // Step 1-3: Launch & verify homepage
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Step 4: Click on 'Products' button
    homePage.clickProducts();

    // Step 5: Verify navigated to All Products page
    productsPage.verifyProductsPageVisible();

    // Step 6: Search for a product
    const productName = 'Dress'; // any word is ok for this basic search related to products
    productsPage.enterSearchTerm(productName);
    productsPage.clickSearchButton();

    // Step 7: Verify 'SEARCHED PRODUCTS' is visible
    productsPage.verifySearchedProductsTitleVisible();

    // Step 8: Verify product list is shown
    productsPage.verifySearchedProductsVisible();
  });
});
