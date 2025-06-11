# 🧪 QA / Test Automation Engineer Challenge – Choose Your Test

Welcome to the **QA / Test Automation Engineer Challenge!** 🔍🧼
This challenge is designed to evaluate your ability to test modern web applications with a strong focus on **automation, coverage, and clarity**.

## 🎯 Context

At NaNLABS, we believe **quality is a shared responsibility**—but we count on Guada Gramajos to lead the way. We want to see how you approach building a **realistic and maintainable test strategy**, especially in modern JavaScript environments.

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
