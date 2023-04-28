/// <reference types ="cypress"/>
import LoginSauce from '../support/page/login';
import HomePage from '../support/page/homePage';
import { faker } from '@faker-js/faker';

describe('Login scenarios.', () => {
  let userLogin = Cypress.env('login');

  beforeEach(() => {
    cy.visit('/');
  });

  it('Test case 01 - Login successfully with valid username and password.', { tags: ['regression', 'smoke'] }, () => {
    LoginSauce.loginToTheSystem(
      userLogin.userName,
      userLogin.password
    );
    HomePage.validatingThatEnteredTheHomePage();
  });

  it('Test case 02 - Unsuccessful login with invalid username.', { tags: ['regression'] }, () => {
    LoginSauce.loginToTheSystem(
      faker.internet.userName(),
      userLogin.password
    );
    LoginSauce.validatingErrorMessageAboutIncorrectUsernameOrPassword();
  });

  it('Test case 03 - Unsuccessful login with invalid password.', { tags: ['regression'] }, () => {
    LoginSauce.loginToTheSystem(
      userLogin.userName,
      faker.internet.password()
    );
    LoginSauce.validatingErrorMessageAboutIncorrectUsernameOrPassword();
  });

  it('Test case 04 - Unsuccessful login missing username.', { tags: ['regression'] }, () => {
    LoginSauce.loginToTheSystem(
      '',
      userLogin.password
    );
    LoginSauce.validatingErrorMessageAboutRequiredUsername();
  });

  it('Test case 05 - Unsuccessful login missing password.', { tags: ['regression'] }, () => {
    LoginSauce.loginToTheSystem(
      userLogin.userName,
      ''
    );
    LoginSauce.validatingErrorMessageAboutRequiredPassword();
  });
})
