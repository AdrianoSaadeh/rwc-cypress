/// <reference types="cypress" />

const faker = require('faker')

context('Cadastro', () => {
    it('Cadastrar um novo usuario', () => {
        cy.visit('register');
        cy.get('input[ng-model*=username]').type('Adriano RWC')
        cy.get('input[ng-model*=email]').type('agilizeiteste@email.com');
        cy.get('input[ng-model*=password]').type(12345678);
        cy.get('button.btn-primary').click();
    });
});
