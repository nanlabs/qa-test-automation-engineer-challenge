class SignupPage {
    verifyNewUserSignupVisible() {
      cy.contains('New User Signup!').should('be.visible')
    }
  
    enterNameEmail(name, email) {
      cy.get('input[data-qa="signup-name"]').type(name)
      cy.get('input[data-qa="signup-email"]').type(email)
    }
  
    clickSignupButton() {
      cy.get('button[data-qa="signup-button"]').click()
    }

    verifyEmailAlreadyExistsError() {
      cy.contains('Email Address already exist!').should('be.visible');
    }
  
    verifyEnterAccountInfoVisible() {
      cy.contains('Enter Account Information').should('be.visible')
    }
  
    fillAccountInfo(user) {
      if (user.title === 'Mr') cy.get('#id_gender1').check()
      else cy.get('#id_gender2').check()
  
      cy.get('#password').type(user.password)
      cy.get('#days').select(user.dob.day)
      cy.get('#months').select(user.dob.month)
      cy.get('#years').select(user.dob.year)
  
      if (user.newsletter) cy.get('#newsletter').check()
      if (user.offers) cy.get('#optin').check()
  
      cy.get('#first_name').type(user.firstName)
      cy.get('#last_name').type(user.lastName)
      cy.get('#company').type(user.company)
      cy.get('#address1').type(user.address)
      cy.get('#address2').type(user.address2)
      cy.get('#country').select(user.country)
      cy.get('#state').type(user.state)
      cy.get('#city').type(user.city)
      cy.get('#zipcode').type(user.zipcode)
      cy.get('#mobile_number').type(user.mobile)
    }
  
    submitAccountCreation() {
      cy.get('button[data-qa="create-account"]').click()
    }
  }
  export default SignupPage
  