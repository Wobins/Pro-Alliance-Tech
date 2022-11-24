import Footer from '../../src/Components/Footer'

describe('Footer.cy.js', () => {
  
  it('checks the copyright year', () => {
    cy.mount(<Footer />)
    cy.get('footer>p').should('contains.text', '2022')
  })

  it('checks the About link', () => {
    cy.mount(<Footer />)
    cy.get('[href="/about"]').should('contains.text', 'About')
  })
})