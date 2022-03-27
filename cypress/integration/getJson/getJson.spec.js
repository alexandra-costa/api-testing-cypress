/// <reference types="cypress"/>

const url = Cypress.config('baseUrl')

describe('Get all the posts', () => {
    it('Get all the posts', () => {
        cy.request('GET', url + '/posts')
        .then((response) => {
           expect(response.status).to.eq(200) 
        })
    })
})

describe('Get a specific post', () => {
    it('Get a specific post by id', () => {
        for (let id = 1; id <= 100; id++) {
        cy.request('GET', url + `/posts/${id}`)
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(id) // check id
            expect(response.body.title).to.be.a('string') // check title
        })
        }
    })
})

describe('Get a specific post and it commets', () => {
    it('Get a specific post by id and it commets', () => {
        for(let id = 1; id <= 5; id++) {
        cy.request('GET', url + `/posts/${id}/comments`)
        .then((response) => {
            expect(response.status).to.eq(200) 
        })
        }
    })
})

describe('Get a comment by it ID', () => {
    it('Get a comment by it ID', () => {
        for (let id = 1; id <= 5; id++) {
        cy.request('GET', url + `/comments?postId=${id}`)
        .then((response) => {
            expect(response.status).to.eq(200) 
        })
        }
    })
})

