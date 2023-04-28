/// <reference types ="cypress"/>
import { ELEMENTS_LOGIN } from './elements';
import { LOGIN_ERROR_MESSAGES } from '../../../fixtures/messages';

class LoginSauce {
  loginToTheSystem(username, password) {
    if (username) {
      cy.get(ELEMENTS_LOGIN.inputUsername).type(username, { log: false });
    }
    if (password) {
      cy.get(ELEMENTS_LOGIN.inputPassword).type(password, { log: false });
    }
    cy.get(ELEMENTS_LOGIN.buttonLogin).click();
  }

  validatingErrorMessageAboutIncorrectUsernameOrPassword() {
    cy.get(ELEMENTS_LOGIN.messageError)
      .should('contain.text', LOGIN_ERROR_MESSAGES.incorrectUsernameOrPassword)
      .should('be.visible');
  }

  validatingErrorMessageAboutRequiredUsername() {
    cy.get(ELEMENTS_LOGIN.messageError)
      .should('contain.text', LOGIN_ERROR_MESSAGES.usernameRequired)
      .should('be.visible');
  }

  validatingErrorMessageAboutRequiredPassword() {
    cy.get(ELEMENTS_LOGIN.messageError)
      .should('contain.text', LOGIN_ERROR_MESSAGES.passwordRequired)
      .should('be.visible');
  }
}

export default new LoginSauce();
