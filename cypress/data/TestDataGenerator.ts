import { faker } from '@faker-js/faker';
import { User } from './user';

/**
 * Utility class for generating test data
 */
export default class TestDataGenerator {
  /**
   * Generate random user data for registration
   */
  static generateUserData(): User {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({ firstName, lastName, provider: 'NANLabs.com' });
    const password = faker.internet.password({length: 8}) + 'A1!';
    
    return {
      name: `${firstName} ${lastName}`,
      firstName,
      lastName,
      email,
      password,
      dateOfBirth: this.parseDateOfBirth(faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toString()),
      company: faker.company.name(),
      address1: faker.location.streetAddress(),
      address2: faker.location.streetAddress(false),
      country: 'United States',
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode('#####'),
      mobileNumber: faker.phone.number(),
      title: faker.helpers.arrayElement(["Mr", "Mrs"]),
      newsletter: faker.helpers.arrayElement([true, false]),
      specialOffers: faker.helpers.arrayElement([true, false]),
      isActive: true,
    };
  }

/**
 * Format a date to "DD Month YYYY" (e.g., "10 July 1977")
 */
static parseDateOfBirth(dateString: string): {
  day: string;
  month: string;
  year: string;
} {
  const date = new Date(dateString);

  const day = date.getUTCDate().toString().padStart(2, '');
  const month = date.toLocaleString('en-GB', { month: 'long', timeZone: 'UTC' });
  const year = date.getUTCFullYear().toString();

  return {
    day,
    month,
    year,
  };
}
}