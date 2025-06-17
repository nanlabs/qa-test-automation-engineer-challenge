/**
 * @author: drodriguez
 * @date: 06-16-2025
 */

const LoginPage = require("../login_page")

module.exports = {

    get headerLinks() { return cy.get('.navbar-nav > li') },
    getHeaderContentBeforeAuth() {
        return [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Products',
                link: '/products'
            },
            {
                text: 'Cart',
                link: '/view_cart'
            },
            {
                text: 'Signup / Login',
                link: '/login'
            }
        ]
    },
    getNonAuthenticatedContent() {
        return [
            {
                text: 'Signup / Login',
                link: '/login'
            }
        ]
    },
    getLoggedInContent() {
        return [
            {
                text: 'Logout',
                link: '/logout'
            },
            {
                text: 'Delete Account',
                link: '/delete_account'
            },
        ]
    },
    getHeaderContentAfterAuth() {
        return [
            {
                text: 'Test Cases',
                link: '/test_cases'
            },
            {
                text: 'API Testing',
                link: '/api_list'
            },
            {
                text: 'Video Tutorials',
                link: 'https://www.youtube.com/c/AutomationExercise'
            },
            {
                text: 'Contact us',
                link: '/contact_us'
            }
        ]
    },

    getFullAuthenticatedHeaderContent() {
        this.getHeaderContentBeforeAuth().concat(this.getLoggedInContent()).concat(this.getHeaderContentAfterAuth())
    },

    getFullNonAuthenticatedHeaderContent() {
        this.getHeaderContentBeforeAuth().concat(this.getNonAuthenticatedContent()).concat(this.getHeaderContentAfterAuth())
    },

    getLogo() { cy.get('.logo > a') },

    // Methods
    isUserLoggedIn() {
        return this.headerLinks.contains(this.getLoggedInContent()[0].text).should('exist')
    },

    verifyUserIsLoggedIn() {
        this.headerLinks.contains(this.getLoggedInContent()[0].text).should('exist')
        this.headerLinks.contains(this.getLoggedInContent()[1].text).should('exist')
        this.headerLinks.contains(this.getNonAuthenticatedContent()[0].text).should('not.exist')
    },

    verifyUserIsNotLoggedIn() {
        this.headerLinks.contains(this.getLoggedInContent()[0].text).should('not.exist')
        this.headerLinks.contains(this.getLoggedInContent()[1].text).should('not.exist')
        this.headerLinks.contains(this.getNonAuthenticatedContent()[0].text).should('exist')
    },

    doLogout(needInstance = false) {
        if (this.isUserLoggedIn()) {
            this.headerLinks.contains(this.getLoggedInContent()[0].text).click()
        }
        else {
            throw new Error(`doLogout | User is not logged in`)
        }

        if (needInstance) return new LoginPage
    }

}
