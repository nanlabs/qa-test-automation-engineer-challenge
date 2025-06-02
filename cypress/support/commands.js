
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import productsPage from "../pages/productsPage";
import productDetailsPage from "../pages/productDetailsPage";
import cartPage from "../pages/cartPage";
import checkoutPage from "../pages/checkoutPage";
import paymentPage from "../pages/paymentPage";

Cypress.Commands.add('login', (email, password) => { 
    loginPage.typeUsername(email)
    loginPage.typePassword(password)
    loginPage.clickLogin()
    const currentURL = cy.url();
    if(currentURL == "https://automationexercise.com/login"){
        loginPage.chechErrorMessage()
    }
})

Cypress.Commands.add('searchProduct', (product) => { 
    homePage.clickNavBarItem('Products')
    productsPage.typeSearchProduct(product)
    productsPage.clickSearch()
})

Cypress.Commands.add('addToCart', (product) => { 
    productsPage.clickOnViewProduct(product);
    productDetailsPage.checkProductName(product);
    productDetailsPage.clickAddToCart();
    productDetailsPage.goToCart();
})

Cypress.Commands.add('checkout', (product, name) => { 
    cartPage.checkProductName(product);
    cartPage.goToCheckout();
    checkoutPage.checkName(name);
    checkoutPage.checkProductName(product);
    checkoutPage.placeOrer();
})

Cypress.Commands.add('payment', () => { 
    paymentPage.fillPayment();
    paymentPage.checkOrderPlaced()
})

Cypress.Commands.add('createUser', (user) => {
    return cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/createAccount',
        form: true,
        body: user
    }).then((res) => {
        expect(res.status).to.eq(200);
        const data = JSON.parse(res.body);
        expect(data.message).to.include('User created!');
        return user;
    });
});

Cypress.Commands.add('deleteUser', (email, password) => {
    cy.request({
        method: 'DELETE',
        url: 'https://automationexercise.com/api/deleteAccount',
        form: true,
        body: {
            email: email,
            password: password
          }
    }).then((res) => {
        expect(res.status).to.eq(200);
        const data = JSON.parse(res.body);
        expect(data.message).to.include('Account deleted!');
        
    });
});

Cypress.Commands.add('searchValidation', (product, count) => {
    cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/searchProduct',
        form: true,
        body: { search_product: product }
    }).then((res) => {
        expect(res.status).to.eq(200);
        const data = JSON.parse(res.body);
        cy.log(data.products.length);
        expect(data.products.length).to.eq(count)
    });
});