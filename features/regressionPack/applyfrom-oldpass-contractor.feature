Feature: Apply from old pass for contractor Service Availability

  Scenario: Verify the apply pass from old pass for contractor Service functionality
    Given user navigates the login page for contractor
    When user enter the crendential for the contractor
    Then user should be redirected to the home page for contractor
    When user enter the infomation for pass for contractor
    And user enter infomation for the visitor for contractor
    And user apply the pass for one day for contractor
    And user payment for the apply pass on payment page for old pass
    Then verify confirmation message for contractor
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
