Feature: Verify create hostUser Service functionality

  Scenario: Verify the create hostUser functionality through admin
    Given user navigates the login page for add hostUser
    When user enter the crendential for the add hostUser
    Then user should be redirected to the home page for add hostUser
    When user enter the interan information for add hostUser
    And enter the username passwrod and confirm password for hostUser
    And submit the information for add hostUser on create page
    Then verify success message for the add hostUser
    When search added hostUser on the list page
    Then verify hostUser added information on list page
    When user select logout dropdown on home page
    Then verify user is redirected to the login page