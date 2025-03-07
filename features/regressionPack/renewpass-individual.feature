Feature: Verify renew pass for individual functionality

  Scenario: Verify renew pass for individual functionality
    Given user navigates to the login page for renew individual 
    When user enter the credential for the login for renew individual 
    Then user redirected to the home page for renew individual
    When user search the pass for the renew pass individual
    And user entere the infomration for renew pass individual
    When user submit the visitor information for the renew pass individual
    And user paid amount for the apply pass for the renew pass individual
    Then verify successfully messge for the renew pass individual
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity