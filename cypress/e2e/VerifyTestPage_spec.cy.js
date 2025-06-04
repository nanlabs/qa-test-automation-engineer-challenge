import HomePage from '../support/pageObjects/HomePage';

const homePage = new HomePage();

describe('Test Case 7: Verify Test Cases Page', () => {
  it('should navigate to the test cases page successfully', () => {
    // Visit home page and verify it's visible
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Click on 'Test Cases'
    homePage.clickTestCases();

    // Verify navigation to test cases page
    cy.url().should('include', '/test_cases');
    cy.contains('Test Cases').should('be.visible');
  });
});
