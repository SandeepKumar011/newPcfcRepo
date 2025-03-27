
Feature: Verify one day approve pass for host functionality

  Scenario: Verify apply and approve pass for one month with host functionality
    Given user navigates to the login page for host for one day
    When user enter the credential for the login for host for one day
    Then user redirected to the home page for host for one day
    And Enter the pass information for the host for one day
    And user enter the visitor information for the host for one day
    And user save the visitor on the add page for the host for one day
    Then verify user is added in the list for the host for one day
    When user submit the visitor information for the host for one day
    And user paid amount for the apply pass for the host for one day
    Then verify pass apply successfully messge for the host for one day
    When user select logout button on home page for the host for one day
    Then verify logout verification message for the host for one day
    When user approve the apply pass on the list page for the host for one day
    Then verify pass approved successfully message for the host for one day
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity