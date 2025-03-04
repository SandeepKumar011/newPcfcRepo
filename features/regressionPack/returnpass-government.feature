Feature: Return pass for government Service Availability

  Scenario: Verify the return pass for government Service functionality
    Given user navigates the login page for government return
    When user enter the crendential for the government return
    Then user should be redirected to the home page for government return
    When user enter the infomation for pass for government return
    And user enter infomation for the visitor for government return
    And user apply the pass for one day for government return
    And user pay amount for the retun pass for government
    Then verify confirmation message for government return
    When login with the approval crendential for government
    And host company return pass to the government
    Then verify retun confirmation message for the company
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
