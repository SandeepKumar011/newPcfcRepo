   Feature: Verify edit pass superadmin Service functionality

  Scenario: Verify the edit pass superadmin functionality through admin
    Given user navigates the login page for super admin
    When user enter the crendential for the super admin
    Then user should be redirected to the home page for super admin
    When user select edit pass for updated information for super admin
    When user update the information for edit pass super admin
    And submit the information for for edit super admin
    Then verify success message for the for edit super admin
    When search updated pass on the list page for super admin
    Then verify updated pass for edit onm list page
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
