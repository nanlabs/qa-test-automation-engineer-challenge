import { homePage } from '../pages/HomePage'
import { signupPage } from '../pages/SignupPage'
import { productsPage } from '../pages/ProductsPage'
import { cartPage } from '../pages/CartPage'

describe('Add to Cart Flow - Full Coverage', () => {
  let user
  const productName = 'Blue Top'
  const nonExistentProduct = 'NonExistentProduct123'

  before(() => {
    cy.fixture('userData').then((data) => {
      user = data.registeredUser
    })
  })

  // Desktop - Logged-in user (Happy Path)
  describe('TC01 - Add product as logged-in user [Desktop]', () => {
    beforeEach(() => {
      cy.viewport(1280, 800)
      cy.visit('/')
      homePage.clickSignupLogin()
      signupPage.login(user.email, user.password)
      signupPage.verifyLoggedInAs(user.name)
    })

    it('should add product to cart and verify it', () => {
      productsPage.goToProducts()
      productsPage.addProductToCartByName(productName)
      productsPage.clickViewCartFromModal()
      cartPage.verifyProductInCart(productName)
    })

    after(() => {
      cartPage.clearCart()
      homePage.logout()
    })
  })

  // Mobile - Guest user (session-based cart)
  describe('TC02 - Add product as guest user [Mobile]', () => {
    beforeEach(() => {
      cy.viewport('iphone-6')
      cy.visit('/')
    })

    it('should add product to cart without logging in and see it in cart', () => {
      productsPage.goToProducts()
      productsPage.addProductToCartByName(productName)
      productsPage.clickViewCartFromModal()
      cartPage.verifyProductInCart(productName)
    })

    after(() => {
      cartPage.clearCart()
    })
  })

  // Tablet - Edge case: product doesn't exist
  describe('TC03 - Add non-existent product [Tablet]', () => {
    beforeEach(() => {
      cy.viewport('ipad-2')
      cy.visit('/')
    })

    it('should fail to find and add a non-existent product', () => {
      productsPage.goToProducts()
      productsPage.tryAddNonExistentProduct(nonExistentProduct)
    })
  })

  // Edge case: Add same product twice
  describe('TC04 - Add same product twice (duplicates)', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit('/')
      homePage.clickSignupLogin()
      signupPage.login(user.email, user.password)
      signupPage.verifyLoggedInAs(user.name)
    })

    it('should add product twice and verify quantity is updated', () => {
      productsPage.goToProducts()
      productsPage.addProductToCartByName(productName)
      productsPage.clickContinueShoppingFromModal()
      productsPage.addProductToCartByName(productName)
      productsPage.clickViewCartFromModal()
      cartPage.verifyProductQuantity(productName, 2)
    })

    after(() => {
      cartPage.clearCart()
      homePage.logout()
    })
    
  })
})
