Feature: Apply from old pass for individual Service Availability

  Scenario: Verify the apply pass from old pass for individual Service functionality
    Given user navigates the login page for individual
    When user enter the crendential for the individual
    Then user should be redirected to the home page for individual
    When user enter the infomation for pass for individual
    And user enter infomation for the visitor for individual
    And user apply the pass for one day for individual
    And user payment for the apply pass on payment page for old pass
    Then verify confirmation message for individual
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
