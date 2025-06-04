# 🧪 QA / Test Automation Engineer Challenge – New guide for AutomationExercise.com

This is an end-to-end (E2E) test automation framework built using **Cypress**, designed to validate key functionalities of [https://automationexercise.com/]. 
It uses the **Page Object Model (POM)** for maintainable test code and generates detailed **Mochawesome** HTML reports.

## 🔧 Tools Used and Why

- **Cypress**: I picked it for its modern, fast, and developer-friendly architecture. It runs in the same loop as the application, enabling reliable manipulation and visibility assertions.
- **JavaScript**: Native Cypress language.
- **Mochawesome**: I picked this tool to generate interactive and human-readable HTML reports from test runs.
- **Page Object Model (POM)**: Ensures code reusability and cleaner test structure.
- **Fixtures**: External JSON files are used to manage test data for better scalability and separation of concerns.

## 🖥 How to Run the Tests Locally
- to run all test in Headless mode / npx cypress run
- to run specific test file / npx cypress run --spec "cypress/e2e/AddProducts_spec.cy.js"
- to run tests on a Cypress Ui mode / npx cypress open

## Generating report with Mochawesome
- Merge and Generate HTML Report / npx mochawesome-merge "cypress/reports/*.json" > mochawesome.json
- generate html view / npx marge mochawesome.json --reportDir=cypress/reports/html
- in this case the reports will be saved under 'reports' folder for every run

## ✅ Test Coverage
Automated Test Cases:
- Add products
- Add Review to Products
- Cart suscription
- Contact Us form
- Existing user validation
- Home suscription
- Invalid login
- login
- Logout user
- Remove Products
- Search product
- Sign up delete account
- Verify products
- Verify test page

## 💡 What Could Be Improved
With more time I believe this framework could be enhanced by:

✅ Adding cross-browser testing (e.g., via Cypress Dashboard or BrowserStack)

✅ API Testing Integration

✅ Retry logic & flaky test detection

✅ Visual testing for UI regressions

✅ Parallel execution for faster feedback

