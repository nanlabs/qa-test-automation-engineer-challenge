const tests = require('../../fixtures/user')
let user;
describe('API user tests', () => {

  before(function() {
    cy.createUser(tests.user).then((createdUuser) => {
      cy.log(`User created: ${createdUuser.email}`);
      user = createdUuser;
    });
  })

  it('APIUSER001 - Get user account details', function()  {
    cy.log(`User used: ${user.email}`);
    cy.request({
      method: 'GET',
      url: 'https://automationexercise.com/api/getUserDetailByEmail',
      form: true,
      body: {
        email: user.email
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      // Potencial issue, the response body is:
      // "{"responseCode": 400, "message": "Bad request, email parameter is missing in GET request."}"
      // Could not verify details
      cy.log(JSON.stringify(res.body))
    });
  });

  it('APIUSER002 - Verify Login with user created', function()  {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
      body: {
        email: user.email,
        password: user.password
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
      const data = JSON.parse(res.body);
      expect(data.message).to.include('User exists');
    });
  });

  it('APIUSER003 - Update User Account', function()  {
    cy.request({
      method: 'PUT',
      url: 'https://automationexercise.com/api/updateAccount',
      form: true,
      body: tests.update
    }).then((res) => {
      expect(res.status).to.eq(200);
      cy.log(JSON.stringify(res.body))
      const data = JSON.parse(res.body);
      expect(data.message).to.include('User updated');
    });
  });


  it('APIUSER004 - Delete User Account', function()  {
    cy.deleteUser(user.email, user.password);
  });

})