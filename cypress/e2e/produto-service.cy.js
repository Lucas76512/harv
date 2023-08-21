describe('Cadastro produto  ', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/create/product'))
        it.only('fills the from and submits it', () => {
           
            cy.get(':nth-child(2) > .sc-idiyUo > .sc-kgflAQ').type('nikolas@buildbox.com.br')
            cy.get(':nth-child(3) > .sc-idiyUo > .sc-kgflAQ').type('Teste321#')
            cy.get('button[label="Entrar"]').click()
            cy.get('button[label="Novo Produto"]').click()
            
            cy.get('input[name="video"]').selectFile('cypress/e2e/fixtures/video.mp4', { force: true })
            cy.get('input[name="image_01"]').selectFile('cypress/e2e/fixtures/sorvete.jpg', { force: true })
            cy.get('input[name="name"]').as('name').type('Sorvete')
            cy.get(':nth-child(9) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="8"]').click();
    
            cy.get('.sc-eGAhfa').as('desciption').type('Sorvete')
            cy.get('input[name="weight"]').as('weight').type('400g')
            cy.get('input[name="quantity"]').as('quantity').type('1')
            cy.get('input[name="price"]').as('price').type('15')
            cy.get('input[name="discount"]').as('discount').type('10')
            cy.get('input[name="start_Date"]').type('2023-08-21')
            cy.get('input[name="end_Date"]').invoke('removeAttr', 'disabled').type('2023-08-24')

            cy.get('.sc-edUIhV > .sc-bjuIDw').as('frete').click()
            cy.get(':nth-child(20) > .sc-kItwNn > .sc-bSakgD > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
            cy.get(':nth-child(20) > .sc-cUEIKg > .sc-bTmccw').click();

            cy.get('.sc-gDeeJ > .MuiButtonBase-root').click();
            
            cy.url().should('be.equal', 'https://harv.buildbox.one/#/seller/products');
            cy.contains('span','Produto Cadastrado!').should('be.visible')


        })

        it.only('Cadastro de produto com entrega programada', () => {
           
            cy.get(':nth-child(2) > .sc-idiyUo > .sc-kgflAQ').type('nikolas@buildbox.com.br')
            cy.get(':nth-child(3) > .sc-idiyUo > .sc-kgflAQ').type('Teste321#')
            cy.get('button[label="Entrar"]').click()
            cy.get('button[label="Novo Produto"]').click()
            
            cy.get('input[name="video"]').selectFile('cypress/e2e/fixtures/video.mp4', { force: true })
            cy.get('input[name="image_01"]').selectFile('cypress/e2e/fixtures/sorvete.jpg', { force: true })
            cy.get('input[name="name"]').as('name').type('Sorvete')
            cy.get(':nth-child(9) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="8"]').click();
    
            cy.get('.sc-eGAhfa').as('desciption').type('Sorvete')
            cy.get('input[name="weight"]').as('weight').type('400g')
            cy.get('input[name="quantity"]').as('quantity').type('1')
            cy.get('input[name="price"]').as('price').type('15')
            cy.get('input[name="discount"]').as('discount').type('10')
            cy.get('input[name="start_Date"]').type('2023-08-21')
            cy.get('input[name="end_Date"]').invoke('removeAttr', 'disabled').type('2023-08-24')

            cy.get(':nth-child(21) > .sc-cUEIKg > .sc-bTmccw').as('entrega programada').click()
            cy.get('.sc-kItwNn > .sc-bSakgD > .haOJaf > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

            cy.get('.sc-kItwNn > .sc-bSakgD > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="12"]').click();

            cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="32"]').click();
            cy.get('.sc-gDeeJ > .MuiButtonBase-root').click();

            cy.url().should('be.equal', 'https://harv.buildbox.one/#/seller/products');
            cy.contains('span','Produto Cadastrado!').should('be.visible')


        })
        it.only('redirecionamento para tela de listagem de produtos ', () => {
           
            cy.get(':nth-child(2) > .sc-idiyUo > .sc-kgflAQ').type('nikolas@buildbox.com.br')
            cy.get(':nth-child(3) > .sc-idiyUo > .sc-kgflAQ').type('Teste321#')
            cy.get('button[label="Entrar"]').click()
            cy.get('button[label="Novo Produto"]').click()
            
            cy.get('input[name="video"]').selectFile('cypress/e2e/fixtures/video.mp4', { force: true })
            cy.get('input[name="image_01"]').selectFile('cypress/e2e/fixtures/sorvete.jpg', { force: true })
            cy.get('input[name="name"]').as('name').type('Sorvete')
            cy.get(':nth-child(9) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="8"]').click();
        
            cy.get('.sc-eGAhfa').as('desciption').type('Sorvete')
            cy.get('input[name="weight"]').as('weight').type('400g')
            cy.get('input[name="quantity"]').as('quantity').type('1')
            cy.get('input[name="price"]').as('price').type('15')
            cy.get('input[name="discount"]').as('discount').type('10')
            cy.get('input[name="start_Date"]').type('2023-08-21')
            cy.get('input[name="end_Date"]').invoke('removeAttr', 'disabled').type('2023-08-24')
            cy.get('.sc-egNfGp > .sc-bSakgD > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="12"]').click();
            
            cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="12"]').click();
            cy.get('.sc-edUIhV > .sc-bjuIDw').as('frete').click()
            cy.get(':nth-child(20) > .sc-kItwNn > .sc-bSakgD > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

            cy.get('.sc-gDeeJ > .MuiButtonBase-root').click();
        
            cy.url()
            .should('be.equal', 'https://harv.buildbox.one/#/seller/products')
      
})

it.only('redirecionamento para tela de listagem de produtos com entrega programada ', () => {
           
    cy.get(':nth-child(2) > .sc-idiyUo > .sc-kgflAQ').type('nikolas@buildbox.com.br')
    cy.get(':nth-child(3) > .sc-idiyUo > .sc-kgflAQ').type('Teste321#')
    cy.get('button[label="Entrar"]').click()
    cy.get('button[label="Novo Produto"]').click()
    
    cy.get('input[name="video"]').selectFile('cypress/e2e/fixtures/video.mp4', { force: true })
    cy.get('input[name="image_01"]').selectFile('cypress/e2e/fixtures/sorvete.jpg', { force: true })
    cy.get('input[name="name"]').as('name').type('Sorvete')
    cy.get(':nth-child(9) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.get('.MuiAutocomplete-popper li[data-option-index="8"]').click();

    cy.get('.sc-eGAhfa').as('desciption').type('Sorvete')
    cy.get('input[name="weight"]').as('weight').type('400g')
    cy.get('input[name="quantity"]').as('quantity').type('1')
    cy.get('input[name="price"]').as('price').type('15')
    cy.get('input[name="discount"]').as('discount').type('10')
    cy.get('input[name="start_Date"]').type('2023-08-21')
    cy.get('input[name="end_Date"]').invoke('removeAttr', 'disabled').type('2023-08-24')
    cy.get('.sc-egNfGp > .sc-bSakgD > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.get('.MuiAutocomplete-popper li[data-option-index="12"]').click();
    
    cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.get('.MuiAutocomplete-popper li[data-option-index="12"]').click();
    cy.get('.sc-edUIhV > .sc-bjuIDw').as('frete').click()
 
    cy.get(':nth-child(21) > .sc-cUEIKg > .sc-bTmccw').as('entrega programada').click()
    cy.get('.sc-kItwNn > .sc-bSakgD > .haOJaf > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();


    cy.get('.sc-kItwNn > .sc-bSakgD > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.get('.MuiAutocomplete-popper li[data-option-index="12"]').click();

    cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
    cy.get('.MuiAutocomplete-popper li[data-option-index="32"]').click();
    cy.get('.sc-gDeeJ > .MuiButtonBase-root').click();

    cy.url()
    .should('be.equal', 'https://harv.buildbox.one/#/seller/products')

})
})

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
             
            cy.contains('span', 'Anúncio/Serviço Cadastrado!').should('be.visible')
    })

    it.only('redirecionamento para tela de listagem de produtos', () => {
            
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
        
        cy.get('button[label="Cadastrar Serviço ou Anúncio"]').click();
         
        cy.url()
        .should('be.equal', 'https://harv.buildbox.one/#/seller/products')
})
})