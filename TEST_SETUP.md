# 🧪 QA Test Automation Setup Guide

## 📋 Project Overview

This project implements a comprehensive E2E test automation suite for testing both [DemoQA](https://demoqa.com/) and [AutomationExercise](https://automationexercise.com/) websites using Cypress as the primary testing framework.

## 🏗️ Architecture

- **Framework**: Cypress 13.x with JavaScript
- **Design Pattern**: Page Object Model (POM)
- **Structure**: Modular test organization with reusable components
- **Reporting**: Mochawesome HTML reports with screenshots and videos
- **CI/CD**: GitHub Actions workflow support

## 📁 Project Structure

```
qa-test-automation-challenge/
├── tests/
│   ├── e2e/
│   │   ├── automationexercise/
│   │   │   └── homepage.spec.js         # Comprehensive AE homepage tests
│   │   └── demoqa/
│   │       └── basic-elements.spec.js   # Basic DemoQA element tests
│   ├── page-objects/
│   │   ├── automationexercise/
│   │   │   ├── home.page.js            # AE homepage page object
│   │   │   └── products.page.js        # AE products page object
│   │   └── demoqa/
│   │       └── elements.page.js        # DemoQA elements page object
│   ├── support/
│   │   ├── e2e.js                      # Main support file
│   │   └── commands.js                 # Custom Cypress commands
│   ├── fixtures/
│   │   └── automationexercise-test-data.json  # Test data
│   └── config/
│       └── reporter.config.json       # Reporting configuration
├── cypress.config.js                   # Main Cypress configuration
├── package.json                        # Dependencies and scripts
├── .eslintrc.js                        # ESLint configuration
├── .prettierrc                         # Prettier configuration
├── rules.mdc                           # Project rules in MDC format
└── CONTRIBUTING.md                     # Development guidelines
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Chrome browser (recommended)

### Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd qa-test-automation-engineer-challenge
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify installation**:
   ```bash
   npx cypress verify
   ```

## 🧪 Running Tests

### Interactive Mode (Recommended for Development)

**Open Cypress Test Runner**:
```bash
npm run cypress:open
```

**Open with specific site configuration**:
```bash
# For AutomationExercise
npm run cypress:open:ae

# For DemoQA
npm run cypress:open:demoqa
```

### Headless Mode (CI/CD)

**Run all tests**:
```bash
npm test
```

**Run tests for specific site**:
```bash
# AutomationExercise tests
npm run test:automationexercise

# DemoQA tests
npm run test:demoqa
```

**Run tests in different browsers**:
```bash
npm run test:chrome
npm run test:firefox
npm run test:edge
```

**Run tests with different viewport sizes**:
```bash
npm run test:mobile    # 375x667
npm run test:tablet    # 768x1024
npm run test:desktop   # 1920x1080
```

## 📊 Test Coverage

### AutomationExercise Tests (Primary Focus)
✅ **Homepage Functionality**:
- Page load and layout verification
- Navigation menu testing
- Product display and interaction
- Category and brand filtering
- Add to cart functionality
- Newsletter subscription
- Responsive design testing
- Accessibility checks
- Performance monitoring

✅ **E-commerce Features**:
- Product browsing and search
- Shopping cart management
- User authentication flows
- Contact form validation
- Cross-browser compatibility

### DemoQA Tests (Secondary Focus)
✅ **UI Elements Testing**:
- Text box form interactions
- Radio button selections
- Checkbox operations
- Web table management
- Button click handling
- Basic navigation

## 🛠️ Development Tools

### Code Quality
```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

### Custom Commands Available
- `cy.loginAE(email, password)` - Login to AutomationExercise
- `cy.addToCart(productIndex)` - Add product to cart
- `cy.searchProduct(term)` - Search for products
- `cy.generateTestData()` - Generate test data using Faker
- `cy.checkA11y()` - Accessibility testing
- `cy.takeScreenshot(name)` - Custom screenshots

### API Testing Available
- **Postman Collection**: `tests/api/automationexercise-collection.json`
- **Newman CLI**: `npm run postman:test`
- **Cypress API Tests**: `tests/e2e/automationexercise/api-tests.spec.js`
- **OpenAPI Documentation**: `tests/api/openapi.yaml`
- **API Testing Guide**: See `API_TESTING.md` for detailed instructions

## 📈 Reporting

### Test Reports Location
- **HTML Reports**: `tests/reports/mochawesome/`
- **JUnit XML**: `tests/reports/junit/`
- **Screenshots**: `tests/screenshots/`
- **Videos**: `tests/videos/`

### Viewing Reports
After test execution, open the HTML report:
```bash
# Open the latest HTML report
open tests/reports/mochawesome/test-results*.html
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file (copy from `.env.example`) to customize:
```bash
# Base URLs
AUTOMATIONEXERCISE_BASE_URL=https://automationexercise.com
DEMOQA_BASE_URL=https://demoqa.com

# Test Configuration
DEFAULT_BROWSER=chrome
HEADLESS_MODE=false
VIEWPORT_WIDTH=1920
VIEWPORT_HEIGHT=1080
```

### Cypress Configuration
Main configuration in `cypress.config.js`:
- Multiple browser support (Chrome, Firefox, Edge)
- Configurable timeouts and retries
- Screenshot and video settings
- Custom task definitions

## 🌐 Supported Browsers

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | Latest  | ✅ Fully Supported |
| Firefox | Latest  | ✅ Supported |
| Edge    | Latest  | ✅ Supported |
| Safari  | Latest  | ⚠️ Limited Support |

## 📱 Responsive Testing

Predefined viewport configurations:
- **Mobile**: 375x667 (iPhone SE)
- **Tablet**: 768x1024 (iPad)
- **Desktop**: 1920x1080 (Full HD)

## 🔍 Test Sites Analysis

### AutomationExercise (https://automationexercise.com/)
**Why chosen**: Full-featured e-commerce site with comprehensive functionality perfect for demonstrating real-world automation scenarios.

**Key Features Tested**:
- Complete shopping flow
- User authentication
- Product management
- Form validations
- API endpoints
- Responsive design

### DemoQA (https://demoqa.com/)
**Why chosen**: Excellent for testing various UI interactions and form elements.

**Key Features Tested**:
- Form interactions
- UI element handling
- Basic navigation
- Input validations

## 🚨 Troubleshooting

### Common Issues

**1. Cypress won't open**:
```bash
npx cypress install --force
```

**2. Tests failing due to timeouts**:
- Check internet connection
- Increase timeout in `cypress.config.js`
- Verify target sites are accessible

**3. Browser not found**:
```bash
# Install Chrome/Firefox
# Update browser to latest version
```

**4. Module not found errors**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Debug Mode
Run tests with debug information:
```bash
DEBUG=cypress:* npm test
```

## 📋 Test Checklist

### Before Running Tests
- [ ] Node.js and npm installed
- [ ] Dependencies installed (`npm install`)
- [ ] Target sites accessible
- [ ] Browser versions up to date

### After Test Execution
- [ ] Review test results in reports
- [ ] Check screenshots for failed tests
- [ ] Analyze video recordings if needed
- [ ] Update test documentation

## 🤝 Contributing

Please refer to `CONTRIBUTING.md` for detailed development guidelines including:
- Code standards and formatting rules
- Test writing best practices
- Git workflow and commit conventions
- Review process requirements

## 📚 Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Page Object Model Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [AutomationExercise API Documentation](https://automationexercise.com/api_list)
- [DemoQA Test Site](https://demoqa.com/)

## 🎯 Next Steps

1. **Run the existing tests** to verify setup
2. **Explore the Page Objects** to understand the structure
3. **Add new test scenarios** following the established patterns
4. **Extend API testing** for AutomationExercise
5. **Enhance accessibility testing** coverage
6. **Implement performance testing** with Lighthouse

---

**Happy Testing! 🧪✨** 