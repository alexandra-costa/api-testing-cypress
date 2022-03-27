/// <reference types="cypress"/>
const url = Cypress.config('baseUrl')
describe('Create a new post', () => {
    it('Create a new post', () => {
        cy.request('POST', url + '/posts', {
           method: 'POST',
            body: JSON.stringify({
                title: 'Test',
                body: 'Test',
                userId: 1
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    it('Create a new post with invalid userId', () => {
        cy.request('POST', url + '/posts', {
            method: 'POST',
             body: JSON.stringify({
                 title: '',
                 body: '',
                 userId: ''
             }),
             headers: {
                 'Content-Type': 'application/json; charset=UTF-8',
             },
         })
         .then((response) => {
             expect(response.status).to.eq(504) // Request com problema, resultado = 201
         })
    })
})