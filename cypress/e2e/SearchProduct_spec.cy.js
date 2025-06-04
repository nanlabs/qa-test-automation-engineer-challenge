import HomePage from '../support/pageObjects/HomePage';
import ProductsPage from '../support/pageObjects/ProductsPage';

const homePage = new HomePage();
const productsPage = new ProductsPage();

describe('Test Case 9: Search Product', () => {
  it('should search for a product and display matching results', () => {
    //  Launch & verify homepage
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Click on 'Products' button
    homePage.clickProducts();

    // Verify navigated to All Products page
    productsPage.verifyProductsPageVisible();

    // Search for a product
    const productName = 'Dress'; // any word is ok for this basic search related to products
    productsPage.enterSearchTerm(productName);
    productsPage.clickSearchButton();

    // Verify 'SEARCHED PRODUCTS' is visible
    productsPage.verifySearchedProductsTitleVisible();

    // Verify product list is shown
    productsPage.verifySearchedProductsVisible();
  });
});
