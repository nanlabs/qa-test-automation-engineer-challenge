const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Base URL will be overridden per test suite
    baseUrl: 'https://automationexercise.com',
    
    // Test file patterns
    specPattern: 'tests/e2e/**/*.spec.{js,ts}',
    supportFile: 'tests/support/e2e.js',
    fixturesFolder: 'tests/fixtures',
    screenshotsFolder: 'tests/screenshots',
    videosFolder: 'tests/videos',
    downloadsFolder: 'tests/downloads',
    
    // Viewport settings
    viewportWidth: 1920,
    viewportHeight: 1080,
    
    // Test settings
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,
    
    // Retry settings
    retries: {
      runMode: 2,
      openMode: 0
    },
    
    // Video settings - disable for CI unless explicitly enabled
    video: process.env.CI ? false : true,
    videoCompression: 32,
    videosFolder: 'tests/videos',
    
    // Screenshot settings
    screenshotOnRunFailure: true,
    screenshotsFolder: 'tests/screenshots',
    
    // Reporter settings
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'tests/config/reporter.config.json'
    },
    
    // Environment variables
    env: {
      // DemoQA settings
      demoqa_base_url: 'https://demoqa.com',
      
      // AutomationExercise settings
      ae_base_url: 'https://automationexercise.com',
      
      // Test user credentials (will be overridden by .env file)
      test_email: 'test@example.com',
      test_password: 'Test123!',
      
      // Feature flags
      skip_api_tests: false,
      skip_accessibility_tests: false,
      
      // Performance settings
      performance_threshold: 3000,
      
      // CI/CD specific settings
      record_key: process.env.CYPRESS_RECORD_KEY,
      is_ci: process.env.CI === 'true',
      
      // Test filtering using grep tags
      grepTags: process.env.CYPRESS_GREP_TAGS || ''
    },
    
    setupNodeEvents(on, config) {
      // Code coverage plugin (disabled for API-only testing)
      // require('@cypress/code-coverage/task')(on, config)
      
      // Environment setup
      require('dotenv').config()
      
      // Override config from environment variables
      if (process.env.DEMOQA_BASE_URL) {
        config.env.demoqa_base_url = process.env.DEMOQA_BASE_URL
      }
      if (process.env.AUTOMATIONEXERCISE_BASE_URL) {
        config.env.ae_base_url = process.env.AUTOMATIONEXERCISE_BASE_URL
      }
      
      // Dynamic config based on environment
      if (config.env.site === 'demoqa') {
        config.baseUrl = config.env.demoqa_base_url
      } else if (config.env.site === 'automationexercise') {
        config.baseUrl = config.env.ae_base_url
      }
      
      // CI specific configuration
      if (process.env.CI === 'true') {
        // Enable video recording for CI if CYPRESS_VIDEO_ENABLED is set
        if (process.env.CYPRESS_VIDEO_ENABLED === 'true') {
          config.video = true
        }
        
        // Increase timeouts for CI environment
        config.defaultCommandTimeout = 15000
        config.requestTimeout = 15000
        config.responseTimeout = 15000
        config.pageLoadTimeout = 60000
      }
      
      // Browser launch options
      on('before:browser:launch', (browser, launchOptions) => {
        // Chrome specific options for CI/headless mode
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--disable-gpu')
          launchOptions.args.push('--no-sandbox')
          launchOptions.args.push('--disable-dev-shm-usage')
          launchOptions.args.push('--disable-extensions')
          launchOptions.args.push('--disable-background-timer-throttling')
          launchOptions.args.push('--disable-renderer-backgrounding')
          launchOptions.args.push('--disable-backgrounding-occluded-windows')
        }
        
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-web-security')
          launchOptions.args.push('--allow-running-insecure-content')
        }
        
        // Firefox specific options for CI
        if (browser.name === 'firefox' && process.env.CI) {
          launchOptions.preferences['network.http.max-connections'] = 1
          launchOptions.preferences['network.http.max-connections-per-server'] = 1
        }
        
        return launchOptions
      })
      
      // Task definitions
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
        
        generateTestData() {
          const faker = require('faker')
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(8),
            phone: faker.phone.phoneNumber(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            zipCode: faker.address.zipCode()
          }
        },
        
        // CI specific tasks
        getCIInfo() {
          return {
            ci: process.env.CI === 'true',
            browser: process.env.CYPRESS_BROWSER || 'chrome',
            headless: process.env.CYPRESS_HEADLESS !== 'false',
            record: process.env.CYPRESS_RECORD === 'true'
          }
        }
      })
      
      // Return the config object
      return config
    },
    
    // Experimental features
    experimentalStudio: true,
    experimentalWebKitSupport: false
  },
  
  // Component testing configuration (if needed)
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack'
    }
  }
}) 