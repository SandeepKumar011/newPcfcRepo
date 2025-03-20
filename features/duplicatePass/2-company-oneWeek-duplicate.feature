Feature: Verify one week approve duplicate pass functionality

  Scenario: Verify apply and approve duplicate pass for one week functionality
    Given user navigates to the login page for one week duplicate
    When user enter credential on login page for one week duplicate
    Then verify user is redirected to the home page for one week duplicate
    When user select Apply gate pass on the management pass page for one week duplicate
    And user enter pass information on the create page for one week duplicate
    And user enter the visitor information on the create page for one week duplicate
    And user save the visitor on the create page for  one week duplicate
    Then verify user is added in the list on the create page for one week duplicate
    When user submit the visitor information on the create page for one week duplicate
    Then verify pass apply successfully messge for one week duplicate
    When user select logout button on home page for one week duplicate
    Then verify logout verification message for one week duplicate
    When user approve the apply pass on the list page for one week duplicate
    Then verify pass approved successfully message for one week duplicate
    When user select again apply pass for one week duplicate check
    And user enter all the information for one week duplicate pass
    And user enter the visitor infomation for one week  duplicate pass
    And user submit the duplicate pass for one week message
    Then verify one week duplicate message display on the submit page
    When user select logout button on home page
    Then verify logout verification message

