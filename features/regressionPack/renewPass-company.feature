Feature: Verify renew pass for company functionality

  Scenario: Verify renew pass for company functionality
    Given user navigates to the login page for renew company 
    When user enter the credential for the login for renew company 
    Then user redirected to the home page for renew company
    When user search the pass for the renew pass company
    And user entere the infomration for renew pass company
    When user submit the visitor information for the renew pass company
    And user paid amount for the apply pass for the renew pass company
    Then verify successfully messge for the renew pass company 
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity