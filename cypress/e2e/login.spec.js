import { loginPage } from '../pages/LoginPage';

describe('Login Flows', () => {
  beforeEach(function () {
    cy.fixture('users').then((users) => {
      this.users = users;
    });
    loginPage.visit();
  });

  it('Should log in successfully with valid credentials', function () {
    loginPage.login(this.users.validUser.username, this.users.validUser.password);
    loginPage.assertLoginSuccess();
  });

  it('Should show error on invalid credentials', function () {
    loginPage.login(this.users.invalidUser.username, this.users.invalidUser.password);
    loginPage.assertLoginError();
  });

  it('Should show error if fields are empty', () => {
    loginPage.submit();
    loginPage.assertLoginError();
  });
})
