describe('GET /api/productsList', () => {
    it('should return products array', () => {
      cy.request('https://automationexercise.com/api/productsList').then((response) => {
        expect(response.status).to.eq(200);
  
        const body = JSON.parse(response.body); // i found i need to manually parse it to check a correct view on cypress UI but without parsing the info
                                                // the response will work properly to the request and will provide the complete body list
  
        expect(body).to.have.property('products');
        expect(body.products).to.be.an('array');
      });
    });
  });