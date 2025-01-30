Feature: Verify new user registration service availability

  Scenario: Check if the new user registration service is available
    Given the user navigates to the registration page
    And the registration form should be displayed
    Then user verify Individual Registration should be selected by default
    And verify DO NOT REGISTER section should be displayed
    Then it should have proper instructions
    When the user views the registration type dropdown
    And the user opens the Visa Type dropdown
    Then verify the dropdown values for Resident and visit
    When user select the Visa Type Resident
    And the user enters an invalid Emirates ID
    Then the system should show an error message
    When the user enters valid Emirates ID
    Then verify the ID should be accepted
    And the user checks the Profile Information for full name Gender and dob
    And the form should display all section profile and document and contact details

