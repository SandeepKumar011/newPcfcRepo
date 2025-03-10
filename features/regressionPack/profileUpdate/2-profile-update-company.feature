Feature: Update profile for company Service Availability

  Scenario: Verify the update profile for company Service functionality
    Given user navigates the login page for company update profile
    When user enter the crendential for the company update profile
    Then user should be redirected to the home page for company update profile
    When user select update profile for company updated
    And user update the infomation for company
    And user submit the infomation for company
    Then verify success messge for the company
    When user select logout dropdown on home page
    Then verify user is redirected to the login page