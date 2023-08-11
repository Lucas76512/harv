import 'cypress-file-upload' 

describe('Cadastro de serviço', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/login'))
        it.only('fills the from and submits it', () => {
            
            cy.get(':nth-child(2) > .sc-idiyUo > .sc-kgflAQ').type('nikolas@buildbox.com.br')
            cy.get(':nth-child(3) > .sc-idiyUo > .sc-kgflAQ').type('Teste321#')
            cy.get('button[label="Entrar"]').click()
            cy.get('button[label="Novo Produto"]').click()
            cy.get('.eRTQTn').click()

            cy.get('input[name="video"]').selectFile('cypress/e2e/fixtures/video.mp4', { force: true })
            cy.get('input[name="image_01"]').selectFile('cypress/e2e/fixtures/sorvete.jpg', { force: true })

            cy.get('input[name="name"]').as('name').type('Lucas dos Santos')   
            cy.get('.MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="8"]').click();
            cy.get('textarea[name="description"]').as('descrip').type('Teste')
            
            cy.get('button[label="Cadastrar Serviço ou Anúncio"]').click()

            cy.url()
            .should('be.equal', 'https://harv.buildbox.one/#/seller/products')
    })
})