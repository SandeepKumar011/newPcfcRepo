Feature: Verify drdo pass validation for company functionality

  Scenario: Verify apply and approve pass for drdo validation with company one month functionality
    Given user navigates to the login page for company DRDO
    When user enter the credential for the login for company DRDO
    Then user redirected to the home page for company DRDO
    And Enter the pass information for the company DRDO
    And user enter the visitor information for the company DRDO
    And user save the visitor on the add page for the company DRDO
    Then verify user is added in the list for the company DRDO
    When user submit the visitor information for the company DRDO
    And user paid amount for the apply pass for the company DRDO
    Then verify pass apply successfully messge for the company DRDO
    When user select logout button on home page for the company DRDO
    Then verify logout verification message for the company DRDO
    When user approve the apply pass on the list page for the company DRDO
    Then verify pass approved successfully message for the company DRDO
    When verify second second approval message for the company DRDO
    And verify Third approval message for the company DRDO
    Then verify final status completed for the applyied pass for DRDO
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity