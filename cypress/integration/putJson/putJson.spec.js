/// <reference types="cypress"/>

const url = Cypress.config('baseUrl')

describe('Update post', () => {
    it('Update post', () => {
        cy.request('PUT', url + '/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                title: 'Test updated',
                body: 'Test updated',
                userId: 1
            }),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})