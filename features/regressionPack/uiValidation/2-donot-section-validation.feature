

Feature: Verify DO NOT REGISTER Sections in Registration Form
  Scenario: Check for DO NOT REGISTER sections
    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Then DO NOT REGISTER section should be displayed
    And message should have proper instructions to be displayed
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration
