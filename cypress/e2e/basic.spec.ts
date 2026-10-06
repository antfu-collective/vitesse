context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.contains('[Home Layout]')
      .should('exist')

    cy.get('#input')
      .type('Vitesse{Enter}')
      .url()
      .should('eq', 'http://localhost:3333/hi/Vitesse')

    cy.contains('[Default Layout]')
      .should('exist')

    cy.get('[btn]')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/')
  })

  it('markdown', () => {
    cy.get('[data-test-id="about"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/about')

    cy.get('.shiki')
      .should('exist')

    cy.get('.prose a[href="https://github.com/antfu/vitesse"]')
      .should(($links) => {
        for (const link of $links) {
          expect(link).to.have.attr('target', '_blank')
          expect(link.getAttribute('rel')?.split(/\s+/)).to.include('noopener')
        }
      })
  })
})
