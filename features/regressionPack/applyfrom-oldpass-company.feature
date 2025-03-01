Feature: Apply from old pass for company Service Availability

  Scenario: Verify the apply pass from old pass for company Service functionality
    Given user navigates the login page for company
    When user enter the crendential for the company
    Then user should be redirected to the home page for company
    When user enter the infomation for pass for company
    And user enter infomation for the visitor for company
    And user apply the pass for one day for company
    And user payment for the apply pass on payment page for old pass
    Then verify confirmation message for company
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
