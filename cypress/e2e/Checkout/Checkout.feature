Feature: Checkout

    As a user, i want to do checkout

    Scenario: Testing Order Feature
        Given User open login page first
        When User do input login
        And click submit button
        Then User should see a homepage
        When User add to cart for backpack 
        And click shopping cart
        Then User should see cart list
        When User click checkout button
        Then User will see your information form page
        When User fill out the form
        And Click continue button
        Then User will see checkout overview page 
        When User click finish button
        Then User will see checkout complete page
        When User click back home button
        Then User will redirect back to homepage