import ProductsPage from "./ProductsPage";
import CartPage from "./CartPage"

export default class NavBar {
    private readonly header = '#header';
    private readonly homeLink = '#header a[href="/"]';
    private readonly productsLink = '#header a[href="/products"]';
    private readonly cartLink = '#header a[href="/view_cart"]';
    private readonly loginLink = '#header a[href="/login"]';
    private readonly logoutLink = '#header a[href="/logout"]';
    private readonly testCasesLink = '#header a[href="/test_cases"]';
    private readonly deleteAccountLink = '#header a[href="/delete_account"]';
    private readonly apiTestingLink = '#header a[href="/api_list"]';
    private readonly contactUsLink = '#header a[href="/contact_us"]';

    verifyLoggedInAs(username: string) {
        cy.get(this.header).should('contain', `Logged in as ${username}`);
    }
    clickSignupLoginButton(): void {
        cy.get(this.loginLink).click();
    }
    clickDeleteAccountButton(): void {
        cy.get(this.deleteAccountLink).click();
    }
    clickLogoutButton(): void {
        cy.get(this.logoutLink).click();
    }
    
    navigateToProductsPage() {
        cy.get(this.productsLink).click();
        
    }

    navigateToCartPage() {
        cy.get(this.cartLink).click();
    }


}

