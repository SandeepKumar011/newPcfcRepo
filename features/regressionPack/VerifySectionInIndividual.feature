
Feature: Verify sections in Individual Registration Form

  Scenario: Check for different sections
    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Then the form should display profile document and contact detail
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration
