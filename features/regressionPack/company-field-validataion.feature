Feature: Verify Company Registration Form field

  Scenario: Check for different filed in the company registration form
  Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Given the user navigates to the Company tab on registration page
    Then verify company name phone licene number expiry date resource
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration