   Feature: Verify print pass Service functionality

  Scenario: Verify the print pass functionality through admin
    Given user navigates the login page for print pass
    When user enter the crendential for the print pass
    Then user should be redirected to the home page for printpass
    When user select print pass for superadmin
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
