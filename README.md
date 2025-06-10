# 🧪 QA / Test Automation Engineer Challenge – Choose Your Test

Welcome to the **QA / Test Automation Engineer Challenge!** 🔍🧼
This challenge is designed to evaluate your ability to test modern web applications with a strong focus on **automation, coverage, and clarity**.

## 🎯 Context

At NaNLABS, we believe **quality is a shared responsibility**—but we count on QA engineers to lead the way. We want to see how you approach building a **realistic and maintainable test strategy**, especially in modern JavaScript environments.

Your task is to **design and implement an end-to-end test suite** using a tool like **Cypress** (preferred) to automate UI and API flows. You’ll be working with a real or realistic frontend page and API.

---

## 🕹 Choose Your Page to Test

You may test **any of the following public pages**. Choose one and briefly explain why you picked it.

### ✅ Suggested Test Pages

Choose a known test site such as:

- [https://demoqa.com](https://demoqa.com)
- [https://the-internet.herokuapp.com](https://the-internet.herokuapp.com)
- [https://automationexercise.com](https://automationexercise.com)

Focus on testing a **specific user flow** (e.g., form submission, login process, navigation, or data filtering) using **Cypress or another modern test automation framework**.

> [!NOTE]
> You can choose a different public test site if you prefer—just make sure it’s stable, accessible, and has a clear user flow to automate.

---

## 📦 Deliverables

> 📥 **Your submission must be a Pull Request that includes:**

- A folder with your automated test suite.
- A `README.md` that describes:

  - What tool you used and why.
  - How to run the tests locally.
  - What the tests cover and what could be improved with more time.

- Bonus (if API testing): include a few **Postman**, **Swagger**, or **Cypress API tests** that complement your UI flows.
- Bonus (if exploratory): include an optional **manual test plan or checklist** with potential corner cases or exploratory notes.

> [!TIP]
> You may use GitHub Actions or other CI tools to show test automation in action, but this is not required.

## 🧪 Suggested Folder Structure

```txt
/
├── .github/
│   └── workflows/
├── tests/
│   └── e2e/
│       └── [your_test_file].spec.js
├── docs/
│   └── TESTING_PLAN.md (optional)
├── cypress.config.js (if using Cypress)
├── README.md
└── ...
```

## 🌟 Nice to Have

> 💡 **Bonus Points For:**

- Testing across **multiple screen sizes** or devices (mobile, tablet, desktop).
- Including **edge cases and failure handling** in your tests.
- Including **basic test coverage metrics**.
- Including **Postman or Swagger** examples for REST API validation.
- Using **GitHub Actions or any CI** to run the tests on pull request.
- Including tests that validate behavior after state changes or updates (e.g., after clicking a button, submitting a form).

> [!TIP]
> Want extra inspiration? Check out our **[Awesome NaNLABS repository](https://github.com/nanlabs/awesome-nan)** for tips on structure, testing tools, and automation examples.

## 🧪 Submission Guidelines

> 📌 **Follow these steps to submit your solution:**

1. **Fork this repository.**
2. **Create a feature branch** with your test suite.
3. **Commit your changes** with clear messages.
4. **Open a Pull Request** following the provided template.
5. **We’ll review and provide feedback.**

## ✅ Evaluation Criteria

> 🔍 **What we’ll be looking at:**

- Coverage and clarity of your test strategy.
- Use of best practices in test structure and tool usage.
- Automation quality and ability to debug failing tests.
- Clarity of README and instructions.
- Proactive mindset: testing for edge cases, unexpected inputs, and accessibility.

## 💬 Final Notes

> [!TIP]
> Don’t overthink it—we care more about how you think than about perfection!

A few tips:

- Pick something you're comfortable with or excited to try.
- Make your tests easy to read, run, and maintain.
- Call out assumptions or tradeoffs in your README.

## 🏁 Good luck and happy testing

If you have any questions, don’t hesitate to reach out. 🧪💬




////////////////////////////////////////////////////////////////////////////////////


````markdown
# Cypress Automation Project - AutomationExercise

## Description

This project includes automated end-to-end (E2E) tests using Cypress for the AutomationExercise platform. It covers UI tests for different site features, API validations using Postman, basic code coverage metrics, and an optional setup for CI with GitHub Actions.

---

### Project Selection Justification

I chose [AutomationExercise](https://automationexercise.com) as the target application because it simulates a comprehensive e-commerce platform, including key flows such as user login, product browsing, cart management, and API endpoints. This allowed me to build realistic test cases for both **UI** and **API** layers.

The site provides a stable and predictable environment, which is ideal for implementing reliable and maintainable automated tests. It also exposes a public API, enabling backend verification and negative testing scenarios.

By testing this platform, I was able to simulate real-world interactions and validate the system both through the UI and API. This dual-layer strategy reflects a practical and scalable QA approach for real production environments.

---

## Tools & Technologies

- **Cypress**: Main E2E test automation framework using JavaScript.
- **Postman**: For manual and automated REST API validation.
- **GitHub Actions**: (optional) To execute tests automatically on every pull request.
- **nyc / cypress-coverage**: To collect basic code coverage metrics (basic config included).

---

## Folder Structure

```txt
cypress/
├── e2e/
│   ├── pages/         # Page objects for UI tests
│   ├── tests/         # Cypress E2E test files
├── fixtures/          # Test data (e.g., users)
├── support/           # Custom commands and setup
postman/
├── collections/       # Postman collections for API tests
├── environments/      # Postman environment variables
````

---

## How to Run the Tests

### Prerequisites

* Node.js installed (v16+ recommended)
* npm or yarn installed

### Steps to Run UI Tests with Cypress

1. Clone the repository:

```bash
git clone <repo-url>
cd <project-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Open Cypress Test Runner (GUI mode):

```bash
npx cypress open
```

4. Run all tests in headless mode (CLI):

```bash
npx cypress run
```

### Running API Tests with Postman

* Import the Postman collection from `postman/collections/AutomationExercise_API.postman_collection.json`
* Run the requests manually or using a runner in Postman
* Each request includes test scripts validating response codes and payload structures

---

## Code Coverage

The project includes a basic configuration for `cypress-coverage` using `nyc`. Coverage reports are generated automatically and can help identify untested areas for improvement.

---

## API Coverage and Validation with Postman

| ID   | API                                | Method | URL                                                               | Expected Code | Description                                        |
| ---- | ---------------------------------- | ------ | ----------------------------------------------------------------- | ------------- | -------------------------------------------------- |
| API1 | Get All Products List              | GET    | [productsList](https://automationexercise.com/api/productsList)   | 200           | Validates that the product list is returned.       |
| API5 | POST to Search Product             | POST   | [searchProduct](https://automationexercise.com/api/searchProduct) | 200           | Validates product search with a valid parameter.   |
| API7 | POST Verify Login (valid)          | POST   | [verifyLogin](https://automationexercise.com/api/verifyLogin)     | 200           | Validates login with correct email/password.       |


---

# API Testing with Newman + HTML Report

## Prerequisites

- [Node.js](https://nodejs.org/) installed (v12+)
- Postman Collection (`NaNLabsTest.postman_collection.json`)
- Postman Environment file (`Dev.postman_environment.json`)

---

## Installation & Execution (1 step)

Install Newman, the HTML reporter, and run the tests with one command:

```bash
npm install -g newman newman-reporter-htmlextra && \
newman run NaNLabsTest.postman_collection.json \
  -e Dev.postman_environment.json \
  -r htmlextra \
  --reporter-htmlextra-title "NanLabs Test"
