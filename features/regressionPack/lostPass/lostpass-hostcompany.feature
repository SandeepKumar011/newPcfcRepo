
Feature: Verify lost pass for host functionality

  Scenario: Verify lost pass for one year with host functionality
    Given user navigates to the login page for host for one year
    When user enter the credential for the login for host for one year
    Then user redirected to the home page for host for one year
    And Enter the pass information for the host for one year
    And user enter the visitor information for the host for one year
    And user save the visitor on the add page for the host for one year
    Then verify user is added in the list for the host for one year
    When user submit the visitor information for the host for one year
    And user paid amount for the apply pass for the host for one year
    Then verify pass apply successfully messge for the host for one year
    When user select logout button on home page for the host for one year
    Then verify logout verification message for the host for one year
    When user approve the apply pass for the host for one year
    Then verify first approvel successfully message for the host for one year
    And verify second approval successfully message for the host for one year
    Then verify Final approval successfully message for the host for one year
    When user login for the report lost pass for the host for one year
    When user select the lost pass on dashboard for the host for one year
    And user paid fine amount for the lost pass for the host for one year
    And verify success message for the payment for the host for one year
    Then verify lost pass status on the list page the host for one year
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity