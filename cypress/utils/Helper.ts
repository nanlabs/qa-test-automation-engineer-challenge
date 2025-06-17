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

