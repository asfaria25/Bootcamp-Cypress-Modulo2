const el = require('./elements').ELEMENTS
import Routes from '../../routes'
class login {
    acessarLogin() {
        cy.visit('login');
    }
    preencherFormulario() {
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }
    submeterFormulario() {
        cy.get(el.buttonSubmit).click();
    }
    verificarSeLoginFoiCriadaComSucesso() {
        cy.wait(`@${Routes.as.postLogin}`).then((postloginresponse) => {
            expect(postloginresponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getTags}`).then((gettagsresponse) => {
            expect(gettagsresponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticlesFeed}`).then((getarticlesfeedresponse) => {
            expect(getarticlesfeedresponse.status).to.eq(200)
        })
    }
}

export default new login();