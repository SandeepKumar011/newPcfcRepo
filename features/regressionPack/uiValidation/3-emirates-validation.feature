
Feature: Validate Emirates ID Fields

  Scenario: Check valid Emirates ID starts with 784
    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Given the Visa Type is Resident for registration
    And user enter Emirates id start with "1800"
    Then verify error messge for the emirates id
    When user enter emirates id start with "784" for registration
    Then the ID should be accepted for registration
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration