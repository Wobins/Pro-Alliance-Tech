describe('API Test', () => {
    // to start the db server
    // make sure your run the below command
    // npm run server

    it('GET tasks', () => {
        // cy.exec('npm run server', {timeout: 15000, failOnNonZeroExit: false})
        cy.request('GET', 'http://localhost:5000/tasks').then((res) => {
            cy.log("API available", res)
            cy.log(`Status: ${res.status} ${res.statusText}`)
            expect(res.status).to.eq(200)
            // expect(res.body).to.have.length.greaterThan(1)
        })
    })

    it("POST a new task", () => {
        let tomorrow =  new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)

        const options = [true, false]
        let doRemind = options[Math.floor(Math.random() * 2)]
        let id = 10 + Math.floor(Math.random() * 100)

        cy.request("POST", "http://localhost:5000/tasks", {
          id: id,
          text: `Task ${id} from POST`,
          day: tomorrow,
          reminder: doRemind
        }).then((response) => {
          cy.log("response", response);
          cy.log('Reminder is set to:', doRemind)
          cy.log('Task id: ', id)
          cy.log('Task date: ', tomorrow.getDate())
        });
    });

    it("DELETE a task", () => {
        cy.request("DELETE", "http://localhost:5000/tasks/3").then(
          (response) => {
            cy.log("response", response);
          }
        );
    });
  
})