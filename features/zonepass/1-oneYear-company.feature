Feature: Verify one year approve pass for zone company functionality

  Scenario: Verify apply and approve pass for one year with zone company functionality
    Given user navigates to the login page for zone for one year
    When user enter the credential for the login for zone for one year
    Then user redirected to the home page for zone for one year
    And Enter the pass information for the zone for one year
    And user enter the visitor information for the zone for one year
    And user save the visitor on the add page for the zone for one year
    Then verify user is added in the list for the zone for one year
    When user submit the visitor information for the zone for one year
    And user paid amount for the apply pass for the zone for one year
    Then verify pass apply successfully messge for the zone for one year
    When user select logout button on home page for the zone for one year
    Then verify logout verification message for the zone for one year
    When user approve the apply pass on the list page for the zone for one year
    Then verify pass approved successfully message for the zone for one year
    When verify second second approval message for the zone one year
    And verify Third approval message for the zone one year
    Then verify final status completed for the applyied pass for zone
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity