import HomePage from '../support/pageObjects/HomePage';
import ContactPage from '../support/pageObjects/ContactPage';

const homePage = new HomePage();
const contactPage = new ContactPage();

describe('Test Case 6: Contact Us Form', () => {
  beforeEach(() => {
    cy.fixture('FormData').as('form');
  });

  it('should successfully submit the contact form', function () {
    // Visit and verify homepage
    homePage.visit();
    homePage.verifyHomePageVisible();

    // Click on 'Contact Us'
    cy.contains('Contact us').click();

    // Verify 'GET IN TOUCH'
    contactPage.verifyGetInTouchVisible();

    // Fill in form
    contactPage.getNameField().type(this.form.name);
    contactPage.getEmailField().type(this.form.email);
    contactPage.getSubjectField().type(this.form.subject);
    contactPage.getMessageField().type(this.form.message);


    // Click 'Submit'
    contactPage.clickSubmit();

    // Confirm alert
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Press OK');
    });

    // Verify success message
    contactPage.verifySuccessMessage();

    // Click 'Home' and verify navigation
    contactPage.clickHomeButton();
    homePage.verifyHomePageVisible();
  });
});
