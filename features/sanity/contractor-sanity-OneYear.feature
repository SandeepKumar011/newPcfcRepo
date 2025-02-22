Feature: Verify one year contractor pass functionality

  Scenario: Verify apply and approve pass for one year contractor functionality
    Given user navigates to the login page for contractor
    When user enter the credential for the login for contractor
    Then user redirected to the home page for contractor
    And user enter pass information for contractor
    And user enter the visitor information for contractor
    And user save the visitor for contractor
    Then verify user is added in the list for contractor
    When user submit the visitor information for contractor
    And user paid amount for the apply pass for contractor
    Then verify pass apply successfully messge for contractor
    When user select logout button on home page for contractor
    Then verify logout verification message for contractor
    When user approve the apply pass for contractor
    Then verify first approvel successfully message for contractor
    And verify second approval successfully message for contractor
    Then verify Final approval successfully message for contractor
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity