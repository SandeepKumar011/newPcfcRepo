   Feature: Verify create blacklist eid Service functionality

  Scenario: Verify the create blacklist eid functionality through admin
    Given user navigates the login page for super admin
    When user enter the crendential for the super admin
    Then user should be redirected to the home page for super admin
    When user enter the information blaclist eid
    And submit the information for blaclist eid
    Then verify success message for the blaclist eid
    When search added blaclist eid on the list page
    Then verify blaclist eid added information on list page
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
