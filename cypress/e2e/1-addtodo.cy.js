describe('add todo', () => {
    before(() => {
        cy.visit('/', {timeout: 10000})
        cy.get('button.btn').click()
    })
    
    it('add a task', () => {
        cy.get('input[type="text"]').first().type("Hire Ange Wobinwo")
        cy.get('input[type="text"]').last().type("November 14th, 8:15 am")
        cy.get('input[type="checkbox"]').check()
        cy.get('input[type="submit"]').click()
        cy.get('.task').then((tasks) => {
            cy.log(`${tasks[tasks.length -1]}`)
        })
    })
    
})