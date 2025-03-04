Feature: Return pass for company Service Availability

  Scenario: Verify the return pass for company Service functionality
    Given user navigates the login page for company return
    When user enter the crendential for the company return
    Then user should be redirected to the home page for company return
    When user enter the infomation for pass for company return
    And user enter infomation for the visitor for company return
    And user apply the pass for one day for company return
    And user payment for the apply pass on payment page for return
    Then verify confirmation message for company return
    When login with the approval crendential for company
    And host company return pass to the company
    Then verify retun confirmation message for the company
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
