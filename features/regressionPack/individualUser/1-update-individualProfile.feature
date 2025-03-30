Feature: Update individual user profile

  Scenario: Verify update individual profile functionality
    Given user navigates the login page for individual user
    When user enter the crendential for individual user
    Then user should be redirected to the home page for individual user
    When user select the individual user profile for update
    And user update the infomation for individual
    And user submit the infomation for the individual
    Then verify update success message for the individual
    When user select the logout option on dashboard page
    Then user should logout from the website