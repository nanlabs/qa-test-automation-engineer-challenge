
import TestDataGenerator from '../data/TestDataGenerator';
import { User } from '../data/user';
import homePage from '../pages/HomePage';
import loginPage from '../pages/LoginPage';
import { createUser } from '../utils/Helper';

describe('Test Case 3: Login User with incorrect email and password', () => {

  // Define test data inline
  const invalidUser = {
    email: "invalid@example.com",
    password: "wrongpassword"
  };

  beforeEach(() => {
    // Clear cookies and local storage to ensure a clean state
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should show error message with incorrect credentials', () => {
   
    homePage.visit();
    homePage.verifyHomePageIsVisible();

    homePage.navbar.clickSignupLoginButton();

    loginPage.verifyLoginToYourAccountIsVisible();

    // Enter incorrect email address and password
    loginPage.login(invalidUser.email, invalidUser.password);

    // erify error 'Your email or password is incorrect!' is visible
    loginPage.verifyLoginErrorMessage();

  });
});

describe('Login User wrong password', () => {

    let userData: User;
    
      before(() => {
        // Generate random user data for signup
        userData = TestDataGenerator.generateUserData();
    
        // Create the user through API
        createUser(userData);
    
        cy.clearCookies();
        cy.clearLocalStorage();
      });
    
    it('should show error message with incorrect password', () => {


    cy.clearCookies();
    cy.clearLocalStorage();
    homePage.visit();
    homePage.verifyHomePageIsVisible();

    
    homePage.navbar.clickSignupLoginButton();

    loginPage.verifyLoginToYourAccountIsVisible();

    // Enter incorrect email address and password
    loginPage.login(userData.email, 'Invalid Password');

    // erify error 'Your email or password is incorrect!' is visible
    loginPage.verifyLoginErrorMessage();
    });
})
