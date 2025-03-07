Feature: Verify renew pass for contractor functionality

  Scenario: Verify renew pass for contractor functionality
    Given user navigates to the login page for renew contractor 
    When user enter the credential for the login for renew contractor 
    Then user redirected to the home page for renew contractor
    When user search the pass for the renew pass contractor
    And user entere the infomration for renew pass contractor
    When user submit the visitor information for the renew pass contractor
    And user paid amount for the apply pass for the renew pass contractor
    Then verify successfully messge for the renew pass contractor 
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity