Feature: Update profile for government Service Availability

  Scenario: Verify the update profile for government Service functionality
    Given user navigates the login page for government update profile
    When user enter the crendential for the government update profile
    Then user should be redirected to the home page for government update profile
    When user select update profile for government updated
    And user update the infomation for government
    And user submit the infomation for government
    Then verify success messge for the government
    When user select logout dropdown on home page
    Then verify user is redirected to the login page