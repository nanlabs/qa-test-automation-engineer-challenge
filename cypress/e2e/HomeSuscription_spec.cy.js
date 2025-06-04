import HomePage from '../support/pageObjects/HomePage';

const homePage = new HomePage();

describe('Test Case 10: Verify Subscription in Home Page', () => {
  it('should allow user to subscribe from the footer', () => {
    // Visit and verify homepage
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Scroll to footer
    homePage.scrollToFooter();

    // Verify 'SUBSCRIPTION' text
    homePage.verifySubscriptionTextVisible();

    // Enter email and click arrow
    const email = `test${Date.now()}@example.com`;
    homePage.enterEmailInSubscription(email);
    homePage.clickSubscribeArrow();

    // Verify success message
    homePage.verifySubscriptionSuccessMessage();
  });
});
