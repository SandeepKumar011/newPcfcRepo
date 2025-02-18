Feature: Verify save as draft pass functionality

  Scenario Outline: Verify save as draft pass functionality
    Given user navigates to the login page
    When user enter the username on login page
    And user enter the password on login page
    And user click on submit button on login page
    Then verify user is redirected to the home page
    When verify Apply Pass service option should be visible and accessible
    When user select Apply gate pass on the management pass page
    And user enter pass information on the create page for draft
    And user enter the visitor information on the create page for draft
    And user save the visitor on the create page for draft
    Then verify user is added in the list on the create page for draft
    When user submit information as draft on create page
    Then verify confirmation message for the draft
    When user search saved information in draft
    Then verify added user information is displayed
    When user select logout button on home page
    Then verify logout verification message