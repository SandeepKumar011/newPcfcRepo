Feature: Advance search Service Availability

  Scenario: Verify the search Pass Service functionality
    Given user navigates the login page for pass
    When user enter the crendential for the pass Apply
    Then user should be redirected to the home page
    When user select advance search on view all passes page
    Then verify search by passreferce number on list page
    When user select logout dropdown on home page
    Then verify user is redirected to the login page
