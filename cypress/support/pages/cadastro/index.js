const faker = require('faker');
const el = require('./elements').ELEMENTS
import Routes from '../../routes'
class cadastro {
    acessarCadastro() {
        cy.visit('register');
    }
    preencherFormulario() {
        cy.get(el.inputUsername).type(faker.name.firstName() + ' ' + faker.name.lastName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type(faker.internet.password());
    }
    submeterFormulario() {
        cy.get(el.buttonSubmit).click();
    }
    verificarSeCadastroFoiCriadaComSucesso() {
        cy.wait(`@${Routes.as.postUsers}`).then((postusersresponse) => {
            expect(postusersresponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getTags}`).then((gettagsresponse) => {
            expect(gettagsresponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesFeed}`).then((getarticlesfeedresponse) => {
            expect(getarticlesfeedresponse.status).to.eq(200)
        })
    }

}

export default new cadastro();