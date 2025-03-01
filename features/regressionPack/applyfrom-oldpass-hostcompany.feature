Feature: Apply from old pass for host Service Availability

  Scenario: Verify the apply pass from old pass for host Service functionality
    Given user navigates the login page for host
    When user enter the crendential for the host
    Then user should be redirected to the home page for host
    When user enter the infomation for pass for host
    And user enter infomation for the visitor for host
    And user apply the pass for one day for host
    And user payment for the apply pass on payment page for old pass
    Then verify confirmation message for host
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
