Feature: Update profile for contractor Service Availability

  Scenario: Verify the update profile for contractor Service functionality
    Given user navigates the login page for contractor update profile
    When user enter the crendential for the contractor update profile
    Then user should be redirected to the home page for contractor update profile
    When user select update profile for contractor updated
    And user update the infomation for contractor
    And user submit the infomation for contractor
    Then verify success messge for the contractor
    When user select logout dropdown on home page
    Then verify user is redirected to the login page