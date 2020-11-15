Cypress.Commands.add('SetcfduidCookie',() => {
    let cookie
    cy.getCookie('__cfduid')
    .should('exist')
    .then((c) => {
    cookie = c
    })
    Cypress.Cookies.preserveOnce('__cfduid', cookie)
})