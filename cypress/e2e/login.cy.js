

describe('Redefinir senha', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/reset-password'))
        it.only('fills the from and submits it', () => {
            cy.get('input[name="email"]').as('email').type('lucas@buildbox.com.br')

            cy.get('button[label="Enviar"]').click()

        })
})

describe('Redefinir senha invalida', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/reset-password'))
        it.only('fills the from and submits it', () => {
            cy.get('input[name="email"]').as('email').type('teste.com.br')

            cy.get('button[label="Enviar"]').click()

        })
})