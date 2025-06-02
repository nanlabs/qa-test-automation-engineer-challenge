const userData = require('../../fixtures/user');

describe('E2E tests', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/login');
      })

    it('E2E-001 - Login with a new user and validate products', () => {
        //create user via API
        cy.createUser(userData.user).then((createdUuser) => {
            cy.log(`User created: ${createdUuser.email}`);
            //login with the new user
            cy.login(createdUuser.email, createdUuser.password);
            //validate products in the home page
            cy.request('https://automationexercise.com/api/productsList').then((response) => {
                expect(response.status).to.eq(200);
                const data = JSON.parse(response.body);
                for (let i = 0; i < data.products.length; i++) {
                    const productNameFromAPI = data.products[i].name;
                    cy.get('.features_items .productinfo p').contains(productNameFromAPI).should('be.visible');
                }
            });
        });
    });

    it('E2E-002 - Login with a new user and search a product', () => {
        //create user via API
        cy.createUser(userData.user).then((createdUuser) => {
            cy.log(`User created: ${createdUuser.email}`);
            //login with the new user
            cy.login(createdUuser.email, createdUuser.password);
            //search product
            cy.searchProduct("dress");
            cy.get('.features_items .productinfo p').then(($p) => {
                const total = $p.length;
                cy.searchValidation("dress", total)
            })
        });
    });

    it('E2E-003 - Login with a new user and buy a product', () => {
        //create user via API
        cy.createUser(userData.user).then((createdUuser) => {
            cy.log(`User created: ${createdUuser.email}`);
            //login with the new user
            cy.login(createdUuser.email, createdUuser.password);
            const addressName = createdUuser.title + ". " + createdUuser.firstname + " " + createdUuser.lastname;
            //buy a product
            cy.addToCart('Blue Top');
            cy.checkout('Blue Top', addressName);
            cy.payment();
        });
    });

    afterEach(() => {
        cy.deleteUser(userData.user.email, userData.user.password);
    });

})