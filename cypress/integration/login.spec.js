/// <reference types="Cypress" />
import login from '../support/pages/login'

context('Login', () => {
    it('Realizar login com Sucesso', () => {
        login.acessarLogin();
        login.preencherFormulario();
        login.submeterFormulario();
        login.verificarSeLoginFoiCriadaComSucesso();

    });
});