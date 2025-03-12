Feature: Verify lost pass for company functionality

  Scenario: Verify lost pass for one month with company functionality
    Given user navigates to the login page for lost pass company
    When user enter the credential for the login for lost pass company
    Then user redirected to the home page for lost pass company
    And Enter the pass information for lost pass company
    And user enter the visitor information for lost pass company
    And user save the visitor on the add page for lost pass company
    Then verify user is added in the list for the lost pass company
    When user submit the visitor information for lost pass company
    And user paid amount for the apply pass for lost pass company
    Then verify pass apply successfully messge for lost pass company
    When user select logout button on home page for lost pass company
    Then verify logout verification message for lost pass company
    When user approve the apply pass on the list page for lost pass company
    Then verify pass approved successfully message for lost pass company
    When verify second second approval message for lost pass company
    And verify Third approval message for lost pass company
    Then verify final status completed message for lost pass company
    When user login for the report lost pass for the company
    When user select the lost pass on dashboard for the company
    And user paid fine amount for the lost pass for company
    And verify success message for the payment for lost pass
    Then verify lost pass status on the list page for company
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity