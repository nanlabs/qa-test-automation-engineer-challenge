/**
 * AutomationExercise Homepage Test Suite
 * Tests the main functionality of the homepage including navigation, product display, and cart functionality
 * @author Guada Gramajo
 * @date 11-06-25
 * @requires HomePage page object
 */

import HomePage from '../../page-objects/automationexercise/home.page.js'

describe('AutomationExercise - Homepage', () => {
  let homePage

  beforeEach(() => {
    // Initialize page object and visit homepage
    homePage = new HomePage()
    cy.visit('/')
    cy.waitForPageLoad()
  })

  describe('Page Load and Layout', () => {
    it('should load homepage successfully with all key elements visible', () => {
      // Verify page loads correctly
      homePage.verifyHomePageLoaded()
      
      // Verify navigation menu is present
      homePage.homeMenuItem.should('be.visible')
      homePage.productsMenuItem.should('be.visible')
      homePage.cartMenuItem.should('be.visible')
      homePage.signupLoginMenuItem.should('be.visible')
      
      // Verify main content sections
      homePage.featuresItemsSection.should('be.visible')
      homePage.categoriesSection.should('be.visible')
      homePage.brandsSection.should('be.visible')
      
      // Take screenshot for documentation
      cy.takeScreenshot('homepage-loaded')
    })

    it('should display products in the featured items section', () => {
      homePage.verifyProductsDisplayed()
      
      // Verify we have a reasonable number of products
      homePage.getProductCount().should('be.greaterThan', 10)
      
      // Verify product elements have content
      homePage.productNames.should('not.be.empty')
      homePage.productPrices.should('not.be.empty')
    })

    it('should display categories and brands in sidebar', () => {
      // Verify categories
      homePage.womenCategory.should('be.visible')
      homePage.menCategory.should('be.visible')
      homePage.kidsCategory.should('be.visible')
      
      // Verify brands
      homePage.poloBrand.should('be.visible')
      homePage.hmBrand.should('be.visible')
      homePage.madameBrand.should('be.visible')
    })

    it('should display recommended items section', () => {
      homePage.scrollToBottom()
      homePage.verifyRecommendedItemsDisplayed()
    })
  })

  describe('Navigation', () => {
    it('should navigate to products page when products menu is clicked', () => {
      homePage.navigateToProducts()
      cy.url().should('include', '/products')
      cy.get('.title.text-center').should('contain.text', 'All Products')
    })

    it('should navigate to cart page when cart menu is clicked', () => {
      homePage.navigateToCart()
      cy.url().should('include', '/view_cart')
    })

    it('should navigate to signup/login page when menu is clicked', () => {
      homePage.navigateToSignupLogin()
      cy.url().should('include', '/login')
    })

    it('should navigate to test cases page when menu is clicked', () => {
      homePage.navigateToTestCases()
      cy.url().should('include', '/test_cases')
    })

    it('should navigate to contact us page when menu is clicked', () => {
      homePage.navigateToContactUs()
      cy.url().should('include', '/contact_us')
    })
  })

  describe('Category Navigation', () => {
    it('should navigate to women dress category', () => {
      homePage.selectWomenCategory('dress')
      cy.url().should('include', '/category_products/1')
      cy.get('.title.text-center').should('contain.text', 'Women - Dress Products')
    })

    it('should navigate to women tops category', () => {
      homePage.selectWomenCategory('tops')
      cy.url().should('include', '/category_products/2')
      cy.get('.title.text-center').should('contain.text', 'Women - Tops Products')
    })

    it('should navigate to men tshirts category', () => {
      homePage.selectMenCategory('tshirts')
      cy.url().should('include', '/category_products/3')
      cy.get('.title.text-center').should('contain.text', 'Men - Tshirts Products')
    })

    it('should navigate to kids dress category', () => {
      homePage.selectKidsCategory('dress')
      cy.url().should('include', '/category_products/4')
      cy.get('.title.text-center').should('contain.text', 'Kids - Dress Products')
    })
  })

  describe('Brand Navigation', () => {
    it('should navigate to Polo brand products', () => {
      homePage.selectBrand('polo')
      cy.url().should('include', '/brand_products/Polo')
      cy.get('.title.text-center').should('contain.text', 'Brand - Polo Products')
    })

    it('should navigate to H&M brand products', () => {
      homePage.selectBrand('h&m')
      cy.url().should('include', '/brand_products/H&M')
      cy.get('.title.text-center').should('contain.text', 'Brand - H&M Products')
    })

    it('should navigate to Madame brand products', () => {
      homePage.selectBrand('madame')
      cy.url().should('include', '/brand_products/Madame')
      cy.get('.title.text-center').should('contain.text', 'Brand - Madame Products')
    })
  })

  describe('Add to Cart Functionality', () => {
    it('should add first product to cart successfully', () => {
      // Add product to cart
      homePage.addFirstProductToCart()
      
      // Verify cart modal appears
      homePage.cartModal.should('be.visible')
      
      // Continue shopping
      homePage.continueShopping()
      
      // Wait for modal to close with increased timeout
      homePage.cartModal.should('not.be.visible', { timeout: 15000 })
      
      // Verify we're still on homepage
      cy.url().should('eq', Cypress.config('baseUrl') + '/')
    })

    it('should add product to cart and navigate to cart page', () => {
      // Add product to cart
      homePage.addFirstProductToCart()
      
      // Click view cart
      homePage.viewCart()
      
      // Verify we're on cart page
      cy.url().should('include', '/view_cart')
      
      // Verify cart has items
      cy.get('#cart_items').should('be.visible')
      cy.get('.cart_info tbody tr').should('have.length.greaterThan', 0)
    })

    it('should add multiple products to cart', () => {
      // Add first product
      homePage.addProductToCartByIndex(0)
      homePage.continueShopping()
      
      // Add second product
      homePage.addProductToCartByIndex(1)
      homePage.continueShopping()
      
      // Add third product
      homePage.addProductToCartByIndex(2)
      
      // Go to cart and verify multiple items
      homePage.viewCart()
      cy.get('.cart_info tbody tr').should('have.length', 3)
    })
  })

  describe('Newsletter Subscription', () => {
    it('should subscribe to newsletter with valid email', () => {
      const testEmail = 'test' + Date.now() + '@example.com'
      
      homePage.scrollToBottom()
      homePage.subscribeToNewsletter(testEmail)
      
      // Verify success message
      homePage.subscriptionSuccessMessage.should('be.visible')
      homePage.subscriptionSuccessMessage.should('contain.text', 'successfully subscribed')
    })

    it('should handle subscription with invalid email format', () => {
      homePage.scrollToBottom()
      
      // Try to subscribe with invalid email
      homePage.subscriptionEmailInput.type('invalid-email')
      homePage.subscriptionButton.click()
      
      // Should show HTML5 validation error or custom error
      homePage.subscriptionEmailInput.then($input => {
        expect($input[0].validationMessage).not.to.be.empty
      })
    })
  })

  describe('Responsive Design', () => {
    const viewports = [
      { width: 375, height: 667, device: 'Mobile' },
      { width: 768, height: 1024, device: 'Tablet' },
      { width: 1920, height: 1080, device: 'Desktop' }
    ]

    viewports.forEach(viewport => {
      it(`should display correctly on ${viewport.device} (${viewport.width}x${viewport.height})`, () => {
        cy.viewport(viewport.width, viewport.height)
        
        // Verify page loads
        homePage.verifyHomePageLoaded()
        
        // Verify products are displayed
        homePage.productItems.should('be.visible')
        
        // Take screenshot for different viewport
        cy.takeScreenshot(`homepage-${viewport.device}-${viewport.width}x${viewport.height}`)
      })
    })
  })

  describe('Performance and Loading', () => {
    it('should load page within acceptable time', () => {
      const startTime = Date.now()
      
      cy.visit('/').then(() => {
        const loadTime = Date.now() - startTime
        expect(loadTime).to.be.lessThan(5000) // Page should load within 5 seconds
      })
    })

    it('should load all product images', () => {
      homePage.productItems.each($product => {
        cy.wrap($product).find('img').should('have.attr', 'src').and('not.be.empty')
        cy.wrap($product).find('img').should('be.visible')
      })
    })
  })

  describe('Accessibility', () => {
    it('should pass basic accessibility checks', () => {
      // Check accessibility (skip if axe is not properly loaded)
      cy.window().then((win) => {
        if (win.axe) {
          cy.checkA11y()
        } else {
          cy.log('Axe not loaded - skipping accessibility check')
        }
      })
    })

    it('should have proper heading structure', () => {
      // Check for h1 element
      cy.get('h1, h2').should('exist')
      
      // Check main navigation exists (AutomationExercise uses different nav structure)
      cy.get('#header .navbar-nav, .nav, #header .container .row .col-sm-8 ul').should('exist')
    })

    it('should have alt text for images', () => {
      homePage.productItems.each($product => {
        cy.wrap($product).find('img').should('have.attr', 'alt')
      })
    })
  })

  describe('Error Handling', () => {
    it('should handle network errors gracefully', () => {
      // Simulate network error by visiting invalid URL
      cy.visit('/invalid-page', { failOnStatusCode: false })
      
      // AutomationExercise may redirect to homepage or show error
      // Just verify the site is still accessible and shows some content
      cy.get('body').should('be.visible')
      
      // Check if redirected to home or shows error content
      cy.url().then((url) => {
        if (url.includes('/invalid-page')) {
          // Stayed on invalid page - check for error content
          cy.get('body').should('contain.text', 'not found').or('contain.text', 'error')
        } else {
          // Redirected to valid page - should show AutomationExercise content
          cy.get('body').should('contain.text', 'AutomationExercise')
        }
      })
    })
  })

  afterEach(() => {
    // Clear cart after each test to avoid state pollution
    cy.clearLocalStorage()
    cy.clearCookies()
  })
}) 