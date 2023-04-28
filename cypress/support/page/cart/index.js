/// <reference types ="cypress"/>
import { ELEMENTS_CART } from './elements';
import { BUYER_INFORMATION_ERROR_MESSAGES } from '../../../fixtures/messages';

class Cart {
  goToCheckout() {
    cy.get(ELEMENTS_CART.buttonCheckout).click();
  }

  goToTheNextStep() {
    cy.get(ELEMENTS_CART.buttonContinue).click();
  }

  continueShopping() {
    cy.get(ELEMENTS_CART.buttonContinueShopping).click();
  }

  cancelShopping() {
    cy.get(ELEMENTS_CART.buttonCancel).click();
  }

  enteringBuyerInformation(firstName, lastName, postalCode) {
    if (firstName) {
      cy.get(ELEMENTS_CART.inputFirstName).type(firstName);
    }
    if (lastName) {
      cy.get(ELEMENTS_CART.inputLastName).type(lastName);
    }
    if (postalCode) {
      cy.get(ELEMENTS_CART.inputPostalCode).type(postalCode);
    }
  }

  placeOrder() {
    cy.get(ELEMENTS_CART.buttonFinish).click();
  }

  validatingThatTheOrderHasBeenPlaced() {
    cy.get(ELEMENTS_CART.divOrderPlaced).should('be.visible');
  }

  validatingTheThanksMessage(message) {
    cy.get(ELEMENTS_CART.messageThanks)
      .should('contain.text', message)
      .should('be.visible');
  }

  validatingTheMessageWithShippingDetails(message) {
    cy.get(ELEMENTS_CART.messageShippingDetails)
      .should('contain.text', message)
      .should('be.visible');
  }

  validatingThatThereAreItemsInTheCart() {
    cy.get(ELEMENTS_CART.itemInCart).should('be.visible');
  }

  validatingThatThereIsNoItemInTheCart() {
    cy.get(ELEMENTS_CART.itemInCart).should('not.exist');
  }

  validatingThatItIsInTheCart() {
    cy.get(ELEMENTS_CART.divItemsInCart).should('be.visible');
  }

  validatingErrorMessageAboutRequiredFirstName() {
    cy.get(ELEMENTS_CART.messageError)
      .should('contain.text', BUYER_INFORMATION_ERROR_MESSAGES.firstNameRequired)
      .should('be.visible');
  }

  validatingErrorMessageAboutRequiredLastName() {
    cy.get(ELEMENTS_CART.messageError)
      .should('contain.text', BUYER_INFORMATION_ERROR_MESSAGES.lastNameRequired)
      .should('be.visible');
  }

  validatingErrorMessageAboutRequiredPostalCode() {
    cy.get(ELEMENTS_CART.messageError)
      .should('contain.text', BUYER_INFORMATION_ERROR_MESSAGES.postalCodeRequired)
      .should('be.visible');
  }
}

export default new Cart();
