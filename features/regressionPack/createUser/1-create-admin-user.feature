Feature: Verify create user Service functionality

  Scenario: Verify the create user functionality through admin
    Given user navigates the login page for add user
    When user enter the crendential for the add user
    Then user should be redirected to the home page for add user
    When user enter the admin information for add user
    And enter the username passwrod and confirm password
    And submit the information for add user on create page
    Then verify success message for the add user
    When search added user on the list page
    Then verify user added information on list page
    When user select logout dropdown on home page
    Then verify user is redirected to the login page