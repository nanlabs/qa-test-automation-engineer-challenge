/**
 * Products Page Object for AutomationExercise
 * Contains all elements and methods for the products page
 * @author Guada Gramajo
 * @date 11-06-25
 */

class ProductsPage {
  // Page elements
  get pageTitle() { return cy.get('.title.text-center') }
  get allProductsContainer() { return cy.get('.features_items') }
  get productItems() { return cy.get('.features_items .product-image-wrapper') }
  
  // Search functionality
  get searchInput() { return cy.get('#search_product') }
  get searchButton() { return cy.get('#submit_search') }
  get searchResultsTitle() { return cy.get('.title.text-center') }
  
  // Product elements
  get productImages() { return cy.get('.productinfo img') }
  get productPrices() { return cy.get('.productinfo h2') }
  get productNames() { return cy.get('.productinfo p') }
  get addToCartButtons() { return cy.get('.add-to-cart') }
  get viewProductLinks() { return cy.get('a[href*="/product_details/"]') }
  
  // Categories sidebar
  get categorySidebar() { return cy.get('.category-products') }
  get categoryTitle() { return cy.get('.category-products h2') }
  
  // Women category
  get womenCategory() { return cy.get('a[href="#Women"]') }
  get womenDressLink() { return cy.get('a[href="/category_products/1"]') }
  get womenTopsLink() { return cy.get('a[href="/category_products/2"]') }
  get womenSareeLink() { return cy.get('a[href="/category_products/7"]') }
  
  // Men category
  get menCategory() { return cy.get('a[href="#Men"]') }
  get menTshirtsLink() { return cy.get('a[href="/category_products/3"]') }
  get menJeansLink() { return cy.get('a[href="/category_products/6"]') }
  
  // Kids category
  get kidsCategory() { return cy.get('a[href="#Kids"]') }
  get kidsDressLink() { return cy.get('a[href="/category_products/4"]') }
  get kidsTopsShirtsLink() { return cy.get('a[href="/category_products/5"]') }
  
  // Brands sidebar
  get brandsSidebar() { return cy.get('.brands_products') }
  get brandsTitle() { return cy.get('.brands_products h2') }
  get brandLinks() { return cy.get('.brands_products a') }
  
  // Individual brand links
  get poloBrand() { return cy.get('a[href="/brand_products/Polo"]') }
  get hmBrand() { return cy.get('a[href="/brand_products/H&M"]') }
  get madameBrand() { return cy.get('a[href="/brand_products/Madame"]') }
  get mastHarbourBrand() { return cy.get('a[href="/brand_products/Mast & Harbour"]') }
  get babyhugBrand() { return cy.get('a[href="/brand_products/Babyhug"]') }
  get allenSollyBrand() { return cy.get('a[href="/brand_products/Allen Solly Junior"]') }
  get kookieKidsBrand() { return cy.get('a[href="/brand_products/Kookie Kids"]') }
  get bibaBrand() { return cy.get('a[href="/brand_products/Biba"]') }
  
  // Cart modal elements
  get cartModal() { return cy.get('#cartModal') }
  get modalTitle() { return cy.get('#cartModal .modal-title') }
  get continueShoppingButton() { return cy.get('.btn-success').contains('Continue Shopping') }
  get viewCartButton() { return cy.get('a[href="/view_cart"]').contains('View Cart') }
  
  // Page methods
  visit() {
    cy.visit('/products')
    return this
  }
  
  verifyProductsPageLoaded() {
    this.pageTitle.should('contain.text', 'All Products')
    this.allProductsContainer.should('be.visible')
    return this
  }
  
  searchForProduct(searchTerm) {
    this.searchInput.clear().type(searchTerm)
    this.searchButton.click()
    return this
  }
  
  verifySearchResults(expectedTerm) {
    this.searchResultsTitle.should('contain.text', 'Searched Products')
    this.productNames.should('contain.text', expectedTerm)
    return this
  }
  
  addProductToCartByIndex(index) {
    this.productItems.eq(index).within(() => {
      cy.get('.add-to-cart').click()
    })
    this.cartModal.should('be.visible')
    return this
  }
  
  addFirstProductToCart() {
    return this.addProductToCartByIndex(0)
  }
  
  viewProductDetailsByIndex(index) {
    this.productItems.eq(index).within(() => {
      cy.get('a[href*="/product_details/"]').click()
    })
    return this
  }
  
  viewFirstProductDetails() {
    return this.viewProductDetailsByIndex(0)
  }
  
  continueShopping() {
    this.continueShoppingButton.click()
    this.cartModal.should('not.exist')
    return this
  }
  
  viewCart() {
    this.viewCartButton.click()
    return this
  }
  
  // Category navigation methods
  navigateToWomenCategory(subcategory) {
    this.womenCategory.click()
    
    switch(subcategory.toLowerCase()) {
      case 'dress':
        this.womenDressLink.click()
        break
      case 'tops':
        this.womenTopsLink.click()
        break
      case 'saree':
        this.womenSareeLink.click()
        break
      default:
        throw new Error(`Unknown women subcategory: ${subcategory}`)
    }
    return this
  }
  
  navigateToMenCategory(subcategory) {
    this.menCategory.click()
    
    switch(subcategory.toLowerCase()) {
      case 'tshirts':
        this.menTshirtsLink.click()
        break
      case 'jeans':
        this.menJeansLink.click()
        break
      default:
        throw new Error(`Unknown men subcategory: ${subcategory}`)
    }
    return this
  }
  
  navigateToKidsCategory(subcategory) {
    this.kidsCategory.click()
    
    switch(subcategory.toLowerCase()) {
      case 'dress':
        this.kidsDressLink.click()
        break
      case 'tops':
        this.kidsTopsShirtsLink.click()
        break
      default:
        throw new Error(`Unknown kids subcategory: ${subcategory}`)
    }
    return this
  }
  
  // Brand navigation methods
  navigateToBrand(brandName) {
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
  
  // Verification methods
  verifyProductsDisplayed() {
    this.productItems.should('have.length.greaterThan', 0)
    this.productNames.should('be.visible')
    this.productPrices.should('be.visible')
    this.productImages.should('be.visible')
    return this
  }
  
  verifyProductCount(expectedCount) {
    this.productItems.should('have.length', expectedCount)
    return this
  }
  
  verifyProductContainsText(text) {
    this.productNames.should('contain.text', text)
    return this
  }
  
  verifyCategorySidebarVisible() {
    this.categorySidebar.should('be.visible')
    this.categoryTitle.should('contain.text', 'Category')
    return this
  }
  
  verifyBrandsSidebarVisible() {
    this.brandsSidebar.should('be.visible')
    this.brandsTitle.should('contain.text', 'Brands')
    return this
  }
  
  // Utility methods
  getProductCount() {
    return this.productItems.its('length')
  }
  
  getProductNameByIndex(index) {
    return this.productItems.eq(index).find('.productinfo p').invoke('text')
  }
  
  getProductPriceByIndex(index) {
    return this.productItems.eq(index).find('.productinfo h2').invoke('text')
  }
  
  getAllProductNames() {
    return this.productNames.then($elements => {
      return Array.from($elements, element => element.innerText)
    })
  }
  
  getAllProductPrices() {
    return this.productPrices.then($elements => {
      return Array.from($elements, element => element.innerText)
    })
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

export default ProductsPage 