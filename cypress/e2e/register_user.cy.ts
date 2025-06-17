import TestDataGenerator from '../data/TestDataGenerator';
import homePage from '../pages/HomePage';
import loginPage from '../pages/LoginPage';
import signupPage from '../pages/SignUpPage';
import deleteAccountPage from '../pages/DeleteAccountPage';
import { createUser, verifyUserDetailByEmail, verifyUserLoggedIn } from '../utils/Helper';
import { User } from '../data/user';

describe('Test Case 1: Register User', () => {


  // Generate random user data for registration
  
  beforeEach(() => {
    // Clear cookies and local storage to ensure a clean state
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should register a new user successfully', () => {
    const userData = TestDataGenerator.generateUserData();
    // Visit Home Page
    homePage.visit();
    homePage.verifyHomePageIsVisible();
    // Click on 'Signup / Login' button
    homePage.navbar.clickSignupLoginButton();
    loginPage.verifyLoginPageIsCurrentPage();
    loginPage.verifyNewUserSignupIsVisible();

    // Enter name, email address and click 'Signup' button
    loginPage.signup(userData.name, userData.email);
    loginPage.verifyEnterAccountMessageIsVisible();
    
    //Fill details: Title, Name, Email, Password, Date of birth and newsletter and special offers checkboxes
    signupPage.fillAccountInfo(userData);
    // Fill details of the account adrress section
    signupPage.fillAddressInfo(userData);
    signupPage.clickCreateAccountButton();
    // We can intercept the request to verify the contents
    // Verify that 'ACCOUNT CREATED!' is visible
    signupPage.verifyAccountCreated();
    signupPage.clickContinueButton();
    //Get the user object from the API and match it with the userData generated for the test
    verifyUserDetailByEmail(userData);
    // Verify that 'Logged in as username' is visible
    homePage.navbar.verifyLoggedInAs(userData.name);
    verifyUserLoggedIn(userData.email, userData.password);
    // Click 'Delete Account' button
    homePage.navbar.clickDeleteAccountButton();
    // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    deleteAccountPage.verifyAccountDeletedMessageIsVisible();
    deleteAccountPage.clickContinueButton();
  });
});

describe('Test Case 5: Register User with existing email', () => {
  

  beforeEach(() => {
    // Clear cookies and local storage to ensure a clean state
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/')
  });

  it('should show error when registering with existing email', () => {
    const userData : User = TestDataGenerator.generateUserData();
    // Create a random user with the API endpoint
    createUser(userData);
    
    homePage.visit();
    homePage.verifyHomePageIsVisible();

    // Start sign up process
    homePage.navbar.clickSignupLoginButton();
    loginPage.verifyLoginToYourAccountIsVisible();
    // Try to register with the generated and registered email
    loginPage.signup(userData.name, userData.email);
    
    // Verify error 'Email Address already exist!' is visible
    loginPage.verifySignupErrorMessage('Email Address already exist!');
  });
});