# QA / Test Automation Engineer Challenge

This project contains authentication tests for NaNLabs automation challenge using Cypress.

---

## 🛠️ Tool

**Cypress**It was used Cypress because it's a modern framework highly recommended for agile projects where initial setup should be fast and stable. Cypress provides support for many integrations like Reporting, cross-browser testing, Slack, and many other tools. Have a big community that will be helpful to get additional documentation for our work.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v22 or higher)
- Chrome and Firefox browser if we want to run locally on both browsers.

1. **Clone the repository** (if not already done):
   ```bash
   git clone https://github.com/diegohrlr/drodriguez-qa-test-automation-engineer-challenge
   cd drodriguez-qa-test-automation-engineer-challenge
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🧪 Running Tests
**Allowed parameters and envs**:
Environments: dev|stg|prd
Browsers: chrome|firefox (must be installed locally)
Devices: mobile|tablet|desktop

### Interactive Mode

**Open Cypress Test Runner**:
```bash
npm run cypress:open --env environment=stg
```

### Console Mode

**Running all tests on Chrome for all devices on STG**:
```bash
npm run test:chrome:all
```

**Running all tests on Firefox for all devices on STG**:
```bash
npm run test:firefox:all
```

**Running all tests on custom browser and device**:
```bash
npm run test:${Browser}:${Device}
e.g: npm run test:chrome:desktop
```

**Generate report if we run the tests on a single browser|device**:
After execution /cypress/reports should not be empty
```bash
npm run report
```

## 💬 Pending improvements
- Develop and improve test logs to be helpful on test failures and get better information on the step by step
- Improve test data file to not duplicate values
- Notice that sometimes we got a error under cy.visit() using pagePath even if cy.log contains the right url. Fix this buggy execution or add a retry if fails on navigate()
- Some values on the sign up form are harcoded as (Mr, Mrs). Move this to constants and use it for a unique file info to prevent duplicated values
- Add methods comments and documentation describing method behavior, expected parameters and returns
- Setup cypress project so we can use parallel mode on the Github action matrix.
- Add API integration on our tests to reduce execution time, e.g. For Delete users I would create the user using the API and then delete it by UI.