const tests = require('../../fixtures/example');
const homePage = require('../../pages/homePage');

describe('UI tests', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/login');
  })
  
  tests.forEach(test =>{
      it(test.name, () => {
        cy.viewport(test.size)
        cy.visit('https://automationexercise.com/login');
        cy.login(test.email, test.password);
      })
  })

  it('UI-003 - Header Navigation', () => {
    homePage.headerNavigation();
  })

})

