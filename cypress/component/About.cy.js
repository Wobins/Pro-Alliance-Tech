import About from '../../src/Components/About'

describe('About.cy.js', () => {
  
  it('checks About title', () => {
    cy.mount(<About />)
    cy.get('h4').should('contains.text', 'Version 2.1.3')
  })

  it('checks the Go Back link', () => {
    cy.mount(<About />)
    cy.get('a[href="/"]').should('contains.text', 'Go Back')
  })
})