class CartPage {
  verifyProductInCart(productName) {
    cy.url().should('include', '/view_cart')
    cy.get('.cart_info').should('contain.text', productName)
  }

  verifyProductQuantity(productName, expectedQuantity) {
    cy.get('.cart_info tbody tr').contains('td.cart_description', productName)
      .parent('tr')
      .within(() => {
        cy.get('td.cart_quantity button.disabled')
          .should('have.text', expectedQuantity.toString())
      })
  }
  

  clearCart() {
    cy.visit('/view_cart')
    cy.get('body').then(($body) => {
      if ($body.find('.cart_delete a').length) {
        cy.get('.cart_delete a').each(($btn) => {
          cy.wrap($btn).click({ force: true })
          cy.wait(500)
        })
      } else {
        cy.log('No items to delete from cart')
      }
    })

    
    cy.get('.cart_info tbody tr').should('not.exist')
  }
}

export const cartPage = new CartPage()
