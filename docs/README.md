# Running Cypress Tests

To execute the tests in this repository, follow these steps:

## Prerequisites

- **Node.js** must be installed on your system.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Open Cypress GUI:**
   ```bash
   npx cypress open
   ```
   This will launch the Cypress Test Runner, where you can select and run available test suites.

## Available Test Suites

- **logIn User**
- **logOut User**
- **Register User**

---

This repository also has the test triggered on every pull request.

## Improvements

Fields data of signUp forms accepts any character, even emojis on the address, which is a major problem if we think on products deliveries. Having field validations and creating negative tests cases like Wrong adress, wrong phone... etc would be a nice improvement

a