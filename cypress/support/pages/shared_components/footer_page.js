/**
 * @author: drodriguez
 * @date: 06-16-2025
 */

module.exports = {

    getSubscribeInput() { return cy.get('#susbscribe_email') },
    getSubscribeBtn() { return cy.get('#subscribe') },
    copyText() { return cy.get('.footer-bottom p') }

}
