/**
 * Custom Cypress Commands
 * These commands can be used across all test suites
 */

// ***********************************************
// Authentication Commands
// ***********************************************

/**
 * Login command for AutomationExercise
 * @param {string} email - User email
 * @param {string} password - User password
 */
Cypress.Commands.add('loginAE', (email, password) => {
  cy.visit('/login')
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(password)
  cy.get('[data-qa="login-button"]').click()
  cy.url().should('not.include', '/login')
})

/**
 * Register new user for AutomationExercise
 * @param {Object} userData - User registration data
 */
Cypress.Commands.add('registerAE', (userData) => {
  cy.visit('/signup')
  cy.get('[data-qa="signup-name"]').type(userData.name)
  cy.get('[data-qa="signup-email"]').type(userData.email)
  cy.get('[data-qa="signup-button"]').click()
  
  // Fill registration form
  cy.get('#id_gender1').check()
  cy.get('[data-qa="password"]').type(userData.password)
  cy.get('[data-qa="days"]').select(userData.day)
  cy.get('[data-qa="months"]').select(userData.month)
  cy.get('[data-qa="years"]').select(userData.year)
  
  cy.get('[data-qa="first_name"]').type(userData.firstName)
  cy.get('[data-qa="last_name"]').type(userData.lastName)
  cy.get('[data-qa="address"]').type(userData.address)
  cy.get('[data-qa="country"]').select(userData.country)
  cy.get('[data-qa="state"]').type(userData.state)
  cy.get('[data-qa="city"]').type(userData.city)
  cy.get('[data-qa="zipcode"]').type(userData.zipcode)
  cy.get('[data-qa="mobile_number"]').type(userData.mobile)
  
  cy.get('[data-qa="create-account"]').click()
  cy.get('[data-qa="account-created"]').should('be.visible')
})

// ***********************************************
// Navigation Commands
// ***********************************************

/**
 * Navigate to specific section in AutomationExercise
 * @param {string} section - Section name (products, cart, etc.)
 */
Cypress.Commands.add('navigateToAE', (section) => {
  const sectionMap = {
    'home': '/',
    'products': '/products',
    'cart': '/view_cart',
    'login': '/login',
    'signup': '/signup',
    'contact': '/contact_us',
    'test-cases': '/test_cases'
  }
  
  if (sectionMap[section]) {
    cy.visit(sectionMap[section])
  } else {
    throw new Error(`Unknown section: ${section}`)
  }
})

/**
 * Navigate to DemoQA specific pages
 * @param {string} page - DemoQA page name
 */
Cypress.Commands.add('navigateToDemoQA', (page) => {
  const pageMap = {
    'elements': '/elements',
    'forms': '/forms',
    'alerts': '/alertsWindows',
    'widgets': '/widgets',
    'interactions': '/interaction',
    'book-store': '/books'
  }
  
  cy.visit(`${Cypress.env('demoqa_base_url')}${pageMap[page] || '/'}`)
})

// ***********************************************
// E-commerce Commands
// ***********************************************

/**
 * Add product to cart in AutomationExercise
 * @param {number} productIndex - Index of product to add
 */
Cypress.Commands.add('addToCart', (productIndex = 0) => {
  cy.get('.features_items .product-image-wrapper').eq(productIndex).within(() => {
    cy.get('.add-to-cart').click()
  })
  cy.get('#cartModal').should('be.visible')
  cy.get('.modal-footer .btn-success').click()
})

/**
 * Search for products in AutomationExercise
 * @param {string} searchTerm - Product search term
 */
Cypress.Commands.add('searchProduct', (searchTerm) => {
  cy.get('#search_product').type(searchTerm)
  cy.get('#submit_search').click()
  cy.get('.features_items').should('contain', searchTerm)
})

/**
 * Filter products by category
 * @param {string} category - Category name (Women, Men, Kids)
 * @param {string} subcategory - Subcategory name
 */
Cypress.Commands.add('filterByCategory', (category, subcategory) => {
  cy.get('.panel-group').within(() => {
    cy.contains(category).click()
    cy.contains(subcategory).click()
  })
})

// ***********************************************
// Form Commands
// ***********************************************

/**
 * Fill contact form in AutomationExercise
 * @param {Object} contactData - Contact form data
 */
Cypress.Commands.add('fillContactForm', (contactData) => {
  cy.get('[data-qa="name"]').type(contactData.name)
  cy.get('[data-qa="email"]').type(contactData.email)
  cy.get('[data-qa="subject"]').type(contactData.subject)
  cy.get('[data-qa="message"]').type(contactData.message)
  
  if (contactData.file) {
    cy.get('input[name="upload_file"]').selectFile(contactData.file)
  }
  
  cy.get('[data-qa="submit-button"]').click()
})

// ***********************************************
// Assertion Commands
// ***********************************************

/**
 * Assert product details
 * @param {Object} expectedProduct - Expected product data
 */
Cypress.Commands.add('assertProductDetails', (expectedProduct) => {
  cy.get('.product-information').within(() => {
    cy.get('h2').should('contain', expectedProduct.name)
    cy.get('p').contains('Category:').should('contain', expectedProduct.category)
    cy.get('span span').should('contain', expectedProduct.price)
    cy.get('p').contains('Availability:').should('contain', expectedProduct.availability)
    cy.get('p').contains('Condition:').should('contain', expectedProduct.condition)
    cy.get('p').contains('Brand:').should('contain', expectedProduct.brand)
  })
})

/**
 * Assert cart contents
 * @param {Array} expectedItems - Array of expected cart items
 */
Cypress.Commands.add('assertCartContents', (expectedItems) => {
  cy.get('#cart_items .cart_info').within(() => {
    expectedItems.forEach((item, index) => {
      cy.get('tbody tr').eq(index).within(() => {
        cy.get('.cart_description h4 a').should('contain', item.name)
        cy.get('.cart_price p').should('contain', item.price)
        cy.get('.cart_quantity .disabled').should('contain', item.quantity)
      })
    })
  })
})

// ***********************************************
// Utility Commands
// ***********************************************

/**
 * Wait for page to load completely
 */
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible')
  cy.document().should('have.property', 'readyState', 'complete')
})

/**
 * Take screenshot with custom name
 * @param {string} name - Screenshot name
 */
Cypress.Commands.add('takeScreenshot', (name) => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  cy.screenshot(`${name}-${timestamp}`)
})

/**
 * Check accessibility with axe
 */
Cypress.Commands.add('checkA11y', () => {
  cy.injectAxe()
  cy.checkA11y()
})

/**
 * Generate test data using Faker
 */
Cypress.Commands.add('generateTestData', () => {
  return cy.task('generateTestData')
}) 