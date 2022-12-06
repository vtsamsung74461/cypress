describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.yahoo.com')
    cy.get('#yschsp').click().type('test')
    cy.get('.mag-glass')

  })
})