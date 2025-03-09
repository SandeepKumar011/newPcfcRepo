Feature: Verify compamny registration functionality

  Scenario: verify new company registration functionality
    Given user navigates to the registration page fo add registration company
    And user is redirected to the registration for add registration company
    And user select visa and enter emirated id and the emirate expire date company
    And user enter passport number and expire date for passport company
    And user enter first and last name and email and title company
    And user enter mobile designation and nationlity company
    And user enters dob and visa number and visa expire date company
    And user uploads the files for passport photo eid and visa company
    When user select the compamny information for the registration company
    And user enter the compamny name and phone for the registration company
    And user enter trad licence number expiry date company
    And user enter trade licence source address and upload file company
    And user submit the files for the company Registration company
    Then verify the success message for the compamny registration company
    When user selects back to login button
    Then Verify page is redirected to the login page

