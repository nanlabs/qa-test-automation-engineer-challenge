/**
 * Home Page Object for AutomationExercise
 * Contains all elements and methods for the home page
 * @author Guada Gramajo
 * @date 11-06-25
 */

class HomePage {
  // Page elements
  get logo() { return cy.get('img[src*="logo"]') }
  get homeMenuItem() { return cy.get('a[href="/"]').contains('Home') }
  get productsMenuItem() { return cy.get('a[href="/products"]') }
  get cartMenuItem() { return cy.get('a[href="/view_cart"]').first() }
  get signupLoginMenuItem() { return cy.get('a[href="/login"]') }
  get testCasesMenuItem() { return cy.get('a[href="/test_cases"]').first() }
  get apiTestingMenuItem() { return cy.get('a[href="/api_list"]') }
  get contactUsMenuItem() { return cy.get('a[href="/contact_us"]') }
  
  // Feature items section
  get featuresItemsSection() { return cy.get('.features_items') }
  get featuresItemsTitle() { return cy.get('.features_items h2.title') }
  get productItems() { return cy.get('.features_items .product-image-wrapper') }
  get firstProduct() { return this.productItems.first() }
  
  // Product elements
  get productPrices() { return cy.get('.productinfo h2') }
  get productNames() { return cy.get('.productinfo p') }
  get addToCartButtons() { return cy.get('.add-to-cart') }
  get viewProductLinks() { return cy.get('a[href*="/product_details/"]') }
  
  // Categories section
  get categoriesSection() { return cy.get('.category-products') }
  get womenCategory() { return cy.get('a[href="#Women"]') }
  get menCategory() { return cy.get('a[href="#Men"]') }
  get kidsCategory() { return cy.get('a[href="#Kids"]') }
  
  // Women subcategories
  get womenDress() { return cy.get('a[href="/category_products/1"]') }
  get womenTops() { return cy.get('a[href="/category_products/2"]') }
  get womenSaree() { return cy.get('a[href="/category_products/7"]') }
  
  // Men subcategories
  get menTshirts() { return cy.get('a[href="/category_products/3"]') }
  get menJeans() { return cy.get('a[href="/category_products/6"]') }
  
  // Kids subcategories
  get kidsDress() { return cy.get('a[href="/category_products/4"]') }
  get kidsTopsShirts() { return cy.get('a[href="/category_products/5"]') }
  
  // Brands section
  get brandsSection() { return cy.get('.brands_products') }
  get poloBrand() { return cy.get('a[href="/brand_products/Polo"]') }
  get hmBrand() { return cy.get('a[href="/brand_products/H&M"]') }
  get madameBrand() { return cy.get('a[href="/brand_products/Madame"]') }
  get mastHarbourBrand() { return cy.get('a[href="/brand_products/Mast & Harbour"]') }
  get babyhugBrand() { return cy.get('a[href="/brand_products/Babyhug"]') }
  get allenSollyBrand() { return cy.get('a[href="/brand_products/Allen Solly Junior"]') }
  get kookieKidsBrand() { return cy.get('a[href="/brand_products/Kookie Kids"]') }
  get bibaBrand() { return cy.get('a[href="/brand_products/Biba"]') }
  
  // Recommended items section
  get recommendedItemsSection() { return cy.get('.recommended_items') }
  get recommendedItemsTitle() { return cy.get('.recommended_items h2.title') }
  get recommendedProducts() { return cy.get('.recommended_items .product-image-wrapper') }
  
  // Footer elements
  get subscriptionSection() { return cy.get('.footer-widget') }
  get subscriptionTitle() { return cy.get('.footer-widget h2') }
  get subscriptionEmailInput() { return cy.get('#susbscribe_email') }
  get subscriptionButton() { return cy.get('#subscribe') }
  get subscriptionSuccessMessage() { return cy.get('.alert-success') }
  
  // Cart modal
  get cartModal() { return cy.get('#cartModal') }
  get continueShoppingButton() { return cy.get('.btn-success').contains('Continue Shopping') }
  get viewCartButton() { return cy.get('a[href="/view_cart"]').contains('View Cart') }
  
