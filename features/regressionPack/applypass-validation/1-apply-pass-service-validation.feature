Feature: Apply Pass Service Availability

  Scenario: Verify the Apply Pass Service is available
    Given user navigates the login page for pass
    When user enter the crendential for the pass Apply
    Then user should be redirected to the home page
    Then verify Apply Pass service option should be visible
    When user select logout dropdown on home page
    Then verify user is redirected to the login page

