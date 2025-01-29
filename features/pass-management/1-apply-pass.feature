Feature: Verify apply pass Service Availability

  Scenario: Verify apply multiple pass and delete funtionality for pass service availability
    Given user logged in and directed to the homepage
    When the user navigates to the services menu
    Then verify Apply Pass service option should be visible and accessible
    When user select Apply gate pass on the management pass page
    Then user select port entry gate and pass type
    And user enters pass duration Purpose of visit and date of visit
    And user eneter host company name and per pass amount
    When user is redirected to the visitor Information for apply pass
    And user enter visa type emirate id gender and dob
    Then user search the visitor information
    When user enters the visitor all information and add
    Then verify visitor added manually in list
    When user enters the existing emirate id on apply gate pass page
    And user search the visitor information on the apply gate page
    Then verify pop for the existing visitor infomation
    And user selects yes then visitor infomation should filled
    Then verify visitor added with existing eid in list
    When user select visitor from list and select delete button
    Then verify vistor deleted message should display
    And user select terms and condition check box on apply page
    When user is redirected to the payment Information for apply pass
    Then verify total payable pass amount is paid on payment page
    When user select logout button on home page
    Then verify logout verification message

