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
Given('At the start, there is no badge on cart logo', () => {
    cy.get('.shopping_cart_badge').should('not.exist')
})

When('User click add backpack', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
})

Then('User should see there is number 1 on cart logo', () => {
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1')
})

When('User click add bike light', () => {
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
})

Then('User should see there is number 2 on cart logo', () => {
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '2')
})

When('User click remove backpack', () => {
    cy.get('#remove-sauce-labs-backpack').click()
})

When('remove bike light', () => {
    cy.get('#remove-sauce-labs-bike-light').click()
})

Then('User should see there is no badge on the cart logo', () => {
    cy.get('.shopping_cart_badge').should('not.exist')
})