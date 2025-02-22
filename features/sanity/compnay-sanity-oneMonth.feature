Feature: Verify one month approve pass for individual functionality

  Scenario: Verify apply and approve pass for one month with company functionality
    Given user navigates to the login page for company for one Month
    When user enter the credential for the login for company for one Month
    Then user redirected to the home page for company for one Month
    And Enter the pass information for the company for one month
    And user enter the visitor information for the company for one month
    And user save the visitor on the add page for the company for one month
    Then verify user is added in the list for the company for one month
    When user submit the visitor information for the company for one month
    And user paid amount for the apply pass for the company for one month
    Then verify pass apply successfully messge for the company for one month
    When user select logout button on home page for the company for one month
    Then verify logout verification message for the company for one month
    When user approve the apply pass on the list page for the company for one month
    Then verify pass approved successfully message for the company for one month
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity