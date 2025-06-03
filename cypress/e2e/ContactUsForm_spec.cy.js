import HomePage from '../support/pageObjects/HomePage';
import ContactPage from '../support/pageObjects/ContactPage';

const homePage = new HomePage();
const contactPage = new ContactPage();

describe('Test Case 6: Contact Us Form', () => {
  beforeEach(() => {
    cy.fixture('FormData').as('form');
  });

  it('should successfully submit the contact form', function () {
    // Steps 1-3: Visit and verify homepage
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Step 4: Click on 'Contact Us'
    cy.contains('Contact us').click();

    // Step 5: Verify 'GET IN TOUCH'
    contactPage.verifyGetInTouchVisible();

    // Step 6: Fill in form
    contactPage.getNameField().type(this.form.name);
    contactPage.getEmailField().type(this.form.email);
    contactPage.getSubjectField().type(this.form.subject);
    contactPage.getMessageField().type(this.form.message);


    // Step 7: Click 'Submit'
    contactPage.clickSubmit();

    // Step 8: Confirm alert
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Press OK');
    });

    // Step 9: Verify success message
    contactPage.verifySuccessMessage();

    // Step 10: Click 'Home' and verify navigation
    contactPage.clickHomeButton();
    homePage.verifyHomePageVisible();
  });
});
