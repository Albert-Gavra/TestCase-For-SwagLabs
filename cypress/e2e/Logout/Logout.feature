Feature: Login to Application

    As a user, i want to Logout

    Background: 
        Given User is logged in

    Scenario: Sort By Name (A to Z)
        Given User already at homepage
        When User click burger menu on the top left
        Then User should see other menu on the left
        When User click on the Logout
        Then User should see a login page  