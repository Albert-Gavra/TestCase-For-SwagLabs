Feature: Login to Application

    As a user, i want to sort items

    Background: 
        Given User is logged in

    Scenario: Sort By Name (A to Z)
        When User click sort name A to Z
        Then User should see Items name got sorted from A to Z
    Scenario: Sort By Name (Z to A)
        When User click sort name Z to A
        Then User should see Items name got sorted from Z to A
    Scenario: Sort By Price (Low to High)
        When User click sort price Low to High
        Then User should see Items price got sorted from Low to High
    Scenario: Sort By Price (High to Low)
        When User click sort price High to Low
        Then User should see Items price got sorted from A to Z  