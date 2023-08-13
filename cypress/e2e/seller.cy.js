describe('Tests', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/create-seller'))
    it.only('fills the from and submits it', () => {

        cy.get('input[name="photo"]').selectFile('cypress/e2e/fixtures/sorvete.jpg', { force: true })

        cy.get(':nth-child(4) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('input[name="commercial_phone"]').as('commercial_phone').type('18988241771')  
        cy.get('input[name="document"]').as('document').type('29.013.277/0001-30')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('nikolassanntoss+1@icloud.com')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('nikolassanntoss+1@icloud.com')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00')
        cy.get('input[name="cep"]').as('cep').type('13049-024')
        cy.get('input[name="number"]').as('number').type('1223')
        cy.get('input[name="district"]').as('district').type('Jardim Monte Cristo')
        cy.get('input[name="complement"]').as('complement').type('casa')

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

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
        cy.get('input[name="cpf"]').as('cpf').type('920.244.500-16')
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
        cy.get('input[name="document"]').as('document').type('53.567.598/0001-61')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('nikolassanntoss+1@icloud.com')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('nikolassanntoss+1@icloud.com')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00')
        cy.get('input[name="cep"]').as('cep').type('13049-024')
        cy.get('input[name="number"]').as('number').type('1223')
        cy.get('input[name="district"]').as('district').type('Jardim Monte Cristo')
        cy.get('input[name="complement"]').as('complement').type('casa')

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

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
        cy.get('input[name="cpf"]').as('cpf').type('769.127.390-83')
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
        cy.get('input[name="document"]').as('document').type('95.351.525/0001-88')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('nikolassanntoss+2@icloud.com')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('nikolassanntoss+2@icloud.com')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00')
        cy.get('input[name="cep"]').as('cep').type('13049-024')
        cy.get('input[name="number"]').as('number').type('1223')
        cy.get('input[name="district"]').as('district').type('Jardim Monte Cristo')
        cy.get('input[name="complement"]').as('complement').type('casa')

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

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
        cy.get('input[name="cpf"]').as('cpf').type('769.127.390-83')
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
        cy.get('input[name="document"]').as('document').type('95.351.525/0001-88')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('nikolassanntoss+3@icloud.com')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('nikolassanntoss+3@icloud.com')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00')
        cy.get('input[name="cep"]').as('cep').type('13049-024')
        cy.get('input[name="number"]').as('number').type('1223')
        cy.get('input[name="district"]').as('district').type('Jardim Monte Cristo')
        cy.get('input[name="complement"]').as('complement').type('casa')

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

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
        cy.get('input[name="cpf"]').as('cpf').type('409.181.730-00')
        cy.get('input[name="phone"]').as('phone').type('4523462354')
        cy.get('input[name="password"]').as('password').type('Teste321#')
        cy.get('input[name="confirm_password"]').as('confirm_password').type('Teste321#')
        cy.get('.sc-TRNrF > .MuiButtonBase-root').click()
        cy.url()
        .should('be.equal', 'https://harv.buildbox.one/#/seller/success-registration')

    })
})

describe('Obrigatoriedade do Campo ', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/create-seller'))
    it.only('fills the from and submits it', () => {

        cy.get('input[name="photo"]').selectFile('cypress/e2e/fixtures/sorvete.jpg', { force: true })

        cy.get(':nth-child(4) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('input[name="commercial_phone"]').as('commercial_phone').type('18988241771')  
        cy.get('input[name="document"]').as('document').type('95.351.525/0001-88')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('nikolassanntoss+3@icloud.com')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('nikolassanntoss+3@icloud.com')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00').clear()
        cy.get('input[name="cep"]').as('cep').type('13049-024')
        cy.get('input[name="number"]').as('number').type('1223')
        cy.get('input[name="district"]').as('district').type('Jardim Monte Cristo').clear()
        cy.get('input[name="complement"]').as('complement').type('casa')

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(1) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get(':nth-child(2) > .sc-ehmTmK > .sc-gFGZVQ > :nth-child(2) > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

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
        cy.get('input[name="cpf"]').as('cpf').type('409.181.730-00')
        cy.get('input[name="phone"]').as('phone').type('4523462354')
        cy.get('input[name="password"]').as('password').type('Teste321#')
        cy.get('input[name="confirm_password"]').as('confirm_password').type('Teste321#')
        cy.get('.sc-TRNrF > .MuiButtonBase-root').click()
        cy.url()
        .should('be.equal', 'https://harv.buildbox.one/#/seller/success-registration')

    })
})