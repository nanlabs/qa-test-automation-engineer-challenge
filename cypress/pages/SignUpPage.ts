import { User } from '../data/user';
import BasePage from './BasePage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

/**
 * Page object for the Signup/Account Creation page
 */
class SignupPage extends BasePage {
    protected path = '/signup';

    // Account Information selectors
    private readonly accountInfoSection = '.login-form';
    private readonly titleMr = '#id_gender1';
    private readonly titleMrs = '#id_gender2';
    private readonly name = 'input[data-qa="name"]';
    private readonly email = 'input[data-qa="email"]';
    private readonly password = 'input[data-qa="password"]';
    private readonly dayOfBirth = 'select[data-qa="days"]';
    private readonly monthOfBirth = 'select[data-qa="months"]';
    private readonly yearOfBirth = 'select[data-qa="years"]';
    private readonly newsletter = '#newsletter';
    private readonly specialOffers = '#optin';

    // Address Information selectors
    private readonly firstName = 'input[data-qa="first_name"]';
    private readonly lastName = 'input[data-qa="last_name"]';
    private readonly company = 'input[data-qa="company"]';
    private readonly address1 = 'input[data-qa="address"]';
    private readonly address2 = 'input[data-qa="address2"]';
    private readonly country = 'select[data-qa="country"]';
    private readonly state = 'input[data-qa="state"]';
    private readonly city = 'input[data-qa="city"]';
    private readonly zipcode = 'input[data-qa="zipcode"]';
    private readonly mobileNumber = 'input[data-qa="mobile_number"]';
    private readonly createAccountButton = 'button[data-qa="create-account"]';
    private readonly accountCreatedElement = '[data-qa="account-created"]';
    private readonly continueButton = 'a[data-qa="continue-button"]';

    
    verifySignupPageIsVisible(): void {
        // Log the current URL for debugging
        cy.url().then(url => {
            cy.log(`Current URL: ${url}`);
        });

        // Log the page title for debugging
        cy.title().then(title => {
            cy.log(`Page title: ${title}`);
        });

        // Check for the presence of the form section
        cy.get(this.accountInfoSection).should('exist');

        // Verify we're on a page with account creation form
        // Use a more flexible approach by checking for any of these elements
        cy.get('body').then($body => {
            // Log the body HTML for debugging
            cy.log('Page body HTML:');
            cy.log($body.html().substring(0, 500) + '...'); // Log first 500 chars to avoid too much output

            const hasPasswordField = $body.find(this.password).length > 0;
            const hasDayOfBirth = $body.find(this.dayOfBirth).length > 0;
            const hasCreateAccountButton = $body.find(this.createAccountButton).length > 0;

            // Log what elements we found
            cy.log(`Has password field: ${hasPasswordField}`);
            cy.log(`Has day of birth field: ${hasDayOfBirth}`);
            cy.log(`Has create account button: ${hasCreateAccountButton}`);

            // Assert that at least one of these elements exists
            expect(hasPasswordField || hasDayOfBirth || hasCreateAccountButton).to.be.true;
        });
    }

    // Fill account section of the signup form
    fillAccountInfo(userInfo: User): void {
        // Select title
        if (userInfo.title === 'Mr') {
            cy.get(this.titleMr).check();
        } else {
            cy.get(this.titleMrs).check();
        }

        // Fill password
        cy.get(this.password).type(userInfo.password);

        // Select date of birth
        cy.get(this.dayOfBirth).select(userInfo.dateOfBirth.day);
        cy.get(this.monthOfBirth).select(userInfo.dateOfBirth.month);
        cy.get(this.yearOfBirth).select(userInfo.dateOfBirth.year);

        // Check newsletter and special offers if required
        if (userInfo.newsletter) {
            cy.get(this.newsletter).check();
        }
        if (userInfo.specialOffers) {
            cy.get(this.specialOffers).check();
        }
    }

    // Fill address section of the signup form
    fillAddressInfo(addressInfo: User): void {
        cy.get(this.firstName).type(addressInfo.firstName);
        cy.get(this.lastName).type(addressInfo.lastName);

        if (addressInfo.company) {
            cy.get(this.company).type(addressInfo.company);
        }

        cy.get(this.address1).type(addressInfo.address1);

        if (addressInfo.address2) {
            cy.get(this.address2).type(addressInfo.address2);
        }

        cy.get(this.country).select(addressInfo.country);
        cy.get(this.state).type(addressInfo.state);
        cy.get(this.city).type(addressInfo.city);
        cy.get(this.zipcode).type(addressInfo.zipcode);
        cy.get(this.mobileNumber).type(addressInfo.mobileNumber);
    }

    
    // Create account by clicking the create account button
    
    clickCreateAccountButton(): void {
        cy.get(this.createAccountButton).click();
    }

    
    // Verify account created message is displayed
    
    verifyAccountCreated(): void {
        cy.get(this.accountCreatedElement)
            .contains(/ACCOUNT CREATED!/i)
            .should('be.visible');
    }

  
    clickContinueButton(): void {
        cy.get(this.continueButton).click();
    }

    //Complete user signup process
    completeUserSignup(userData: User): User {
        
        
        LoginPage.visit();
        // Enter name and email to signup
        LoginPage.signup(userData.name, userData.email);
        // Fill account information
        this.fillAccountInfo(userData);

        // Fill address information
        this.fillAddressInfo(userData);

        // Create account
        this.clickCreateAccountButton();
        this.verifyAccountCreated();
        return userData;
    }
} export default new SignupPage();