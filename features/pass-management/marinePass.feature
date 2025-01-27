Feature: Verify apply pass Service Availability

  Scenario: Verify apply multiple pass and delete funtionality for pass service availability
    Given user logged in and directed to the homepage
    When the user navigates to the services menu
    Then verify Apply Pass service option should be visible and accessible
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

    
