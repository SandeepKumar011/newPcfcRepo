Feature: Verify reject pass for company functionality

  Scenario: Verify reject pass company functionality
    Given user navigates to the login page for reject company 
    When user enter the credential for the login for reject company 
    Then user redirected to the home page for reject company
    And Enter the pass information for the reject company
    And user enter the visitor information for the rejectcompany 
    And user save the visitor on the add page for reject the company 
    Then verify user is added in the list for the reject company for 
    When user submit the visitor information for the reject company
    And user paid amount for the apply pass for the reject  company
    Then verify pass apply successfully messge for the reject company 
    When user select logout button on home page for the reject company
    Then verify logout verification message for the reject company
    When user reject the apply pass on the list for company
    Then verify reject successfully message for the company 
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity