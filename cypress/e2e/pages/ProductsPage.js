class ProductsPage {
  goToProducts() {
    cy.get('a[href="/products"]').click()
    cy.url().should('include', '/products')
  }

  addProductToCartByName(productName) {
    cy.contains(productName).should('be.visible').parent().within(() => {
      cy.contains('Add to cart').click({ force: true })
    })
  }

  clickViewCartFromModal() {
    cy.get('#cartModal')
      .should('be.visible')
      .within(() => {
        cy.contains('View Cart').click({ force: true })
      })
  }

  clickContinueShoppingFromModal() {
    cy.get('#cartModal')
      .should('be.visible')
      .within(() => {
        cy.contains('Continue Shopping').click({ force: true })
      })
  }

  tryAddNonExistentProduct(productName) {
    cy.contains(productName).should('not.exist')
  }
}

export const productsPage = new ProductsPage()
