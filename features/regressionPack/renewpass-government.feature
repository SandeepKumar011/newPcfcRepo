Feature: Verify renew pass for government functionality

  Scenario: Verify renew pass for government functionality
    Given user navigates to the login page for renew government 
    When user enter the credential for the login for renew government 
    Then user redirected to the home page for renew government
    When user search the pass for the renew pass government
    And user entere the infomration for renew pass government
    When user submit the visitor information for the renew pass government
    And user paid amount for the apply pass for the renew pass government
    Then verify successfully messge for the renew pass government 
    When user select logout button on home page for sanity
    Then verify logout verification message for sanity