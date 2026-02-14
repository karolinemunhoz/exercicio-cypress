/// <reference types="cypress" />

describe('Testes para adicionar, alterar e remover contato', () => {

  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve adicionar um contato', () => {
    cy.get('input[type="text"]').type('Karol Teste')
    cy.get('input[type="email"]').type('karolteste@gmail.com')
    cy.get('input[type="tel"]').type('21999999999')
    cy.get('.adicionar').click()

    cy.contains('Karol Teste').should('exist')
  })

  it('Deve alterar um contato', () => {
    cy.get('.edit').first().click()

    cy.get('input[type="text"]').clear().type('Contato Editado')
    cy.get('input[type="email"]').clear().type('editado@gmail.com')
    cy.get('input[type="tel"]').clear().type('21888888888')

    cy.get('.alterar').click()

    cy.contains('Contato Editado').should('exist')
  })

  it('Deve remover um contato', () => {
    cy.get('.delete').first().click()

    cy.get('.contato').should('exist')
  })

})