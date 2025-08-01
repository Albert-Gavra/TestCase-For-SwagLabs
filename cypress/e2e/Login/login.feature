Feature: Login to Application

    As a valid user
    I want to login into Application

    Scenario: Valid Login
        Given User open login page
        When User submit login with a correct password & user : standard_user
        Then User should see homepage

    Scenario: Login with the incorrect password and correct username
        Given User open login page
        When User submit login with a incorrect password & correct user : standard_user
        Then User should see an error
    
    Scenario: Login with the correct password and incorrect username
        Given User open login page
        When User submit login with a correct password & incorrect user : a_standard_user
        Then User should see an error

    Scenario: Login with the incorrect password and incorrect username
        Given User open login page
        When User submit login with a incorrect password & incorrect user : a_standard_user
        Then User should see an error

    Scenario: Login with the empty username and empty password
        Given User open login page
        When User submit login with a empty password & empty user
        Then User should see an error for empty username and password

    Scenario: Login with the filled username and empty password
        Given User open login page
        When User submit login with a empty password & filled user
        Then User should see an error for filled username and empty password

    Scenario: Login with the empty username and filled password
        Given User open login page
        When User submit login with a filled password & empty user
        Then User should see an error for empty username and filled password