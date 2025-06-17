import homePage from '../pages/HomePage';
import loginPage from '../pages/LoginPage';
import signupPage from '../pages/SignUpPage';
import TestDataGenerator from '../data/TestDataGenerator';
import { User } from '../data/user';
import { createUser } from '../utils/Helper';

describe('Test Case 4: Logout User', () => {
 
  // Store user data for login test
  let userData: User;

  before(() => {
    // Generate random user data for signup
    userData = TestDataGenerator.generateUserData();

    // Create the user through API
    createUser(userData);

    cy.clearCookies();
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    // Clear cookies and local storage to ensure a clean state
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should logout successfully', () => {
    
    homePage.visit();
    homePage.verifyHomePageIsVisible();

    // Signup Process
    homePage.navbar.clickSignupLoginButton();
    loginPage.verifyLoginToYourAccountIsVisible();
    
    loginPage.login(userData.email, userData.password);
    homePage.navbar.verifyLoggedInAs(userData.name);
    // Intercept the logout request to verify it
    cy.intercept('GET', '/logout').as('logoutRequest');
    homePage.navbar.clickLogoutButton();
    // Verify the request
     cy.wait('@logoutRequest').then((interception) => {
    expect(interception.response?.statusCode).to.eq(302);
    });

    loginPage.verifyLoginPageIsCurrentPage();
    loginPage.verifyNewUserSignupIsVisible();
  });
});