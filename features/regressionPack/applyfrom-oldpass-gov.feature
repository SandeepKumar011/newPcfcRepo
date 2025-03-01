Feature: Apply from old pass for government Service Availability

  Scenario: Verify the apply pass from old pass for government Service functionality
    Given user navigates the login page for government
    When user enter the crendential for the government
    Then user should be redirected to the home page for government
    When user enter the infomation for pass for government
    And user enter infomation for the visitor for government
    And user apply the pass for one day for government
    And user payment for the apply pass on payment page for old pass
    Then verify confirmation message for government
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
