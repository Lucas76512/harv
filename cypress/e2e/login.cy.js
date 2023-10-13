describe('Login', () => {
  beforeEach(() => cy.visit('https://harv.buildbox.one/#/login'))
    it("login", () => {

    cy.text('nikolas@buildbox.com.br')

    cy.password('Teste321#')

    cy.button('button[label="Entrar"]')

    cy.url()
    .should('be.equal', 'https://harv.buildbox.one/#/seller/products')
  })


    it('login invalido ', () => {
        cy.visit('https://harv.buildbox.one/#/login')
        cy.text('teste@gmail.com')
        cy.password('4534563453')

        cy.button('button[label="Entrar"]')
        
        cy.contains('span','Usuário ou Senha inválido(s).').should('be.visible')
    })

}) 

describe('Redefinir senha', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/reset-password'))
        it('Redefinir senha com email valido', () => {
            cy.text('lucas@buildbox.com.br')
            cy.send('button[label="Enviar"]')
            cy.contains('span','Um link de verificação foi enviado para o e-mail informado').should('be.visible')
        })
        
        it('Redefinir senha com email invalido', () => {
            cy.text('teste@gmail.com')
            cy.send('button[label="Enviar"]')
            cy.contains('span','Usuário não encontrado.').should('be.visible')
            cy.contains('span','Erro ao enviar e-mail').should('be.visible')
        })
})
