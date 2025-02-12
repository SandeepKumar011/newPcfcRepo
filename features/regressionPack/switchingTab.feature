Feature: Switching between Individual and Company tabs

  Scenario: Verify details retention when switching to the company tab
    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Given the user has entered details in the Individual registration form
    When the user navigates to the Company tab
    Then the details entered in the Individual tab should remain saved 
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration