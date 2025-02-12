Feature: Verify Company name Registration Form field

  Scenario: verify company name error message 
  Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Given the user navigates to the Company tab on registration page
    When user enters profile infomation for company
    And user do not enter company name and submit
    Then verify error message for the company name
    When user enter company name and submit
    Then verify confirmation message is displayed
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration