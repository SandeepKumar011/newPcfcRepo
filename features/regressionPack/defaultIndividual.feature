Feature: Verify default registration type

  Scenario: Check default registration type
    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Then Individual Registration should be selected by default
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration
