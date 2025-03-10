Feature: Return pass for contractor Service Availability

  Scenario: Verify the return pass for contractor Service functionality
    Given user navigates the login page for contractor return
    When user enter the crendential for the contractor return
    Then user should be redirected to the home page for contractor return
    When user enter the infomation for pass for contractor return
    And user enter infomation for the visitor for contractor return
    And user apply the pass for one day for contractor return
    And user pay amount for the retun pass for contractor
    Then verify confirmation message for contractor return
    When login with the approval crendential for contractor
    And host company return pass to the contractor
    Then verify retun confirmation message for the company
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
