Feature: Verify apply pass Service Availability for marine

  Scenario: Verify apply pass funtionality for the marine
    Given user navigates to the login page
    When user enter the username on login page
    And user enter the password on login page
    And user click on submit button on login page
    Then verify user is redirected to the home page
    When verify Apply Pass service option should be visible and accessible
    When user select Apply gate pass on the management pass page
    And user selects port access for apply marine pass
    And user enter all the information for pass information
    And user enter the infomation and seach visitor availability
    And user enter the infomation of visitor manually
    And user enter the invalid email address
    Then verify error message for the email address
    When user enter the valid email address for visitor
    And add the visitor on the visitor page
    Then verify user is added in the list
    When user submit the visitor information
    Then user should redirected to the payment page
    When user enter infomation for the payment and submit
    Then Verify payment successfull message
    When user select logout button on home page
    Then verify logout verification message
