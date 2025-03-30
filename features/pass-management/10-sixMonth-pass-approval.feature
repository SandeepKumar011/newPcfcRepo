Feature: Verify six month approve pass for company functionality

  Scenario: Verify apply and approve pass for six month with company functionality
    Given user navigates to the login page for company for six Month
    When user enter the credential for the login for company six one Month
    Then user redirected to the home page for company for six Month
    And Enter the pass information for the company for six month
    And user enter the visitor information for the company for six month
    And user save the visitor on the add page for the company for six month
    Then verify user is added in the list for the company for six month
    When user submit the visitor information for the company for six month
    And user paid amount for the apply pass for the company for six month
    Then verify pass apply successfully messge for the company for six month
    When user select logout button on home page for the company for six month
    Then verify logout verification message for the company for six month
    When user approve the apply pass on the list page for the company for six month
    Then verify pass approved successfully message for the company for six month
    When verify second second approval message for the company six month
    And verify Third approval message for the company six month
    Then verify final status completed for the applyied pass for six month
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity