Feature: Verify Company trade licence Registration Form field

  Scenario: verify company trade licence error message 
    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Given the user navigates to the Company tab on registration page
    When user enters profile infomation for company
    When user not enter trade licence number and submit
    Then verify error message for the licence number
    When user not enter trade licence expire and submit
    Then verify error message for the licence expire
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration