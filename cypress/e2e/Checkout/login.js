import LoginPage from "./login.page";
const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

// Correct Password and user
Given('I open login page', () => {
    LoginPage.visit();
})

When('I submit login with a correct password & user : standard_user', () => {
    LoginPage.fillUsername('standard_user');
    LoginPage.fillPassword('secret_sauce');
    LoginPage.signIn();
})

Then('I should see homepage', () => {
    cy.contains('Sauce Labs Backpack').should('be.visible');
})


// Incorrect Password and Correct User
When('I submit login with a incorrect password & correct user : standard_user', () => {
    LoginPage.fillUsername('standard_user');
    LoginPage.fillPassword('notsecret_sauce');
    LoginPage.signIn();
})

Then('I should see an error', () => {
    cy.get('h3[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
})


// correct Password and incorrect User
When('I submit login with a correct password & incorrect user : a_standard_user', () => {
    LoginPage.fillUsername('a_standard_user');
    LoginPage.fillPassword('secret_sauce');
    LoginPage.signIn();
})


// incorrect password and incorrect user
When('I submit login with a incorrect password & incorrect user : a_standard_user', () => {
    LoginPage.fillUsername('a_standard_user');
    LoginPage.fillPassword('the_secret_sauce');
    LoginPage.signIn();
})


// Empty password and username
When('I submit login with a empty password & empty user', () => {
    LoginPage.signIn();
})

Then('I should see an error for empty username and password', () => {
    cy.get('h3[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
})


// Empty password and filled username
When('I submit login with a empty password & filled user', () => {
    LoginPage.fillUsername('standard_user');
    LoginPage.signIn();
})

Then('I should see an error for filled username and empty password', () => {
    cy.get('h3[data-test="error"]').should('have.text', 'Epic sadface: Password is required');
})


// Filled password and empty username
When('I submit login with a filled password & empty user', () => {
    LoginPage.fillPassword('secret_sauce');
    LoginPage.signIn();
})

Then('I should see an error for empty username and filled password', () => {
    cy.get('h3[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
})