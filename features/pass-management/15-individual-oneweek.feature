Feature: Verify approve individual pass functionality

  Scenario Outline: Verify apply and approve individual pass functionality
    Given user navigates to the login page
    When user enter the username on login page
    And user enter the password on login page
    And user click on submit button on login page
    Then verify user is redirected to the home page
    When verify Apply Pass service option should be visible and accessible
    When user select Apply gate pass on the management pass page
    And user enter pass information for one week pass individual
    And user enter the visitor information for one week pass individual
    And user save the visitor for one week pass individual
    Then verify user is added in the list for one week pass individual
    When user submit the visitor information for one week pass individual
    Then verify pass apply successfully messge for one week pass individual
    When user select logout button on home page for one week pass individual
    Then verify logout verification message for one week pass individual
    When user approve the apply pass for one week pass individual
    Then verify pass approved successfully message for one week pass individual
    When user select logout button on home page 
    Then verify logout verification message
