Feature: Verify Company phone Registration Form field

  Scenario: verify company phone error message 
    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Given the user navigates to the Company tab on registration page
    When user enters profile infomation for company
    And user enter invalid phone number for company and submit
    Then verify phone number error message for the company
    And user enter valid phone number for company and submit
    Then verify there should not be error message
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration