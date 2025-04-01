Feature: Verify two month approve pass for company functionality

  Scenario: Verify apply and approve pass for two month with company functionality
    Given user navigates to the login page for company for two Month
    When user enter the credential for the login for company two Month
    Then user redirected to the home page for company for two Month
    And Enter the pass information for the company for two month
    And user enter the visitor information for the company for two month
    And user save the visitor on the add page for the company for two month
    Then verify user is added in the list for the company for two month
    When user submit the visitor information for the company for two month
    And user paid amount for the apply pass for the company for two month
    Then verify pass apply successfully messge for the company for two month
    When user select logout button on home page for the company for two month
    Then verify logout verification message for the company for two month
    When user approve the apply pass on the list page for the company for two month
    Then verify pass approved successfully message for the company for two month
    When verify second second approval message for the company two month
    And verify Third approval message for the company two month
    Then verify final status completed for the applyied pass for two month
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity