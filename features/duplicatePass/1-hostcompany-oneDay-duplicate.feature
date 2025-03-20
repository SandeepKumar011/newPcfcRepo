Feature: Verify one day approve duplicate pass functionality

  Scenario: Verify apply and approve duplicate pass for one day functionality
    Given user navigates to the login page for duplicate
    When user enter credential on login page for duplicate
    Then verify user is redirected to the home page for duplicate
    When user select Apply gate pass on the management pass page for duplicate
    And user enter pass information on the create page for duplicate
    And user enter the visitor information on the create page for duplicate
    And user save the visitor on the create page for duplicate
    Then verify user is added in the list on the create page for duplicate
    When user submit the visitor information on the create page for duplicate
    Then verify pass apply successfully messge for duplicate
    When user select logout button on home page for duplicate
    Then verify logout verification message for duplicate
    When user approve the apply pass on the list page for duplicate
    Then verify pass approved successfully message for duplicate
    When user select again apply pass for duplicate check
    And user enter all the information for duplicate pass
    And user enter the visitor infomation for the duplicate pass
    And user submit the duplicate pass for message
    Then verify duplicate message display on the submit page
    When user select logout button on home page
    Then verify logout verification message

