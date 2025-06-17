const { faker } = require('@faker-js/faker');
const DEFAULT_PASSWORD = 'ChallengePass1$';


module.exports = {

    getRandomCountry() {
        //To improve: This could be moved for specific data related to sign up only seeing we can use more countries on other feature.
        let countryList = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore']
        return countryList[Math.floor(Math.random() * countryList.length)];
    },

    getRandomUser({ companyField = null, newsletterField = false, specialOffersField = false, address2Field = null } = {}) {
        //To improve: Move hardcoded values to contants or fixtures so we use a global data for maintainance.
        let dobDate = faker.date.birthdate({ mode: 'age', min: 18, max: 65 })
        return {
            title: Math.random() < 0.5 ? 'Mr' : 'Mrs',
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            password: DEFAULT_PASSWORD,
            email: faker.internet.email(),
            dob: dobDate.toISOString().split('T')[0], //Removing timestamp
            address: faker.location.streetAddress(),
            address2: address2Field != null ? faker.location.streetAddress() : null,
            country: this.getRandomCountry(),
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            mobileNumber: faker.phone.number({ style: 'international' }),
            company: companyField != null ? faker.company.name() : null,
            newsletterCheck: newsletterField,
            specialOffersCheck: specialOffersField
        }
    }

}