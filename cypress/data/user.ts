export type User = {
  title: 'Mr' | 'Mrs';
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  isActive: boolean;
  password: string;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
    company: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
    newsletter?: boolean;
    specialOffers?: boolean;
};

