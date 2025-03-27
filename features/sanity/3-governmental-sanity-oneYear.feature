Feature: Verify one year governmental pass functionality

  Scenario: Verify apply and approve pass for one year governmental functionality
    Given user navigates to the login page for governmental
    When user enter the credential for the login for governmental
    Then user redirected to the home page for governmental
    And user enter pass information for governmental
    And user enter the visitor information for governmental
    And user save the visitor for governmental
    Then verify user is added in the list for governmental
    When user submit the visitor information for governmental
    And user paid amount for the apply pass for governmental
    Then verify pass apply successfully messge for governmental
    When user select logout button on home page for governmental
    Then verify logout verification message for governmental
    When user approve the apply pass for governmental
    Then verify first approvel successfully message for governmental
    And verify second approval successfully message for governmental
    Then verify Final approval successfully message for governmental
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity