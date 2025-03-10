Feature: Image Upload Validations

  Scenario: Verify valid image uploads for profile photos

    Given the user navigates to the registration page for registration
    When the user attempts to load the registration page for registration
    Given the user uploads an image file type is "TEXT"
    Then the system should reject the file and display an error
    Given the user uploads an image file type "JPEG" and size less than "2MB"
    Then the image should upload successfully is display
    When user selects back to login button on registration page
    Then Verify page is redirected to the login page for registration