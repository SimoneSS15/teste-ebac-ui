/// <reference types="cypress"/>
//var faker = require('faker'); // adicionando o faker que foi instalado
//var faker =  require('@faker-js/faker')
var faker = require('faker-br');

describe('Funcionalidade Pré cadastro', () => {//descrição da funcionalidade
   beforeEach(() =>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   });
   
    it('Deve completar o pré cadastro com sucesso', () => { // cenário
        cy.get('#reg_email').type(faker.internet.email())// cria um e-mail fake
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()// link detalhes da compra
        cy.get('#account_first_name').type(faker.name.firstName())// gera um nome
        cy.get('#account_last_name').type(faker.name.lastName())// gera um sobre nome
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')// teste que comprova a modificação dos dados
    });
    
});