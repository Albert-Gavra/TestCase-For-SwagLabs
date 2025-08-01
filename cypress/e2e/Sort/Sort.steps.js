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
When('User click sort name A to Z', () => {
    cy.get('.product_sort_container').select('az')
    cy.wait(1000);
})

Then('User should see Items name got sorted from A to Z', () => {
    cy.get('.inventory_item_name').then(($items) => {
            const texts = [...$items].map(item => item.innerText);
            const sorted = [...texts].sort();

            expect(texts).to.deep.equal(sorted);
    });
})


// Sorting by name Z to A
When('User click sort name Z to A', () => {
    cy.get('.product_sort_container').select('za')
    cy.wait(1000);
})

Then('User should see Items name got sorted from Z to A', () => {
    cy.get('.inventory_item_name').then(($items) => {
            const texts = [...$items].map(item => item.innerText);
            const sorted = [...texts].sort().reverse();

            expect(texts).to.deep.equal(sorted);
    });
})

// Sorting by price low to high
When('User click sort price Low to High', () => {
    cy.get('.product_sort_container').select('lohi')
    cy.wait(1000);
})

Then('User should see Items price got sorted from Low to High', () => {
    cy.get('.inventory_item_price').then(($items) => {
            const prices = [...$items].map(item => {
                const text = item.innerText.replace('$', '')
                return parseFloat(text)
            });
            const sorted = [...prices].sort((a, b) => a - b);

            expect(prices).to.deep.equal(sorted);
    });
})

// Sorting by price high to low
When('User click sort price High to Low', () => {
    cy.get('.product_sort_container').select('hilo')
    cy.wait(1000);
})

Then('User should see Items price got sorted from A to Z', () => {
    cy.get('.inventory_item_price').then(($items) => {
            const prices = [...$items].map(item => {
                const text = item.innerText.replace('$', '')
                return parseFloat(text)
            });
            const sorted = [...prices].sort((a, b) => b - a)

            expect(prices).to.deep.equal(sorted);
    });
})