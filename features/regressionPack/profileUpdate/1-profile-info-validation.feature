Feature: Verify fields in Profile Information

  Scenario: Validate fields in Profile Information section
    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Then verify first name last name dob and Gender should displayed
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration