class ContactPage {
    getNameField() {
      return cy.get('[data-qa="name"]');
    }
  
    getEmailField() {
      return cy.get('[data-qa="email"]');
    }
  
    getSubjectField() {
      return cy.get('[data-qa="subject"]');
    }
  
    getMessageField() {
      return cy.get('[data-qa="message"]');
    }
  
    getUploadFileButton() {
      return cy.get('input[name="upload_file"]');
    }
  
    clickSubmit() {
      cy.get('[data-qa="submit-button"]').click();
    }
  
    verifyGetInTouchVisible() {
      cy.contains('Get In Touch').should('be.visible');
    }
  
    verifySuccessMessage() {
      cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
    }
  
    clickHomeButton() {
      cy.get('a[href="/"]').contains('Home').click();
    }
  }
  
  export default ContactPage;
  