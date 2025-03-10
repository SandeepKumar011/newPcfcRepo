Feature: Return pass for hostcompany Service Availability

  Scenario: Verify the return pass for hostcompany Service functionality
    Given user navigates the login page for hostcompany return
    When user enter the crendential for the hostcompany return
    Then user should be redirected to the home page for hostcompany return
    When user enter the infomation for pass for hostcompany return
    And user enter infomation for the visitor for hostcompany return
    And user apply the pass for one day for hostcompany return
    And user pay amount for the retun pass for hostcompany
    Then verify confirmation message for hostcompany return
    When login with the approval crendential for hostcompany
    And host company return pass to the hostcompany
    Then verify retun confirmation message for the company
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
