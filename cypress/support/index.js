// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

Cypress.Commands.add('backgroundlogin', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body: {
            user: {

                email: `${Cypress.config().user.email}`,
                password: `${Cypress.config().user.password}`

            }
        }
    }).then((loginResponse) => {
        console.log(loginResponse.body)
        cy.log(loginResponse.body.user.token)
        cy.visit('/', {
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
            }
        })
    })
})
import Routes from './routes'
before(() => {
    Routes.init();
})