describe('Cadastro produto  ', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/create/product'))
        it.only('fills the from and submits it', () => {
            cy.get(':nth-child(2) > .sc-idiyUo > .sc-kgflAQ').type('nikolas@buildbox.com.br')
            cy.get(':nth-child(3) > .sc-idiyUo > .sc-kgflAQ').type('Teste321#')
            cy.get('button[label="Entrar"]').click()
            cy.get('button[label="Novo Produto"]').click()
            cy.get('input[name="name"]').as('name').type('Sorvete')
            cy.get(':nth-child(9) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="8"]').click();
    
            cy.get('.sc-eGAhfa').as('desciption').type('Sorvete')
            cy.get('input[name="weight"]').as('weight').type('400g')
            cy.get('input[name="quantity"]').as('quantity').type('1')
            cy.get('input[name="price"]').as('price').type('15')
            cy.get('input[name="discount"]').as('discount').type('10')
            cy.get('.sc-edUIhV > .sc-bjuIDw').as('frete').click()
            cy.get(':nth-child(20) > .sc-kItwNn > .sc-bSakgD > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
            cy.get(':nth-child(21) > .sc-cUEIKg > .sc-bTmccw').as('entrega programada').click()
            cy.get('.sc-kItwNn > .sc-bSakgD > .haOJaf > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

            cy.get('.sc-kItwNn > .sc-bSakgD > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="12"]').click();

            cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
            cy.get('.MuiAutocomplete-popper li[data-option-index="32"]').click();
            cy.get(':nth-child(20) > .sc-cUEIKg > .sc-bTmccw').click()
        })
})