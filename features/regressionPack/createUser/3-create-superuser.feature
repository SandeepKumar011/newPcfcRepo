Feature: Verify create superuser Service functionality

  Scenario: Verify the create superuser functionality through admin
    Given user navigates the login page for add superuser
    When user enter the crendential for the add superuser
    Then user should be redirected to the home page for add superuser
    When user enter the interan information for add superuser
    And enter the username passwrod and confirm password for superuser
    And submit the information for add superuser on create page
    Then verify success message for the add superuser
    When search added superuser on the list page
    Then verify superuser added information on list page
    When user select logout dropdown on home page
    Then verify user is redirected to the login page