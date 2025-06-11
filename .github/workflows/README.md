# 🚀 GitHub Actions Workflows

This folder contains all the GitHub Actions workflow files for the QA Test Automation project.

## 📁 Files Overview

### 1. `ci.yml` - Main CI/CD Pipeline
- **Triggers**: Push to main/develop, Pull requests, Manual dispatch
- **Jobs**:
  - 🔧 Setup & Lint
  - 🔌 API Testing (Cypress + Newman)
  - 🌐 E2E Testing (Chrome, Firefox, Edge)
  - 🎯 DemoQA Tests
  - 🏪 AutomationExercise Tests
  - 💨 Smoke Tests (PR only)
  - ♿ Accessibility Tests
  - 🔒 Security Audit
  - 📊 Test Summary
  - 📢 Notifications

### 2. `nightly.yml` - Comprehensive Nightly Tests
- **Triggers**: Daily at 2 AM UTC, Manual dispatch
- **Jobs**:
  - 🎯 DemoQA Full Regression (all browsers + viewports)
  - 🏪 AutomationExercise Full Regression
  - 🔌 API Full Regression
  - ⚡ Performance Tests
  - ♿ Comprehensive Accessibility
  - 🎯 Cross-Browser Matrix
  - 📊 Nightly Summary
  - 📢 Nightly Notifications

### 3. `deploy-reports.yml` - Test Reports Deployment
- **Triggers**: After successful CI/CD runs, Manual dispatch
- **Features**:
  - 🏗️ Builds beautiful HTML report site
  - 🚀 Deploys to GitHub Pages
  - 📊 Organizes reports by category
  - 🔗 Creates navigation links

## 🛠️ Setup Instructions

### Step 1: Copy Files to GitHub Actions
```bash
# From project root, copy all files to .github/workflows/
cp workflow/*.yml .github/workflows/
```

### Step 2: Configure GitHub Secrets
Go to **Repository Settings > Secrets and variables > Actions** and add:

**Required:**
```
CYPRESS_RECORD_KEY=your-cypress-dashboard-key
```

**Optional:**
```
SLACK_WEBHOOK=https://hooks.slack.com/services/YOUR/WEBHOOK
SNYK_TOKEN=your-snyk-token-here
```

### Step 3: Enable GitHub Pages
1. Go to **Repository Settings > Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** (will be created automatically)
4. Your reports will be available at: `https://yourusername.github.io/your-repo-name`

### Step 4: Create .env File (Optional)
See `environment-variables.md` for all available environment variables.

## 📊 Test Execution Matrix

### CI Pipeline Tests
| Test Type | Browsers | Triggers |
|-----------|----------|----------|
| API Tests | N/A | All pushes, PRs |
| E2E Tests | Chrome, Firefox, Edge | All pushes, PRs |
| DemoQA | Chrome, Firefox | All pushes, PRs |
| AutomationExercise | Chrome, Firefox | All pushes, PRs |
| Smoke Tests | Chrome | PRs only |
| Accessibility | Chrome | All pushes, PRs |

### Nightly Tests
| Test Type | Browsers | Viewports |
|-----------|----------|-----------|
| DemoQA Regression | Chrome, Firefox, Edge | Desktop, Tablet, Mobile |
| AutomationExercise Regression | Chrome, Firefox, Edge | Desktop, Tablet, Mobile |
| API Regression | N/A | N/A |
| Performance | Chrome | Desktop |
| Accessibility | Chrome, Firefox | Desktop |

## 🎯 Available Scripts

### Updated package.json Scripts
The following scripts were added/updated to support CI/CD:

```json
{
  "test:api": "cypress run --spec 'tests/e2e/**/api.spec.js'",
  "test:e2e:chrome": "cypress run --browser chrome",
  "test:e2e:firefox": "cypress run --browser firefox",
  "test:e2e:edge": "cypress run --browser edge",
  "test:demoqa:chrome": "cypress run --spec 'tests/e2e/demoqa/**/*.spec.js' --browser chrome",
  "test:automationexercise:chrome": "cypress run --spec 'tests/e2e/automationexercise/**/*.spec.js' --browser chrome",
  "test:smoke": "cypress run --env grepTags=@smoke",
  "test:a11y": "cypress run --env grepTags=@accessibility",
  "test:performance": "cypress run --env grepTags=@performance",
  "test:newman": "newman run tests/api/automationexercise-collection.json -e tests/api/environment.json --reporters json,cli --reporter-json-export newman-results.json"
}
```

## 🔧 Cypress Configuration Updates

### Added CI/CD Features
- ✅ CI-specific timeouts (15s instead of 10s)
- ✅ Video recording control via environment variables
- ✅ Enhanced browser launch options for headless CI
- ✅ Environment variable overrides
- ✅ CI detection and configuration
- ✅ Custom tasks for CI information

## 📈 Features

### 🚀 Parallel Execution
- Multiple browsers tested simultaneously
- Separate jobs for different test suites
- Matrix strategy for comprehensive coverage

### 📊 Comprehensive Reporting
- Mochawesome HTML reports
- Newman API test reports
- Accessibility reports
- Performance metrics
- Screenshot and video artifacts

### 🔄 Smart Scheduling
- **CI Pipeline**: On every push and PR
- **Smoke Tests**: Only on PRs (faster feedback)
- **Nightly Tests**: Full regression at 2 AM UTC
- **Reports Deployment**: After successful runs

### 🔔 Notifications
- Slack integration for build status
- Different channels for regular vs nightly tests
- Rich notifications with run details

### 🛡️ Security & Quality
- ESLint code quality checks
- Prettier formatting validation
- npm audit for security vulnerabilities
- Snyk security scanning
- Accessibility compliance testing

## 🎨 Reports Website

The deployed reports website includes:
- 🏠 **Homepage** with navigation to all reports
- 📊 **Statistics** dashboard
- 🎯 **Categorized reports** (API, E2E, DemoQA, AutomationExercise, A11y, Nightly)
- 📱 **Responsive design**
- 🔗 **Direct links** to GitHub Actions runs

## 🚀 Getting Started

1. **Copy workflow files**: `cp workflow/*.yml .github/workflows/`
2. **Configure secrets** in GitHub repository settings
3. **Push to main branch** to trigger first CI run
4. **Check Actions tab** to see workflows running
5. **View reports** at your GitHub Pages URL

## 📞 Support

- Check `environment-variables.md` for configuration options
- Review individual workflow files for specific job details
- GitHub Actions logs provide detailed execution information
- Test reports include screenshots and videos for debugging 