/// <reference types="cypress"/>

//const { should } = require("chai");


describe('Funcionalidade página de produtos', () => {
    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um peoduto da lista', ()=>{
        cy.get('[class="product-block grid"]')
        //.first() //seleciona o primeiro produto
        //.last() // seleciona o segundo
       // .eq(2) // seleciona o terceiro produto
      .contains('Abominable Hoodie')
      .click()
    });
    it.only('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()// produto
            cy.get('.button-variable-item-M').click()// tamanho
            cy.get('.button-variable-item-Green').click()// cor
            cy.get('.input-text').clear().type(quantidade)// quantidade
            cy.get('.single_add_to_cart_button').click()// botão adicionar
            cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)// validação do carrinho
            cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho')// outra validação do carrinho
    });

});


