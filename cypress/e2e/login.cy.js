describe('Login', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/login'))
        it('Login com email valido', () => {
         cy.get('input[name="email"]').as('email').type('nikolas@buildbox.com.br')
         cy.get('input[name="password"]').as('password').type('Teste321#')

         cy.get('button[label="Entrar"]').click()

         cy.url()
         .should('be.equal', 'https://harv.buildbox.one/#/seller/products')

         
    })

    
    it('Login com email invalido', () => {
        cy.get('input[name="email"]').as('email').type('teste@gmail.com')
        cy.get('input[name="password"]').as('password').type('4534563453')

        cy.get('button[label="Entrar"]').click()
        cy.contains('span','Usuário ou Senha inválido(s).').should('be.visible')
    })
})


describe('Redefinir senha', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/login'))
        it('Redefinir senha com email valido', () => {
            cy.get('.sc-iwoqQi').click()
            cy.get('input[name="email"]').as('email').type('lucas@buildbox.com.br')
            cy.get('button[label="Enviar"]').click()
            cy.contains('span','Um link de verificação foi enviado para o e-mail informado').should('be.visible')
        })
        it('Redefinir senha com email invalido', () => {
            cy.get('.sc-iwoqQi').click()
            cy.get('input[name="email"]').as('email').type('teste@gmail.com')
            cy.get('button[label="Enviar"]').click()
            cy.contains('span','Usuário não encontrado.').should('be.visible')
            cy.contains('span','Erro ao enviar e-mail').should('be.visible')
        })
})