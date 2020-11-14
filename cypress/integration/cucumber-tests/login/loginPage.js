const URL = 'https://zyro.com/'
const SIGNIN_BUTTON = '[data-qa=header-link-signin]'
const USERNAME_INPUT = '[data-qa=signin-inputfield-emailaddress]'
const PASSWORD_INPUT = '[data-qa=signin-inputfield-password]'
const SUBMIT_BUTTON = '[data-qa=signin-btn-signin]'

class LoginPage{
    static visit() {
        cy.visit(URL)
    }

    static clickSignIn() {
        cy.get(SIGNIN_BUTTON).click()
    }

    static fillUsername(name) {
        cy.get(USERNAME_INPUT).type(name)
    }

    static fillPassword(password) {
        cy.get(PASSWORD_INPUT).type(password)
    }

    static submit() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default LoginPage