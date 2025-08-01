Feature: Login to Application

    As a user, i want to check the badge

    Background: 
        Given User is logged in

    Scenario: Check if the badge is work
        Given At the start, there is no badge on cart logo
        When User click add backpack
        Then User should see there is number 1 on cart logo
        When User click add bike light
        Then User should see there is number 2 on cart logo
        When User click remove backpack
        And remove bike light
        Then User should see there is no badge on the cart logo