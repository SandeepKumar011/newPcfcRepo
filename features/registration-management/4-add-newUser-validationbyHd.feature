Feature: Verify new add user and verification functionality

  Scenario: verify add new user and verification by hduser functionality
    Given user navigates to the registration page for add user
    And user is redirected to the registration for add user
    And user select visa and enter emirated id and the emirate expire date for add user
    And user enter passport number and expire date for passport for add user
    And user enter first and last name and email and title for add user
    And user enter mobile designation and nationlity for add user
    And user enters dob and visa number and visa expire date for add user
    And user uploads the files for passport photo eid and visa for add user
    And user submit the files for the Registration for add user
    Then verify the success message for the registration for add user
    When user selects back to login button
    Then Verify page is redirected to the login page
    When user login with the hd user for validation for add user
    And user verify the added user by hd user for add user
    Then verify validation message for the approve pass by hduser for add user
    When user selects back to login button
    Then Verify page is redirected to the login page

   