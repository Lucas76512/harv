describe('Tests', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/create-seller'))
    it.only('fills the from and submits it', () => {
        cy.get(':nth-child(4) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('input[name="commercial_phone"]').as('commercial_phone').type('18988241771')  
        cy.get('input[name="document"]').as('document').type('67.694.292/0001-80')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('lukassantosbusnardinho@gmail.com')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('lukassantosbusnardinho@gmail.com')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00')
        cy.get('input[name="cep"]').as('cep').type('17900-000')
        cy.get('input[name="address"]').as('address').type('vendramin')
        cy.get('input[name="number"]').as('number').type('1223')
        cy.get('input[name="district"]').as('district').type('lucelia')
        cy.get('input[name="complement"]').as('complement').type('perto do mercado')
        cy.get('.fDxJQW > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="25"]').click();

        cy.get('.fDxZMA > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="159"]').click();

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
        cy.get('input[name="cpf"]').as('cpf').type('862.948.450-09')
        cy.get('input[name="phone"]').as('phone').type('4523462354')
        cy.get('input[name="password"]').as('password').type('Teste321#')
        cy.get('input[name="confirm_password"]').as('confirm_password').type('Teste321#')
        cy.get('.sc-TRNrF > .MuiButtonBase-root').click()
    })
})

describe('Tests', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/create-seller'))
    it.only('fills the from and submits it', () => {
        cy.get(':nth-child(4) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('input[name="commercial_phone"]').as('commercial_phone').type('123456789')  
        cy.get('input[name="document"]').as('document').type('78.646.108/0001-43')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('teste@gmail.com.br')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('teste@gmail.com.br')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00')
        cy.get('input[name="cep"]').as('cep').type('13049024')
        cy.get('input[name="address"]').as('address').type('Rua José Pereira Santos')
        cy.get('input[name="number"]').as('number').type('7439')
        cy.get('input[name="district"]').as('district').type('Jardim Monte Cristo/Parque Oziellucelia')
        cy.get('input[name="complement"]').as('complement').type('casa')
        cy.get('.fDxJQW > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="25"]').click();

        cy.get('.fDxZMA > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="139"]').click();

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
        cy.get('input[name="account_number"]').as('account_number').type('345345345')
        cy.get('input[name="account_digit"]').as('account_digit').type('5')
        cy.get('input[name="account_name"]').as('account_name').type('Nikolas Santos')
        cy.get('input[name="account_document"]').as('account_document').type('862.948.450-09', {force: true} )

        cy.get(':nth-child(19) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('input[name="first_name"]').as('first_name').type('Nikolas')
        cy.get('input[name="last_name"]').as('last_name').type('Santos')
        cy.get('input[name="cpf"]').as('cpf').type('862.948.450-09')
        cy.get('input[name="phone"]').as('phone').type('58347592982')
        cy.get('input[name="password"]').as('password').type('Teste321#')
        cy.get('input[name="confirm_password"]').as('confirm_password').type('Teste321#')
        cy.get('.sc-TRNrF > .MuiButtonBase-root').click()
    })
})

describe('Tests', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/create-seller'))
    it.only('fills the from and submits it', () => {
        cy.get(':nth-child(4) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('input[name="commercial_phone"]').as('commercial_phone').type('555555555')  
        cy.get('input[name="document"]').as('document').type('67.694.292/0001-80')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('teste1@gmail.com.br')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('teste1@gmail.com.br')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00')
        cy.get('input[name="cep"]').as('cep').type('13406-306')
        cy.get('input[name="address"]').as('address').type('vendramim')
        cy.get('input[name="number"]').as('number').type('7439')
        cy.get('input[name="district"]').as('district').type('lucelia')
        cy.get('input[name="complement"]').as('complement').type('casa')
        cy.get('.fDxJQW > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="25"]').click();

        cy.get('.fDxZMA > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="139"]').click();

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
 
        cy.get('input[name="agency"]').as('agency').type('6437374987')
        cy.get('input[name="account_number"]').as('account_number').type('97987879798')
        cy.get('input[name="account_digit"]').as('account_digit').type('5')
        cy.get('input[name="account_name"]').as('account_name').type('Wilson')
        cy.get('input[name="account_document"]').as('account_document').type('862.948.450-09', {force: true} )

        cy.get(':nth-child(19) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();
        cy.get('input[name="first_name"]').as('first_name').type('Nikolas')
        cy.get('input[name="last_name"]').as('last_name').type('Santos')
        cy.get('input[name="cpf"]').as('cpf').type('862.948.450-09')
        cy.get('input[name="phone"]').as('phone').type('58347592982')
        cy.get('input[name="password"]').as('password').type('Teste321#')
        cy.get('input[name="confirm_password"]').as('confirm_password').type('Teste321#')
        cy.get('.sc-TRNrF > .MuiButtonBase-root').click()
    })
})

describe('Tests', () => {
    beforeEach(() => cy.visit('https://harv.buildbox.one/#/seller/create-seller'))
    it.only('fills the from and submits it', () => {
        cy.get(':nth-child(4) > .sc-jQHtVU > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click();

        cy.get('input[name="commercial_phone"]').as('commercial_phone').type('18988241771')  
        cy.get('input[name="document"]').as('document').type('67.694.292/0001-80')  
        cy.get('input[name="corporate_name"]').as('corporate_name').type('Exemplo Brasil LTDA', {force: true})
        cy.get('input[name="email"]').as('email').type('lukassantosbusnardinho@gmail.com')
        cy.get('input[name="confirm_email"]').as('confirm_email').type('lukassantosbusnardinho@gmail.com')
        cy.get('input[name="store_name"]').as('store_name').type('teste')
        cy.get('textarea[name="store_bio"]').type('Segunda a Sexta 05:00 até 17:00')
        cy.get('input[name="cep"]').as('cep').type('17900-000')
        cy.get('input[name="address"]').as('address').type('vendramin')
        cy.get('input[name="number"]').as('number').type('1223')
        cy.get('input[name="district"]').as('district').type('lucelia')
        cy.get('input[name="complement"]').as('complement').type('perto do mercado')
        cy.get('.fDxJQW > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="25"]').click();

        cy.get('.fDxZMA > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiAutocomplete-popper li[data-option-index="139"]').click();

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
        cy.get('input[name="cpf"]').as('cpf').type('862.948.450-09')
        cy.get('input[name="phone"]').as('phone').type('4523462354')
        cy.get('input[name="password"]').as('password').type('Teste321#')
        cy.get('input[name="confirm_password"]').as('confirm_password').type('Teste321#')
        cy.get('.sc-TRNrF > .MuiButtonBase-root').click()
    })
})
