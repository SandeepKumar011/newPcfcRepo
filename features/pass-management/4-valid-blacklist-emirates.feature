Feature: Verify apply pass for the blacklist id

  Scenario: Verify errorr message for the blacklist emirates id
    Given user navigates to the login page
    When user enter the username on login page
    And user enter the password on login page
    And user click on submit button on login page
    Then verify user is redirected to the home page
    When user enter all the infomation for the pass infomation
    And user enter information for the visitor
    And user enters the blacklist emirateid
    Then verify error message for the blacklist emirate id
    When user select logout button on home page
    Then verify logout verification message
