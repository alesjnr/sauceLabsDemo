/// <reference types ="cypress"/>
import { ELEMENTS_HOME_PAGE } from './elements';

class HomePage {
  addingProductToCart(productID) {
    cy.get(ELEMENTS_HOME_PAGE.buttonAddProductToCart(productID)).click();
  }

  removingProductFromCart(productID) {
    cy.get(ELEMENTS_HOME_PAGE.buttonRemoveProductFromCart(productID))
      .click();
  }

  goToCart() {
    cy.get(ELEMENTS_HOME_PAGE.buttonGoToCart).click();
  }

  getMultipleRandomProducts(arr, num) {
    const products = [...arr].sort(() => 0.5 - Math.random());
    return products.slice(0, num);
  }

  addingMultipleProductsToCart(productsID) {
    productsID.forEach((product) => {
      this.addingProductToCart(product);
      this.validatingThatTheProductHasBeenAddedToTheCart(product);
    });
    this.validatingCountOfItemsInCart(productsID.length);
  }

  removingMultipleProductsFromCart(productsID) {
    productsID.forEach((product) => {
      this.removingProductFromCart(product);
      this.validatingThatThereIsNoLongerARemoveProductButton(product);
    });
    this.validatingThatThereIsNoCounterOfItemsInTheCart();
  }

  validatingThatEnteredTheHomePage() {
    cy.get(ELEMENTS_HOME_PAGE.divStoreInventory).should('be.visible');
  }

  validatingThatTheProductHasBeenAddedToTheCart(productID) {
    cy.get(ELEMENTS_HOME_PAGE.buttonRemoveProductFromCart(productID))
      .should('be.visible');
  }

  validatingCountOfItemsInCart(count) {
    cy.get(ELEMENTS_HOME_PAGE.spanCartItemsCount)
      .should('contain.text', count)
      .should('be.visible');
  }

  validatingThatTheProductHasBeenAddedToTheCart(productID) {
    cy.get(ELEMENTS_HOME_PAGE.buttonRemoveProductFromCart(productID)).should('be.visible');
  }

  validatingThatThereIsNoLongerARemoveProductButton(productID) {
    cy.get(ELEMENTS_HOME_PAGE.buttonRemoveProductFromCart(productID)).should('not.exist');
  }

  validatingThatThereIsNoCounterOfItemsInTheCart() {
    cy.get(ELEMENTS_HOME_PAGE.spanCartItemsCount).should('not.exist');
  }
}

export default new HomePage();
