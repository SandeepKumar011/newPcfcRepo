Feature: Verify renew pass for host functionality

  Scenario: Verify renew pass for host functionality
    Given user navigates to the login page for renew host 
    When user enter the credential for the login for renew host 
    Then user redirected to the home page for renew host
    When user search the pass for the renew pass host
    And user entere the infomration for renew pass host
    When user submit the visitor information for the renew pass host
    And user paid amount for the apply pass for the renew pass host
    Then verify successfully messge for the renew pass host
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity