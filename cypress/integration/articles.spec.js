/// <reference types="cypress" />

import articles from '../support/pages/articles'

context('Publicacao', () => {

    beforeEach(() => {

        cy.backgoundLogin()
        articles.acessarFormularioDeNovaPublicacao()
    });


    it('Criar um novo artigo', () => {
        articles.preencherFormulario()
        articles.submeterFormulario()
        articles.verificarSeAPublicacaoFoiCriadComSucesso()
    });
});