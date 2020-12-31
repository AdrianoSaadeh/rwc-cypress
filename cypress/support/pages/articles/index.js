const faker = require('faker')

const elements = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {

    acessarFormularioDeNovaPublicacao() {
        cy.get(elements.linkNovaPublicacaso).click();
    }

    preencherFormulario() {
        cy.get(elements.inputTitle).type('Agilizei Title')
        cy.get(elements.inputDescription).type('Cypress')
        cy.get(elements.textAreaContent).type(faker.lorem.paragraph())
        cy.get(elements.inputTags).type('cypress')
    } 

    submeterFormulario() {
        cy.get(elements.buttonSubmit).click();
    }

    verificarSeAPublicacaoFoiCriadComSucesso() {
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArtcilesTitle}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticlesTitleComments) => {
            expect(getArticlesTitleComments.status).to.eq(200)
        })
    }

}

export default new Articles();