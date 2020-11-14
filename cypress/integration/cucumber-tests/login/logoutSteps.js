import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I verify that I can see user profile icon', () => {
    cy.get('[data-qa=popupwindow-icon-userprofile]').should('be.visible')
})

When('I click Sign Out button', () => {
    cy.get('[data-qa=popupwindow-link-signout]').click({ force: true })
})


Then('I should see Sign In button', () => {
    cy.get('[data-qa=header-link-signin]').should('be.visible')
})


