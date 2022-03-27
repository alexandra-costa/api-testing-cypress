/// <reference types="cypress"/>

const url = Cypress.config('baseUrl')

describe('Delete a post by ID', () => {
    it('Delete a post by ID', () => {
        cy.request('DELETE', url + '/posts/1')
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})