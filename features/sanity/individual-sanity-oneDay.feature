Feature: Verify one day approve pass for individual functionality

  Scenario: Verify apply and approve pass for one day with individual functionality
    Given user navigates to the login page for sanity
    When user enter the credential for the login for sanity
    Then user redirected to the home page for sanity
    And user enter pass information for sanity
    And user enter the visitor information for sanity
    And user save the visitor on the add page for sanity
    Then verify user is added in the list for sanity
    When user submit the visitor information for sanity
    Then verify pass apply successfully messge for sanity
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity
    When user approve the apply pass on the list page for sanity
    Then verify pass approved successfully message for sanity
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity