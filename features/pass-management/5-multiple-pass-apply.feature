Feature: Verify apply pass Service Availability

  Scenario Outline: Verify apply multiple pass and delete funtionality for pass service availability
    Given user navigates to the login page
    When user enter the username on login page
    And user enter the password on login page
    And user click on submit button on login page
    Then verify user is redirected to the home page
    When verify Apply Pass service option should be visible and accessible
    When user select Apply gate pass on the management pass page
    When user selects the port name "<portname>" and enter number "<passNumber>"
    When user select logout button on home page
    Then verify logout verification message

    Examples:
    |portname|passNumber|
    |Port Rashid|1|
