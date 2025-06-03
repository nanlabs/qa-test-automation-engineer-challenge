describe('Petstore API Tests', () => {
    let pet;

    before(() => {
        cy.fixture('pets').then((data) => {
            pet = data;
        });
    });

    it('Should create a new pet', () => {
        cy.request('POST', 'https://petstore.swagger.io/v2/pet', pet.validPet)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.name).to.eq(pet.validPet.name);
            });
    });

    it('Should update an existing pet', () => {
        cy.request('PUT', 'https://petstore.swagger.io/v2/pet', pet.updatedPet)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.name).to.eq(pet.updatedPet.name);
                expect(response.body.status).to.eq(pet.updatedPet.status);
            });
    });

    it('Should get the modified pet', () => {
        cy.request(`https://petstore.swagger.io/v2/pet/${pet.validPet.id}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.id).to.eq(pet.validPet.id);
            });
    });

    it('Should delete the created pet', () => {
        cy.request('DELETE', `https://petstore.swagger.io/v2/pet/${pet.validPet.id}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq(pet.validPet.id.toString());
            });
    });

    it('Should fail to create an invalid pet', () => {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: pet.invalidPet,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500);
        });
    });
});
