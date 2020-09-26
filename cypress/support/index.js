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

const { default: routes } = require("./routes")

// ***********************************************************
Cypress.Commands.add('backgoundLogin', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body: {
            User: {
                email: 'agilizeiteste@email.com',
                password: '12345678'
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

import Routes from '../support/routes'

before(() => {
    Routes.init()
})