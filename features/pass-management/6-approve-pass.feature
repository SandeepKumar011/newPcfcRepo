Feature: Verify approve pass functionality

  Scenario Outline: Verify apply and approve pass functionality
    Given user navigates to the login page
    When user enter the username on login page
    And user enter the password on login page
    And user click on submit button on login page
    Then verify user is redirected to the home page
    When verify Apply Pass service option should be visible and accessible
    When user select Apply gate pass on the management pass page
    And user enter pass information on the create page
    And user enter the visitor information on the create page
    And user save the visitor on the create page
    Then verify user is added in the list on the create page
    When user submit the visitor information on the create page
    Then verify pass apply successfully messge
    When user select logout button on home page
    Then verify logout verification message
    When user approve the apply pass on the list page
    Then verify pass approved successfully message
    When user select logout button on home page
    Then verify logout verification message

