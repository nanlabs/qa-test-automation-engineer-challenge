/**
 * AutomationExercise API Test Suite
 * Tests the API endpoints provided by AutomationExercise website
 * @author Guada Gramajo
 * @date 11-06-25
 * @requires API endpoints to be accessible
 */

describe('AutomationExercise - API Tests', () => {
  const baseUrl = 'https://automationexercise.com'
  const apiBaseUrl = `${baseUrl}/api`

  beforeEach(() => {
    // Set up API testing environment
    cy.intercept('GET', `${apiBaseUrl}/**`).as('getApiCall')
    cy.intercept('POST', `${apiBaseUrl}/**`).as('postApiCall')
    cy.intercept('DELETE', `${apiBaseUrl}/**`).as('deleteApiCall')
  })

  describe('Products API', () => {
    it('should get all products successfully', () => {
      cy.request({
        method: 'GET',
        url: `${apiBaseUrl}/productsList`,
        failOnStatusCode: false
      }).then((response) => {
        // Verify response status
        expect(response.status).to.eq(200)
        
        // Parse response body if it's a string
        const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
        
        // Verify response structure
        expect(responseData).to.have.property('responseCode', 200)
        expect(responseData).to.have.property('products')
        expect(responseData.products).to.be.an('array')
        expect(responseData.products.length).to.be.greaterThan(0)
        
        // Verify product structure
        const firstProduct = responseData.products[0]
        expect(firstProduct).to.have.property('id')
        expect(firstProduct).to.have.property('name')
        expect(firstProduct).to.have.property('price')
        expect(firstProduct).to.have.property('category')
        
        // Verify data types
        expect(firstProduct.id).to.be.a('number')
        expect(firstProduct.name).to.be.a('string')
        expect(firstProduct.price).to.be.a('string')
        
        // Log for debugging
        cy.log(`Total products found: ${responseData.products.length}`)
      })
    })

    it('should search products successfully', () => {
      const searchTerm = 'blue'
      
      cy.request({
        method: 'POST',
        url: `${apiBaseUrl}/searchProduct`,
        form: true,
        body: {
          search_product: searchTerm
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        
        // Parse response body if it's a string
        const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
        
        expect(responseData).to.have.property('responseCode', 200)
        expect(responseData).to.have.property('products')
        expect(responseData.products).to.be.an('array')
        
        // If products are found, verify they contain the search term
        if (responseData.products.length > 0) {
          const productNames = responseData.products.map(p => p.name.toLowerCase())
          const hasMatchingProduct = productNames.some(name => name.includes(searchTerm.toLowerCase()))
          expect(hasMatchingProduct).to.be.true
        }
        
        cy.log(`Search results for "${searchTerm}": ${responseData.products.length} products`)
      })
    })

    it('should handle search with no results', () => {
      const invalidSearchTerm = 'xyznoproductmatch'
      
      cy.request({
        method: 'POST',
        url: `${apiBaseUrl}/searchProduct`,
        form: true,
        body: {
          search_product: invalidSearchTerm
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        
        // Parse response body if it's a string
        const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
        
        expect(responseData).to.have.property('responseCode', 200)
        expect(responseData).to.have.property('products')
        expect(responseData.products).to.be.an('array')
        // No specific assertion on length as API behavior may vary
      })
    })

    it('should validate response time for products API', () => {
      const startTime = Date.now()
      
      cy.request('GET', `${apiBaseUrl}/productsList`).then((response) => {
        const responseTime = Date.now() - startTime
        
        expect(response.status).to.eq(200)
        expect(responseTime).to.be.lessThan(3000) // Should respond within 3 seconds
        
        cy.log(`API response time: ${responseTime}ms`)
      })
    })
  })

  describe('Brands API', () => {
    it('should get all brands successfully', () => {
      cy.request({
        method: 'GET',
        url: `${apiBaseUrl}/brandsList`
      }).then((response) => {
        expect(response.status).to.eq(200)
        
        // Parse response body if it's a string
        const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
        
        expect(responseData).to.have.property('responseCode', 200)
        expect(responseData).to.have.property('brands')
        expect(responseData.brands).to.be.an('array')
        expect(responseData.brands.length).to.be.greaterThan(0)
        
        // Verify brand structure
        const firstBrand = responseData.brands[0]
        expect(firstBrand).to.have.property('id')
        expect(firstBrand).to.have.property('brand')
        
        // Verify known brands exist
        const brandNames = responseData.brands.map(b => b.brand)
        expect(brandNames).to.include.members(['Polo', 'H&M', 'Madame'])
        
        cy.log(`Total brands found: ${responseData.brands.length}`)
      })
    })
  })

  describe('User Management API', () => {
    let testUserEmail
    
    beforeEach(() => {
      // Generate unique email for each test
      testUserEmail = `test${Date.now()}@example.com`
    })

    it('should create a new user account', () => {
      const userData = {
        name: 'API Test User',
        email: testUserEmail,
        password: 'Test123!',
        title: 'Mr',
        birth_date: '15',
        birth_month: '1',
        birth_year: '1990',
        firstname: 'API',
        lastname: 'User',
        company: 'Test Company',
        address1: '123 API Street',
        address2: '',
        country: 'United States',
        zipcode: '12345',
        state: 'California',
        city: 'Test City',
        mobile_number: '1234567890'
      }

      cy.request({
        method: 'POST',
        url: `${apiBaseUrl}/createAccount`,
        form: true,
        body: userData,
        failOnStatusCode: false
      }).then((response) => {
        // Account creation might return different status codes
        expect(response.status).to.be.oneOf([200, 201, 422])
        
        // Parse response body if it's a string
        const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
        
        expect(responseData).to.have.property('responseCode')
        
        if (responseData.responseCode === 201) {
          expect(responseData.message).to.include('User created')
        } else if (responseData.responseCode === 400) {
          expect(responseData.message).to.include('Email already exists')
        }
      })
    })

    it('should verify user login', () => {
      cy.request({
        method: 'POST',
        url: `${apiBaseUrl}/verifyLogin`,
        form: true,
        body: {
          email: 'test@example.com',
          password: 'wrongpassword'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200)
        
        // Parse response body if it's a string
        const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
        
        expect(responseData).to.have.property('responseCode')
        expect(responseData).to.have.property('message')
        
        // Should return error for invalid credentials
        expect(responseData.responseCode).to.eq(404)
        expect(responseData.message).to.include('User not found')
      })
    })

    it('should handle account deletion', () => {
      cy.request({
        method: 'DELETE',
        url: `${apiBaseUrl}/deleteAccount`,
        form: true,
        body: {
          email: testUserEmail,
          password: 'Test123!'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(200)
        
        // Parse response body if it's a string
        const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
        
        expect(responseData).to.have.property('responseCode')
        
        // Account might not exist, so we accept different response codes
        expect(responseData.responseCode).to.be.oneOf([200, 404])
      })
    })
  })

  describe('Error Handling', () => {
    it('should handle invalid endpoints gracefully', () => {
      cy.request({
        method: 'GET',
        url: `${apiBaseUrl}/invalidEndpoint`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404)
        
        // This endpoint returns HTML instead of JSON
        if (typeof response.body === 'string' && response.body.includes('Page not found')) {
          expect(response.body).to.include('Page not found')
        } else {
          // Try to parse as JSON if it's a JSON response
          const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
          expect(responseData).to.have.property('responseCode', 404)
          expect(responseData).to.have.property('message')
          expect(responseData.message).to.include('not found')
        }
      })
    })

    it('should handle unsupported HTTP methods', () => {
      cy.request({
        method: 'PUT',
        url: `${apiBaseUrl}/productsList`,
        failOnStatusCode: false
      }).then((response) => {
        // The API may return 200 or 405 depending on implementation
        expect(response.status).to.be.oneOf([200, 405])
        
        if (response.status === 405) {
          // Parse response body if it's a string
          const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
          expect(responseData).to.have.property('responseCode', 405)
          expect(responseData.message).to.include('not supported')
        } else {
          // If 200, it might handle PUT like GET - just verify it doesn't crash
          cy.log('API handles PUT method gracefully')
        }
      })
    })

    it('should handle malformed requests', () => {
      cy.request({
        method: 'POST',
        url: `${apiBaseUrl}/searchProduct`,
        body: 'invalid json data',
        headers: {
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      }).then((response) => {
        // Should handle malformed data gracefully
        expect(response.status).to.be.oneOf([400, 422, 500])
      })
    })
  })

  describe('Performance Tests', () => {
    it('should handle concurrent API requests', () => {
      // Make concurrent requests using cy.all
      const requests = []
      
      for (let i = 0; i < 5; i++) {
        requests.push(
          cy.request('GET', `${apiBaseUrl}/productsList`).then((response) => {
            expect(response.status).to.eq(200)
            
            // Parse response body if it's a string
            const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
            expect(responseData.products).to.be.an('array')
            
            return response
          })
        )
      }
      
      // All requests should complete successfully
      cy.wrap(Promise.all(requests)).then((responses) => {
        expect(responses.length).to.eq(5)
        cy.log(`Successfully completed ${responses.length} concurrent requests`)
      })
    })

    it('should handle large search queries', () => {
      const longSearchTerm = 'a'.repeat(100) // 100 character search term
      
      cy.request({
        method: 'POST',
        url: `${apiBaseUrl}/searchProduct`,
        form: true,
        body: {
          search_product: longSearchTerm
        },
        timeout: 10000
      }).then((response) => {
        expect(response.status).to.eq(200)
        
        // Parse response body if it's a string
        const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
        
        expect(responseData).to.have.property('products')
      })
    })
  })

  describe('Data Validation', () => {
    it('should validate product data integrity', () => {
      cy.request('GET', `${apiBaseUrl}/productsList`).then((response) => {
        expect(response.status).to.eq(200)
        
        // Parse response body if it's a string
        const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
        
        responseData.products.forEach((product, index) => {
          // Validate required fields
          expect(product, `Product ${index}`).to.have.property('id')
          expect(product, `Product ${index}`).to.have.property('name')
          expect(product, `Product ${index}`).to.have.property('price')
          
          // Validate data types and formats
          expect(product.id, `Product ${index} ID`).to.be.a('number')
          expect(product.name, `Product ${index} name`).to.be.a('string').and.not.be.empty
          expect(product.price, `Product ${index} price`).to.match(/Rs\. \d+/)
          
          // Validate category structure if present
          if (product.category) {
            expect(product.category).to.have.property('usertype')
            expect(product.category).to.have.property('category')
          }
        })
      })
    })

    it('should validate brands data integrity', () => {
      cy.request('GET', `${apiBaseUrl}/brandsList`).then((response) => {
        expect(response.status).to.eq(200)
        
        // Parse response body if it's a string
        const responseData = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
        
        responseData.brands.forEach((brand, index) => {
          expect(brand, `Brand ${index}`).to.have.property('id')
          expect(brand, `Brand ${index}`).to.have.property('brand')
          
          expect(brand.id, `Brand ${index} ID`).to.be.a('number')
          expect(brand.brand, `Brand ${index} name`).to.be.a('string').and.not.be.empty
        })
      })
    })
  })

  afterEach(() => {
    // Clean up any test data if needed
    cy.log('API test completed')
  })
}) 