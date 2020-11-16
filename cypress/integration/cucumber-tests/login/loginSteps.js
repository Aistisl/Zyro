import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'



Given('I open login page', () => {
    LoginPage.visit()
    cy.SetcfduidCookie()
    cy.wait(10000)
    LoginPage.clickSignIn()
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

