import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

// Login First
Given('User open login page first', () => {
    cy.visit('https://www.saucedemo.com')
})

When('User do input login', () => {
    cy.get('#user-name').clear()
    cy.get('#user-name').type("standard_user")
    cy.get('#password').clear()
    cy.get('#password').type("secret_sauce")
})

When('click submit button', () => {
    cy.get('#login-button').click()
})

Then('User should see a homepage', () => {
    cy.contains('Sauce Labs Backpack').should('be.visible');
})


// Order backpack and go to cart page
When('User add to cart for backpack', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
})

When('click shopping cart', () => {
    cy.get('.shopping_cart_link').click();
})

Then('User should see cart list', () => {
   cy.url().should('include', 'cart.html')
})


// Click checkout and move to form information page
When('User click checkout button', () => {
    cy.get('#checkout').click();
})

Then('User will see your information form page', () => {
    cy.url().should('include', 'checkout-step-one.html')
})

// Fill out form and go to overview page
When('User fill out the form', () => {
    cy.get('#first-name').clear()
    cy.get('#first-name').type("Budi")

    cy.get('#last-name').clear()
    cy.get('#last-name').type("Anggrek")

    cy.get('#postal-code').clear()
    cy.get('#postal-code').type("52312")
})

When('Click continue button', () => {
    cy.get('input[name="continue"]').click()
})

Then('User will see checkout overview page', () => {
    cy.url().should('include', 'checkout-step-two.html')
})

// Click Finish and go to checkout complete page
When('User click finish button', () => {
    cy.get('#finish').click()
})

Then('User will see checkout complete page', () => {
    cy.url().should('include', 'checkout-complete.html')
})


// Go back to homepage after click home button
When('User click back home button', () => {
    cy.get('#back-to-products').click()
})

Then('User will redirect back to homepage', () => {
    cy.url().should('include', 'inventory.html')
})