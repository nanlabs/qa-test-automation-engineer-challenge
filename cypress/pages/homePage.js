class homePage{

    menuItems = [
        { text: 'Home', url: '/' },
        { text: 'Products', url: '/products' },
        { text: 'Cart', url: '/view_cart' },
        { text: 'Signup / Login', url: '/login' },
        { text: 'Test Cases', url: '/test_cases' },
        { text: 'API Testing', url: '/api_list' },
        //{ text: 'Video Tutorials', url: '/video_tutorials' },
        { text: 'Contact us', url: '/contact_us' }
      ];

    elements = {
        navBar: () => cy.get('ul.nav.navbar-nav li')
    }

    clickNavBarItem(option){
        cy.get('ul.nav.navbar-nav li').contains(option).click()
    }

    headerNavigation(){
        this.menuItems.forEach((item) => {
            cy.get('header').contains(item.text).should('be.visible');
    
            // Click y verificar navegación
            cy.get('header').contains(item.text).click();
    
            // Esperar que la URL contenga el path esperado
            cy.url().should('include', item.url);
        })
    }

}

module.exports = new homePage();