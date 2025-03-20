
Feature: Verify one six month approve pass for host functionality

  Scenario: Verify apply and approve pass for six month with host functionality
    Given user navigates to the login page for host for zone six month
    When user enter the credential for the login for host for zone six month
    Then user redirected to the home page for host for zone six month
    And Enter the pass information for the host for zone six month
    And user enter the visitor information for the host for zone six month
    And user save the visitor on the add page for the host for zone six month
    Then verify user is added in the list for the host for zone six month
    When user submit the visitor information for the host for zone six month
    And user paid amount for the apply pass for the host for zone six month
    Then verify pass apply successfully messge for the host for zone six month
    When user select logout button on home page for the host for zone six month
    Then verify logout verification message for the host for zone six month
    When user approve the apply pass for the host for zone six month
    Then verify first approvel successfully message for the host for zone six month
    And verify second approval successfully message for the host for zone six month
    Then verify Final approval successfully message for the host for zone six month
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity