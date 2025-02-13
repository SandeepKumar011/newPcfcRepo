
Feature: Verify Company trade licence source Registration Form field

  Scenario: verify company trade licence source error message 
    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Given the user navigates to the Company tab on registration page
    When user enters profile infomation for company
    And user do not enter source for trade
    Then verify error message for the trade source
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration