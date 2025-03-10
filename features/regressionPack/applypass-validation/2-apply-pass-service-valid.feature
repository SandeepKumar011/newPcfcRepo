Feature: Apply Pass Service Availability

  Scenario: Verify the Apply Pass Service is available
    Given user navigates the login page for pass
    When user enter the crendential for the pass Apply
    Then verify Apply Pass service option should be visible

