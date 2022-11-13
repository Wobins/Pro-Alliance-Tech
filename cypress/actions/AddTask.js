class Task {
    text = 'input[placeholder="Add Task"]';
    date = 'input[placeholder="Add Day & Time"]';
    reminder = 'input[type="checkbox"]';
    button = 'input[type="submit"]';

    addTask(id, text, date, reminder) {
        cy.get(this.text).type("Task added from a Task class");
        cy.get(this.date).type("Date added from Task class");
        cy.get(this.reminder).check();
        cy.get(this.button).click();
    }
}

export const createTask = new Task();