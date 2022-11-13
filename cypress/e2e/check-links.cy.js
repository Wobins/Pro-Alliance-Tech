/// <reference types="cypress" />

describe('checks all the links work', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('prints a success message', () => {
    cy.log("To-Do app correctly started")
  })

  it('visits the about page', () => {
    cy.visit('/about')
    cy.contains('Version', {timeout: 10000}).then((el) => {
      cy.log(`Here it is: ${el.value}`)
    })
    
  })

  it('checks the about page', () => {
    cy.get('footer > a').click()
    cy.url().then((url) => {
      cy.log(`Here it is the '${url}' page`)
    })
    
  })

  it('prints the url', () => {
    cy.url().then((url) => {
      cy.log(`This is the url: ${url}`)
    })
  })

})
