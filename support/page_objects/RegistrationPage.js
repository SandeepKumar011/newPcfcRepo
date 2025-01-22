class RegistrationPage
{
    constructor(page)
    {
        this.registrationLink=page.locator("//a[normalize-space(text())='Register Now']");
        this.donotRegistered=page.locator("//div[@id='dont_register']");
        this.donotRegiMessage=page.locator("//span[@id='tasreeh_service']");
        this.individualButton=page.locator("//button[@id='indButton']");
        this.dropdownOption=page.locator("//select[@id='visaTypeIdStr']");
        this.dropdownValues=page.locator("option");
        this.emiratesIdInputField=page.locator("//input[@id='emiratesId']");
        this.emiratesErrorMessage=page.locator("//label[@id='emiratesId-error']");
        this.firstNameInputField=page.locator("//input[@id='firstName']");
        this.lastnameInputField=page.locator("//input[@id='lastName']");
        this.emaiIdInputField=page.locator("//input[@id='emailId']");
        this.mobileInputField=page.locator("//input[@id='mobileNumber']");
        this.passportnumberInputField=page.locator("//input[@id='passportNo']");
        this.nationalInputField=page.locator("//input[@id='nationalityValue']");
        this.selectnationality=page.locator(`//div[normalize-space(text())='India']`);
        this.visanumberInputField=page.locator("//input[@id='visaNumber']");
        this.Dob=page.locator("//label[normalize-space(text())='Date of Birth']");
        this.passFile=page.locator("//input[@id='passport']");
        this.perFile=page.locator("//input[@id='pic']");
        this.eidFile=page.locator("//input[@id='eid']");
        this.visaFile=page.locator("//input[@id='visa']");
        this.submitInfo=page.locator("//input[@id='register']");
        this.successMess=page.locator("//label[@class='successCard-header']");
    }
}

module.exports = {RegistrationPage}