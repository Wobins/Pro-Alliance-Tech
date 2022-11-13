describe('add todo', () => {
    before(() => {
        cy.visit('/', {timeout: 10000})
    })
    
    it('deletes a task', () => {
        cy.get('svg').last().click()
    })
    
})