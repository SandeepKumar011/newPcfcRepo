Feature: Return pass for individual Service Availability

  Scenario: Verify the return pass for individual Service functionality
    Given user navigates the login page for individual return
    When user enter the crendential for the individual return
    Then user should be redirected to the home page for individual return
    When user enter the infomation for pass for individual return
    And user enter infomation for the visitor for individual return
    And user apply the pass for one day for individual return
    And user pay amount for the retun pass for individual
    Then verify confirmation message for individual return
    When login with the approval crendential for individual
    And host company return pass to the individual
    Then verify retun confirmation message for the company
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
