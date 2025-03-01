Feature: Advance search by port name Service Availability

  Scenario: Verify the search by port name Pass Service functionality
    Given user navigates the login page for pass
    When user enter the crendential for the pass Apply
    Then user should be redirected to the home page
    When user enter the infomation for pass for advance search
    And user enter infomation for the visitor for advance search
    And user apply the pass for one day for advance search
    Then verify confirmation message for the applied pass
    When user select advance search on view all passes page
    Then verify search by port name on list page
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
