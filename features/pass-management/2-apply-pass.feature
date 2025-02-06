Feature: Verify apply pass Service Availability

  Scenario: Verify apply multiple pass and delete funtionality for pass service availability
    Given user navigates to the login page
    When user enter the username on login page
    And user enter the password on login page
    And user click on submit button on login page
    Then verify user is redirected to the home page
    When verify Apply Pass service option should be visible and accessible
    And user select Apply gate pass on the management pass page
    Then user select port entry gate and pass type
    And user enters pass duration Purpose of visit and date of visit
    And user eneter host company name and per pass amount
    When user is redirected to the visitor Information for apply pass
    And user enter visa type emirate id gender and dob
    Then user search the visitor information
    When user enters the visitor all information and add
    Then verify visitor added manually in list
    And user select terms and condition check box on apply page
    When user is redirected to the payment Information for apply pass
    Then verify total payable pass amount is paid on payment page
    When user select logout button on home page
    Then verify logout verification message
    When user cancelled apply pass on the list page
    Then verify confirmation message for the cancelled
    When user search cancelled pass on list page
    Then verify status of cancelled pass should be expired
    When user select logout button on home page
    Then verify logout verification message
