# Environment Variables Configuration

## 📋 GitHub Secrets Required

Configure these secrets in your GitHub repository under **Settings > Secrets and variables > Actions**:

### 🔑 Required Secrets
```bash
CYPRESS_RECORD_KEY=your-cypress-dashboard-key
```

### 🔑 Optional Secrets
```bash
SLACK_WEBHOOK=https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK
SNYK_TOKEN=your-snyk-token-here
```

## 🌍 Environment Variables (.env file)

Create a `.env` file in the root directory with:

```bash
# Cypress Configuration
CYPRESS_RECORD_KEY=your-cypress-record-key-here
DEMOQA_BASE_URL=https://demoqa.com
AUTOMATIONEXERCISE_BASE_URL=https://automationexercise.com

# Browser Settings
CYPRESS_BROWSER=chrome
CYPRESS_HEADLESS=true
CYPRESS_VIDEO_ENABLED=false

# Viewport Settings
CYPRESS_VIEWPORT_WIDTH=1920
CYPRESS_VIEWPORT_HEIGHT=1080

# Test Configuration
CYPRESS_GREP_TAGS=@smoke,@api,@e2e
TEST_EMAIL=test@example.com
TEST_PASSWORD=Test123!

# Performance Thresholds
PERFORMANCE_THRESHOLD=3000
API_RESPONSE_THRESHOLD=2000

# Feature Flags
SKIP_API_TESTS=false
SKIP_ACCESSIBILITY_TESTS=false

# Notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK
```

## 🚀 CI/CD Environment Variables

These are automatically set by the GitHub Actions workflows:

```bash
CI=true
NODE_VERSION=20.x
CYPRESS_CACHE_FOLDER=~/.cache/Cypress
CYPRESS_VIDEO_ENABLED=true  # Only for nightly tests
``` 