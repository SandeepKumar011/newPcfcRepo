Feature: Add registration for individual functionality

  Scenario: Verify valid image uploads for profile photos
    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    And user eneters all the profile infomation
    And user selects the submit the button
    Then verify regstration successfully messge display for individual
    When user selects back to login button
    Then Verify page is redirected to the login page