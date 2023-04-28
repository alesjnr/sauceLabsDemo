/// <reference types ="cypress"/>
import LoginSauce from '../support/page/login';
import HomePage from '../support/page/homePage';
import Cart from '../support/page/cart';
import { PRODUCTS_ID } from '../fixtures/identifiers';
import { ORDER_PLACED_MESSAGES } from '../fixtures/messages';
import { faker } from '@faker-js/faker';

describe('Purchase scenarios.', () => {
  let userLogin = Cypress.env('login');
  let randomProducts = HomePage.getMultipleRandomProducts(PRODUCTS_ID, 2);

  beforeEach(() => {
    cy.visit('/');
    LoginSauce.loginToTheSystem(
      userLogin.userName,
      userLogin.password
    );
  });

  it('Test case 01 - Buying two random items successfully.', { tags: ['regression', 'smoke'] }, () => {
    randomProducts.forEach((product) => {
      HomePage.addingProductToCart(product);
    });
    HomePage.goToCart();
    Cart.validatingThatThereAreItemsInTheCart();
    Cart.goToCheckout();
    Cart.enteringBuyerInformation(
      faker.name.firstName(),
      faker.name.lastName(),
      faker.address.zipCode()
    );
    Cart.goToTheNextStep();
    Cart.placeOrder();
    Cart.validatingThatTheOrderHasBeenPlaced();
    Cart.validatingTheThanksMessage(ORDER_PLACED_MESSAGES.thanks);
    Cart.validatingTheMessageWithShippingDetails(ORDER_PLACED_MESSAGES.shippingDetails);
  });

  it('Test case 02 - Adding two random products to cart successfully.', { tags: ['regression'] }, () => {
    HomePage.addingMultipleProductsToCart(randomProducts);
    HomePage.goToCart();
    Cart.validatingThatThereAreItemsInTheCart();
  });

  it('Test case 03 - Removing two random products from the cart via the home page successfully.', { tags: ['regression'] }, () => {
    HomePage.addingMultipleProductsToCart(randomProducts);
    HomePage.removingMultipleProductsFromCart(randomProducts);
    HomePage.goToCart();
    Cart.validatingThatThereIsNoItemInTheCart();
  });

  it('Test case 04 - Removing two random products from the cart via the cart screen successfully.', { tags: ['regression'] }, () => {
    HomePage.addingMultipleProductsToCart(randomProducts);
    HomePage.goToCart();
    HomePage.removingMultipleProductsFromCart(randomProducts);
    Cart.validatingThatThereIsNoItemInTheCart();
  });

  it('Test case 05 - Clicking the "continue shopping" button and returning to the home page.', { tags: ['regression'] }, () => {
    HomePage.goToCart();
    Cart.continueShopping();
    HomePage.validatingThatEnteredTheHomePage();
  });

  it('Test case 06 - Clicking the "cancel" button in the buyer information screen and returning to the cart.', { tags: ['regression'] }, () => {
    HomePage.goToCart();
    Cart.goToCheckout();
    Cart.cancelShopping();
    Cart.validatingThatItIsInTheCart();
  });

  it('Test case 07 - Clicking the "cancel" button on the order finish screen and returning to the homepage.', { tags: ['regression'] }, () => {
    HomePage.goToCart();
    Cart.goToCheckout();
    Cart.enteringBuyerInformation(
      faker.name.firstName(),
      faker.name.lastName(),
      faker.address.zipCode()
    );
    Cart.goToTheNextStep();
    Cart.cancelShopping();
    HomePage.validatingThatEnteredTheHomePage();
  });

  it('Test case 08 - Dont enter buyer first name and show required field error.', { tags: ['regression'] }, () => {
    HomePage.goToCart();
    Cart.goToCheckout();
    Cart.enteringBuyerInformation(
      '',
      faker.name.lastName(),
      faker.address.zipCode()
    );
    Cart.goToTheNextStep();
    Cart.validatingErrorMessageAboutRequiredFirstName();
  });

  it('Test case 09 - Dont enter buyer last name and show required field error.', { tags: ['regression'] }, () => {
    HomePage.goToCart();
    Cart.goToCheckout();
    Cart.enteringBuyerInformation(
      faker.name.firstName(),
      '',
      faker.address.zipCode()
    );
    Cart.goToTheNextStep();
    Cart.validatingErrorMessageAboutRequiredLastName();
  });

  it('Test case 10 - Dont enter buyer postal code and show required field error.', { tags: ['regression'] }, () => {
    HomePage.goToCart();
    Cart.goToCheckout();
    Cart.enteringBuyerInformation(
      faker.name.firstName(),
      faker.name.lastName(),
      ''
    );
    Cart.goToTheNextStep();
    Cart.validatingErrorMessageAboutRequiredPostalCode();
  });
});


