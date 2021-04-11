/// <reference types="Cypress" />
import articles from '../support/pages/articles'

context('Articles', () => {
    beforeEach(() => {
        //Preparação

        cy.backgroundlogin();
        articles.acessarFormularioDeNovaPublicacao();
    })
    it('Criar um novo artigo', () => {
        //acão
        articles.preencherFormulario();
        articles.SubmeterPublicacao();
        //verificação
        articles.verificarSeAPublicacaoFoiCriadaComSucesso();
    });
});