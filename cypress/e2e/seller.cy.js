describe('Tests', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/create-seller'))
    it.only('fills the from and submits it', () => {

        cy.get('input[name="photo"]').selectFile('cypress/e2e/fixtures/sorvete.jpg', { force: true })

        cy.get(':nth-child(4) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('input[name="commercial_phone"]').as('commercial_phone').type('18988241771')  
        cy.get('input[name="document"]').as('document').type('55.725.462/0001-68')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('nikolassanntoss@icloud.com')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('nikolassanntoss@icloud.com')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00')
        cy.get('input[name="cep"]').as('cep').type('17900-000')
        cy.get('input[name="number"]').as('number').type('1223')
        cy.get('input[name="district"]').as('district').type('lucelia')
        cy.get('input[name="complement"]').as('complement').type('perto do mercado')

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('input[name="address"]').as('address').type('vendramin')

        cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(17) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
 
        cy.get('input[name="agency"]').as('agency').type('1234')
        cy.get('input[name="account_number"]').as('account_number').type('40028922')
        cy.get('input[name="account_digit"]').as('account_digit').type('d')
        cy.get('input[name="account_name"]').as('account_name').type('Pedro Henrique')
        cy.get('input[name="account_document"]').as('account_document').type('697.777.790-70', {force: true} )

        cy.get(':nth-child(19) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('input[name="first_name"]').as('first_name').type('Pedro')
        cy.get('input[name="last_name"]').as('last_name').type('Henrique')
        cy.get('input[name="cpf"]').as('cpf').type('562.397.230-61')
        cy.get('input[name="phone"]').as('phone').type('4523462354')
        cy.get('input[name="password"]').as('password').type('Teste321#')
        cy.get('input[name="confirm_password"]').as('confirm_password').type('Teste321#')
        cy.get('.sc-TRNrF > .MuiButtonBase-root').click()
        cy.url()
        .should('be.equal', 'https://harv.buildbox.one/#/seller/success-registration')

    })
})

describe('EMAIL', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/create-seller'))
    it.only('fills the from and submits it', () => {

        cy.get('input[name="photo"]').selectFile('cypress/e2e/fixtures/sorvete.jpg', { force: true })

        cy.get(':nth-child(4) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('input[name="commercial_phone"]').as('commercial_phone').type('18988241771')  
        cy.get('input[name="document"]').as('document').type('69.839.417/0001-49')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('lukassantosbusnardinho@gmail.com')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('lukassantosbusnardinho@gmail.com')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00')
        cy.get('input[name="cep"]').as('cep').type('17900-000')
        cy.get('input[name="number"]').as('number').type('1223')
        cy.get('input[name="district"]').as('district').type('lucelia')
        cy.get('input[name="complement"]').as('complement').type('perto do mercado')

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('input[name="address"]').as('address').type('vendramin')

        cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(17) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
 
        cy.get('input[name="agency"]').as('agency').type('1234')
        cy.get('input[name="account_number"]').as('account_number').type('40028922')
        cy.get('input[name="account_digit"]').as('account_digit').type('d')
        cy.get('input[name="account_name"]').as('account_name').type('Pedro Henrique')
        cy.get('input[name="account_document"]').as('account_document').type('697.777.790-70', {force: true} )

        cy.get(':nth-child(19) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('input[name="first_name"]').as('first_name').type('Pedro')
        cy.get('input[name="last_name"]').as('last_name').type('Henrique')
        cy.get('input[name="cpf"]').as('cpf').type('470.089.240-46')
        cy.get('input[name="phone"]').as('phone').type('4523462354')
        cy.get('input[name="password"]').as('password').type('Teste321#')
        cy.get('input[name="confirm_password"]').as('confirm_password').type('Teste321#')
        cy.get('.sc-TRNrF > .MuiButtonBase-root').click()

        cy.url()
        .should('be.equal', 'https://harv.buildbox.one/#/seller/success-registration')

    })
})

describe('CNPJ', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/create-seller'))
    it.only('fills the from and submits it', () => {

        cy.get('input[name="photo"]').selectFile('cypress/e2e/fixtures/sorvete.jpg', { force: true })

        cy.get(':nth-child(4) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('input[name="commercial_phone"]').as('commercial_phone').type('18988241771')  
        cy.get('input[name="document"]').as('document').type('67.694.292/0001-80')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('teste@gmail.com')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('teste@gmail.com')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00')
        cy.get('input[name="cep"]').as('cep').type('17900-000')
        cy.get('input[name="number"]').as('number').type('1223')
        cy.get('input[name="district"]').as('district').type('lucelia')
        cy.get('input[name="complement"]').as('complement').type('perto do mercado')

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('input[name="address"]').as('address').type('vendramin')

        cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(17) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
 
        cy.get('input[name="agency"]').as('agency').type('1234')
        cy.get('input[name="account_number"]').as('account_number').type('40028922')
        cy.get('input[name="account_digit"]').as('account_digit').type('d')
        cy.get('input[name="account_name"]').as('account_name').type('Pedro Henrique')
        cy.get('input[name="account_document"]').as('account_document').type('697.777.790-70', {force: true} )

        cy.get(':nth-child(19) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('input[name="first_name"]').as('first_name').type('Pedro')
        cy.get('input[name="last_name"]').as('last_name').type('Henrique')
        cy.get('input[name="cpf"]').as('cpf').type('301.555.190-69')
        cy.get('input[name="phone"]').as('phone').type('4523462354')
        cy.get('input[name="password"]').as('password').type('Teste321#')
        cy.get('input[name="confirm_password"]').as('confirm_password').type('Teste321#')
        cy.get('.sc-TRNrF > .MuiButtonBase-root').click()

        cy.url()
        .should('be.equal', 'https://harv.buildbox.one/#/seller/success-registration')

    })
})

describe('CPF', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/create-seller'))
    it.only('fills the from and submits it', () => {

        cy.get('input[name="photo"]').selectFile('cypress/e2e/fixtures/sorvete.jpg', { force: true })

        cy.get(':nth-child(4) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('input[name="commercial_phone"]').as('commercial_phone').type('18988241771')  
        cy.get('input[name="document"]').as('document').type('80.631.192/0001-73')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('teste2@gmail.com')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('teste2@gmail.com')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00')
        cy.get('input[name="cep"]').as('cep').type('17900-000')
        cy.get('input[name="number"]').as('number').type('1223')
        cy.get('input[name="district"]').as('district').type('lucelia')
        cy.get('input[name="complement"]').as('complement').type('perto do mercado')

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('input[name="address"]').as('address').type('vendramin')

        cy.get(':nth-child(3) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(4) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(17) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
 
        cy.get('input[name="agency"]').as('agency').type('1234')
        cy.get('input[name="account_number"]').as('account_number').type('40028922')
        cy.get('input[name="account_digit"]').as('account_digit').type('d')
        cy.get('input[name="account_name"]').as('account_name').type('Pedro Henrique')
        cy.get('input[name="account_document"]').as('account_document').type('697.777.790-70', {force: true} )

        cy.get(':nth-child(19) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('input[name="first_name"]').as('first_name').type('Pedro')
        cy.get('input[name="last_name"]').as('last_name').type('Henrique')
        cy.get('input[name="cpf"]').as('cpf').type('776.238.480-46')
        cy.get('input[name="phone"]').as('phone').type('4523462354')
        cy.get('input[name="password"]').as('password').type('Teste321#')
        cy.get('input[name="confirm_password"]').as('confirm_password').type('Teste321#')
        cy.get('.sc-TRNrF > .MuiButtonBase-root').click()

        cy.url()
        .should('be.equal', 'https://harv.buildbox.one/#/seller/success-registration')

    })
})
