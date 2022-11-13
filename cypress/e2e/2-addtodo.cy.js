import {createTask} from '../actions/AddTask'

describe('add todo', () => {
    before(() => {
        cy.visit('/', {timeout: 10000})
        cy.get('button.btn').click()
    })
    
    it('add a task', () => {
        createTask.addTask()
    })
    
})