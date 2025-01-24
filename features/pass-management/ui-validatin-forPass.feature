Feature: Verify UI part for the Pass Service Availability

  Scenario: Validation of the UI for the pass service availability
    Given user logged in and directed to the homepage
    When the user navigates to the services menu
    Then verify Apply Pass service option should be visible and accessible
    When user select Apply gate pass on the management pass page
    Then verify port entry gate and pass type is visible
    And verify pass duration Purpose of visit and date of visit
    And host company name and per pass amount is field is visible
    When user is redirected to the visitor Information
    Then verify visa type emirate id gender and dob is visible
    When user is redirected to the payment Information
    Then verify total payable pass amount should visible
    And terms and condition check box should be visible
