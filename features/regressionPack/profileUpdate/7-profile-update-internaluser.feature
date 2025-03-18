Feature: Update profile for internal user Service Availability

  Scenario: Verify the update profile for internal user Service functionality
    Given user navigates the login page for internal user update profile
    When user enter the crendential for the internal user update profile
    Then user should be redirected to the home page for internal user update profile
    When user select update profile for internal user updated
    And user update the infomation for internal user
    And user submit the infomation for internal user
    Then verify success messge for the internal user
    When user select logout dropdown on home page
    Then verify user is redirected to the login page