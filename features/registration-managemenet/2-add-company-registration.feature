Feature: Verify compamny registration functionality

  Scenario: verify new company registration functionality
    Given user navigates to the registration page fo add registration
    And user is redirected to the registration for add registration
    And user select visa and enter emirated id and the emirate expire date
    And user enter passport number and expire date for passport
    And user enter first and last name and email and title
    And user enter mobile designation and nationlity
    And user enters dob and visa number and visa expire date
    And user uploads the files for passport photo eid and visa
    When user select the compamny information for the registration
    And user enter the compamny name and phone for the registration
    And user enter trad licence number expiry date
    And user enter trade licence source address and upload file
    And user submit the files for the Registration
    Then verify the success message for the registration
