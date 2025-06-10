describe('Coverage check', () => {
    it('Collects coverage if available', () => {
      cy.visit('/') 
      cy.window().then((win) => {
        if (win.__coverage__) {
          cy.task('coverageReport', win.__coverage__)
        } else {
          cy.log('No coverage data found')
        }
      })
    })
  })
  