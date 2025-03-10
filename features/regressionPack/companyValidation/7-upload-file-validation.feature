
Feature: Verify Company trade licence source Registration Form field

  Scenario: verify company trade licence source error message 
    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Given the user navigates to the Company tab on registration page
    When user enters profile infomation for company
    And user upload size more than two mb for company
    Then verify error message for the file size
    And user upload size less than two mb for company
    Then verify there should not be display error messge
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration