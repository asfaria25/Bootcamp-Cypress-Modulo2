const faker = require("faker");
const el = require('./elements').ELEMENTS

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
}

export default new Articles();