/// <reference types="Cypress" />
import cadastro from '../support/pages/cadastro'


context('Cadastro', () => {
    it('Cadastro de um novo Usuário', () => {
        cadastro.acessarCadastro();
        cadastro.preencherFormulario();
        cadastro.submeterFormulario();
        cadastro.verificarSeCadastroFoiCriadaComSucesso();
    });
});