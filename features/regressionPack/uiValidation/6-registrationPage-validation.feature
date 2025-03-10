Feature: Verify new user registration service availability

  Scenario: Check if the new user registration service is available
    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Then the registration form should be displayed for registration
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration
