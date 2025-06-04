import ProductsPage from '../support/pageObjects/ProductsPage';
import ProductDetails from '../support/pageObjects/ProductDetails';
import HomePage from '../support/pageObjects/HomePage';

const productsPage = new ProductsPage();
const productDetails = new ProductDetails();
const homePage = new HomePage();

describe('Test Case 14: Add Review on a Product', () => {
  before(() => {
    cy.fixture('reviewData').as('review');
  });

  it('should allow user to add a review on a product', function () {
    // Visit homepage and navigate to products
    homePage.visit();
    
    // Go to products page
    productsPage.visit();
    productsPage.verifyProductsPageVisible();

    // Click 'View Product'
    productsPage.clickFirstViewProduct();

    // Verify 'Write Your Review'
    productDetails.verifyReviewSectionVisible();

    // Submit review
    productDetails.submitReview(this.review.name, this.review.email, this.review.review);

    // Verify success message
    productDetails.verifyReviewSuccessMessage();
  });
});
