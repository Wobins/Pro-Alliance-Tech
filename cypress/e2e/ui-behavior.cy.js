describe('UI Behavior testing', () => { 
    before(() => {
        cy.visit('/')
        cy.get('button.btn').click()
    })

    it('verifies the button has changed to Close', () => {
        cy.get(' button.btn')
            .should('contain.text', "Close")
            .and('have.css', 'background-color', 'rgb(255, 0, 0)')
    })  

    it('verifies all inputs are there', () => {
        cy.get('input[type="text"]').should('have.length', 2)
        cy.get('input[type="checkbox"]').should('have.value', "false")
        cy.get('input[type="submit"]').should('have.value', 'Save Task')
    })
    
    it('verifies the form disappear when we close', () => {
        cy.get(' button.btn').should('contain.text', "Close").click()
        cy.get('.container', {defaultCommandTimeout: 80000, pageLoadTimeout: 100000}).then((el) => {
            const arr = Array.prototype.slice.call(el[0].children);
            console.log(arr[0])
            arr.forEach(el => {
                cy.log(el)
            });
        })
    })
    
    it('checks the green left border set for reminder tasks', () => {
        // when you check the reminder checkbox, the task added should have a green left border
        cy.get(`.reminder`).should('have.css', 'border-left-color', 'rgb(0, 128, 0)')
    })
    
    it('change the reminder of task when double clicking', () => {
        // look carefully when the left border of first task change color
        cy.get(`.task`).first().dblclick()
    })
})