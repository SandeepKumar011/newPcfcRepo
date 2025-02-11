
Feature: Verify eroor message for more than ten pass functionality

  Scenario Outline: Verify error message if user add more than ten visitor
    Given user navigates to the login page
    When user enter the username on login page
    And user enter the password on login page
    And user click on submit button on login page
    Then verify user is redirected to the home page
    When verify Apply Pass service option should be visible and accessible
    When user select Apply gate pass on the management pass page
    And user enter pass information on the create page for more than ten
    And user enter the visitor information on the create page for more than ten
    Then save four visitor as draft and select edit button from mydraft
    When user add more four visitor and save as draft and select edit from mydraft
    And user add more three visitor and select save visitor
    Then verify error message if user trying to add eleventh visitor
    When user select logout button on home page
    Then verify logout verification message