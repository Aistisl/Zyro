import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'



Given('I open login page', () => {
    LoginPage.visit()
    LoginPage.clickSignIn()
    cy.getCookie('__cfduid')
    cy.getCookie('auth.strategy')
    cy.getCookie('expowQ')
    cy.getCookie('expk0A')
})

When('I fill username with {string}', username => {
    LoginPage.fillUsername(username)
})

When('I fill password with {string}', password => {
    LoginPage.fillPassword(password)
})

When('I click on submit button', () => {
    LoginPage.submit()
})

Then('I should see user profile icon', () => {
    cy.get('[data-qa=popupwindow-icon-userprofile]').should('be.visible')
})

