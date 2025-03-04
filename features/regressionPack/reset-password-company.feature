Feature: Update profile for reset password Service Availability

  Scenario: Verify the update profile for reset password Service functionality
    Given user navigates the login page for reset update profile
    When user enter the crendential for the reset update profile
    Then user should be redirected to the home page for reset update profile
    When user select update profile for reset updated
    And user update the infomation for reset
    And user submit the infomation for reset
    Then verify success messge for the reset
    When user select logout dropdown on home page
    Then verify user is redirected to the login page