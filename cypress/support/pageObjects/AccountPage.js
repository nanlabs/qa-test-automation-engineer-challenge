class AccountPage {
    verifyAccountCreated() {
      cy.contains('Account Created!').should('be.visible')
    }
  
    clickContinueButton() {
      cy.get('a[data-qa="continue-button"]').click()
    }
  
    verifyLoggedIn(name) {
      cy.contains(`Logged in as ${name}`).should('be.visible')
    }
  
    deleteAccount() {
      cy.contains('Delete Account').click()
    }
  
    verifyAccountDeleted() {
      cy.contains('Account Deleted!').should('be.visible')
      cy.get('a[data-qa="continue-button"]').click()
    }
  }
  export default AccountPage
  