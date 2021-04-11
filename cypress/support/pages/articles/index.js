/// <reference types="cypress" />
const faker = require("faker");
const el = require('./elements').ELEMENTS
import Routes from '../../routes'

class Articles {

    acessarFormularioDeNovaPublicacao() {
        //Acessar Artigo
        cy.get(el.linkNovaPublicacao).click();
    }

    preencherFormulario() {
        // Preencher formulario do artigo
        cy.get(el.inputTitle).type("Agilizei Title");
        cy.get(el.inputDescription).type("Cypress");
        cy.get(el.textAreaContente).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type("Cypress");
    }

    SubmeterPublicacao() {
        //Submeter Artigo

        cy.get(el.buttonSubmit).click();

    }
    verificarSeAPublicacaoFoiCriadaComSucesso() {
        cy.wait(`@${Routes.as.postarticles}`).then((postarticlesresponse) => {
            expect(postarticlesresponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getarticlesTitle}`).then((getarticlesTitleresponse) => {
            expect(getarticlesTitleresponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getarticlesTitleComments}`).then((getarticlesTitleCommentsresponse) => {
            expect(getarticlesTitleCommentsresponse.status).to.eq(200)
        })
    }
}

export default new Articles();