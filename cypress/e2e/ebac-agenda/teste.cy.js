/// <reference types="cypress" />

describe('Testes para adicionar, alterar e remover contato', () => {

    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve adicionar um contato', () => {
        cy.get('input[type="text"]').type('Karoline Munhoz')
        cy.get('input[type="email"]').type('karoline@gmail.com')
        cy.get('input[type="tel"]').type('21999999999')
        cy.get('.adicionar').click()

        cy.get('.contato').should('have.length.greaterThan', 0)
    })

    it('Deve alterar um contato', () => {
        cy.get('.edit').first().click()

        cy.get('input[type="text"]').clear().type('Maria da Silva')
        cy.get('input[type="email"]').clear().type('maria@gmail.com')
        cy.get('input[type="tel"]').clear().type('21988888888')
        cy.get('.alterar').click()

        cy.get('.contato').should('exist')
    })

    it('Deve remover um contato', () => {
        cy.get('.delete').first().click()

        cy.get('.contato').should('exist')
    })

})
