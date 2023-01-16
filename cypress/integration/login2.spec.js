

/// <reference types="cypress"/>

context('funcionalidade Login', ()=> { //declaração do contexto
    beforeEach(() =>{ //Antes de cada teste
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')//será feita a visita no site
    });
    afterEach(()=>{
        cy.screenshot() // vai tirar um print screen da tela depois do teste
    });

    it('Deve fazer login com sucesso', ()=> {// dentro desse bloco será digitado os comandos dos testes
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', ()=>{
        cy.get('#username').type('_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. ')
    })
    it('Deve exibir uma mensagem de erro ao inserir senha inválida', ()=>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click() 
        cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})