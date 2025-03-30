Feature: Verify one month draft approve pass for company functionality

  Scenario: Verify apply draft and approve pass for one month with company functionality
    Given user navigates to the login page for company for one Month draft
    When user enter the credential for the login for company for one Month draft
    Then user redirected to the home page for company for one Month draft
    And Enter the pass information for the company for one month draft
    And user enter the visitor information for the company for one month draft
    And user save the visitor on the add page for the company for one month draft
    Then verify user is added in the list for the company for one month draft
    When user submit the visitor information for the company for one month draft
    And user paid amount for the apply pass for the company for one month draft
    Then verify pass apply successfully messge for the company for one month draft
    When user select logout button on home page for the company for one month draft
    Then verify logout verification message for the company for one month draft
    When user approve the apply pass on the list page for the company for one month draft
    Then verify pass approved successfully message for the company for one month draft
    When verify second second approval message for the company one month draft
    And verify Third approval message for the company one month draft
    Then verify final status completed for the applyied pass draft
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity