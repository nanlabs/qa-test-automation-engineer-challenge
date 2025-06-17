import { User } from "../data/user";

export function createUser(user: User) {
  return cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/api/createAccount',
    form: true,
    body: {
      name: user.name,
      email: user.email,
      password: user.password,
      title: user.title,
      birth_date: user.dateOfBirth.day,
      birth_month: user.dateOfBirth.month,
      birth_year: user.dateOfBirth.year,
      firstname: user.firstName,
      lastname: user.lastName,
      company: user.company,
      address1: user.address1,
      address2: user.address2,
      country: user.country,
      zipcode: user.zipcode,
      state: user.state,
      city: user.city,
      mobile_number: user.mobileNumber,
    },
    failOnStatusCode: true,
  });
}

export function deleteUser(user: User) {
  return cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/api/deleteAccount',
    form: true,
    body: {
      email: user.email,
      password: user.password,
    },
    failOnStatusCode: true,
  });
}
export function loginUser(user: User) {
  return cy.request({
    method: 'POST',
    url: 'https://automationexercise.com/api/login',
    form: true,
    body: {
      email: user.email,
      password: user.password,
    },
    failOnStatusCode: true,
  });
}

export function verifyUserLoggedIn(email: string, password: string) {
  return cy.request({
    method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
      body: { email, password },
      failOnStatusCode: false,
  })
}

export function verifyUserDetailByEmail(expectedUser: User): void {
  cy.request({
    method: 'GET',
    url: 'https://automationexercise.com/api/getUserDetailByEmail',
    qs: { email: expectedUser.email },
    failOnStatusCode: true,
  }).then((response) => {
      expect(response.status).to.eq(200);
      let body = JSON.parse(response.body)
      console.log('Response Body:', body);
    expect(body).to.have.property('user');
    expect(body.user).to.be.an('object').and.not.be.empty;
    const userDetail: Partial<User> = mapApiUserToUser(body.user);
    expect(userDetail).to.deep.equal(omitUserFields(expectedUser)); // Omit specialOffers and newsletter
  });
}

function monthNumberToName(month: string): string {
  const date = new Date(2000, parseInt(month, 10) - 1, 1);
  return date.toLocaleString('en-US', { month: 'long' });
}

/**
 * Maps the API user response to the User type, omitting the 'id' field.
 */
export function mapApiUserToUser(apiUser: any): Partial<User> {
  // Destructure to remove 'id' if present
  const { id, ...rest } = apiUser;

  return {
    title: rest.title,
    firstName: rest.first_name,
    lastName: rest.last_name,
    name: rest.name,
    email: rest.email,
    dateOfBirth: {
      day: rest.birth_day,
      month: monthNumberToName(rest.birth_month),
      year: rest.birth_year,
    },
    company: rest.company,
    address1: rest.address1,
    address2: rest.address2,
    country: rest.country,
    state: rest.state,
    city: rest.city,
    zipcode: rest.zipcode,
    ...(rest.mobile_number && { mobileNumber: rest.mobile_number }),
    // newsletter, specialOffers, password, isActive are omitted as API does not return them
  };
}

function omitUserFields(user: User): Partial<User> {
  // Destructure to remove specialOffers and newsletter
  const { specialOffers, newsletter,password,mobileNumber, ...rest } = user;
  return rest;
}