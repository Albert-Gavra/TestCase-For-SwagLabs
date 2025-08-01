const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor')

// Login First
Given('User is logged in', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').clear()
    cy.get('#user-name').type("standard_user")
    cy.get('#password').clear()
    cy.get('#password').type("secret_sauce")
    cy.get('#login-button').click()
    cy.contains('Sauce Labs Backpack').should('be.visible');
})


// Sorting by name A to Z
Given('User already at homepage', () => {
    cy.url().should('include', 'inventory.html')
})

When('User click burger menu on the top left', () => {
    cy.get('#react-burger-menu-btn').click()
})

Then('User should see other menu on the left', () => {
    cy.get('#logout_sidebar_link').should('be.visible')
})

When('User click on the Logout', () => {
    cy.get('#logout_sidebar_link').click()
})

Then('User should see a login page', () => {
    cy.get('#login-button').should('be.visible').and('have.value', 'Login')
})