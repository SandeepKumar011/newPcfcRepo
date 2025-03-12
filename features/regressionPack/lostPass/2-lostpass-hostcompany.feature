
Feature: Verify lost pass for host functionality

  Scenario: Verify lost pass for one year with host functionality
    Given user navigates to the login page for lost pass host company
    When user enter the credential for the login for lost pass host company
    Then user redirected to the home page for lost pass host company
    And Enter the pass information for lost pass host company
    And user enter the visitor information for lost pass host company
    And user save the visitor on the add page for lost pass host company
    Then verify user is added in the list for lost pass host company
    When user submit the visitor information for lost pass host company
    And user paid amount for the apply pass for lost pass host company
    Then verify pass apply successfully messge for lost pass host company
    When user select logout button on home page for lost pass host company
    Then verify logout verification message for lost pass host company
    When user approve the apply pass for lost pass host company
    Then verify first approvel successfully message for lost pass company
    And verify second approval successfully message for lost pass company
    Then verify Final approval successfully message for lost pass company
    When user login for the report lost pass for the host for one year
    When user select the lost pass on dashboard for the host for one year
    And user paid fine amount for the lost pass for the host for one year
    And verify success message for the payment for the host for one year
    Then verify lost pass status on the list page the host for one year
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity