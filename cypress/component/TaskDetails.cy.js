import TaskDetails from '../../src/Components/TaskDetails'

describe('TaskDetails.cy.js', () => {
  
  it('uses custom text for the button label', () => {
    cy.mount(<TaskDetails />)
    cy.get('div').should('contains.text', 'TaskDetails')
  })
})