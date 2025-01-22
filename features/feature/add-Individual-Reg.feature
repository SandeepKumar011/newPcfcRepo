Feature: Verify new user registration functionality

  Scenario: verify add update and delete registration functionality
    Given user navigates to the registration page fo add registration
    And user is redirected to the registration for add redirected
    And user select visa and enter emirated id and the emirate expire date
    And user enter passport number and expire date for passport
    And user enter first and last name and email and title
    And user enter mobile designation and nationlity
    And user enters dob and visa number and visa expire date
    And user uploads the files for passport photo eid and visa
    And user submit the files for the Registration
    Then verify the success message for the registration 
   