  // Page methods
  visit() {
    cy.visit('/')
    return this
  }
  
  verifyHomePageLoaded() {
    this.logo.should('be.visible')
    this.featuresItemsTitle.should('contain.text', 'Features Items')
    return this
  }
  
  navigateToProducts() {
    this.productsMenuItem.click()
    return this
  }
  
  navigateToCart() {
    this.cartMenuItem.click()
    return this
  }
  
  navigateToSignupLogin() {
    this.signupLoginMenuItem.click()
    return this
  }
  
  navigateToTestCases() {
    this.testCasesMenuItem.click()
    return this
  }
  
  navigateToContactUs() {
    this.contactUsMenuItem.click()
    return this
  }
  
  addFirstProductToCart() {
    this.firstProduct.within(() => {
      cy.get('.add-to-cart').first().click()
    })
    this.cartModal.should('be.visible')
    return this
  }
  
  addProductToCartByIndex(index) {
    this.productItems.eq(index).within(() => {
      cy.get('.add-to-cart').first().click()
    })
    this.cartModal.should('be.visible')
    return this
  }
  
  continueShopping() {
    this.continueShoppingButton.click()
    return this
  }
  
  viewCart() {
    this.viewCartButton.click()
    return this
  }
  
  selectWomenCategory(subcategory) {
    this.womenCategory.click()
    
    switch(subcategory.toLowerCase()) {
      case 'dress':
        this.womenDress.click()
        break
      case 'tops':
        this.womenTops.click()
        break
      case 'saree':
        this.womenSaree.click()
        break
      default:
        throw new Error(`Unknown women subcategory: ${subcategory}`)
    }
    return this
  }
  
  selectMenCategory(subcategory) {
    this.menCategory.click()
    
    switch(subcategory.toLowerCase()) {
      case 'tshirts':
        this.menTshirts.click()
        break
      case 'jeans':
        this.menJeans.click()
        break
      default:
        throw new Error(`Unknown men subcategory: ${subcategory}`)
    }
    return this
  }
  
  selectKidsCategory(subcategory) {
    this.kidsCategory.click()
    
    switch(subcategory.toLowerCase()) {
      case 'dress':
        this.kidsDress.click()
        break
      case 'tops':
        this.kidsTopsShirts.click()
        break
      default:
        throw new Error(`Unknown kids subcategory: ${subcategory}`)
    }
    return this
  }
  
  selectBrand(brandName) {
    const brandMap = {
      'polo': this.poloBrand,
      'h&m': this.hmBrand,
      'madame': this.madameBrand,
      'mast & harbour': this.mastHarbourBrand,
      'babyhug': this.babyhugBrand,
      'allen solly junior': this.allenSollyBrand,
      'kookie kids': this.kookieKidsBrand,
      'biba': this.bibaBrand
    }
    
    const brand = brandMap[brandName.toLowerCase()]
    if (brand) {
      brand.click()
    } else {
      throw new Error(`Unknown brand: ${brandName}`)
    }
    return this
  }
  
  subscribeToNewsletter(email) {
    this.subscriptionEmailInput.type(email)
    this.subscriptionButton.click()
    this.subscriptionSuccessMessage.should('contain.text', 'successfully subscribed')
    return this
  }
  
  verifyProductsDisplayed() {
    this.productItems.should('have.length.greaterThan', 0)
    this.productNames.should('be.visible')
    this.productPrices.should('be.visible')
    return this
  }
  
  verifyRecommendedItemsDisplayed() {
    this.recommendedItemsTitle.should('contain.text', 'recommended items')
    this.recommendedProducts.should('have.length.greaterThan', 0)
    return this
  }
  
  getProductCount() {
    return this.productItems.its('length')
  }
  
  scrollToTop() {
    cy.scrollTo('top')
    return this
  }
  
  scrollToBottom() {
    cy.scrollTo('bottom')
    return this
  }
}

export default HomePage 