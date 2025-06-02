const tests = require('../../fixtures/products')

describe('API products tests', () => {

    it('APIPROD001 - Validate Products List', () => {
        cy.request('https://automationexercise.com/api/productsList')
            .then((response) => {
                //status 200
                expect(response.status).to.eq(200);
                // Validate body is not empty
                const data = JSON.parse(response.body);
                expect(data).to.have.property('products');
                expect(data.products).to.be.an('array').that.is.not.empty;
                // Validate JSON structure (id, name, price, etc.)
                const firstProduct = data.products[0];
                expect(firstProduct).to.have.property('id');
                expect(firstProduct).to.have.property('name');
                expect(firstProduct).to.have.property('category');
            });
    });

    tests.forEach(test => {
        it(test.name, () => {
            cy.searchValidation(test.product, test.count)
        });
    })
})