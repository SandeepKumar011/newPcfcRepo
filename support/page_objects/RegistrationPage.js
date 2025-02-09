const { faker } = require("@faker-js/faker");

class RegistrationPage
{
    constructor(page)
    {
        this.registrationLink=page.locator("//a[normalize-space(text())='Register Now']");
        this.donotRegistered=page.locator("//div[@id='dont_register']");
        this.donotRegiMessage=page.locator("//span[@id='tasreeh_service']");
        this.donotMessage=page.locator("//span[normalize-space(text())='Dubai Trade Login and Password.']");
        this.individualButton=page.locator("//button[@id='indButton']");
        this.defaultSelected=page.locator("//button[@class='tabBtn-left active']");
        this.dropdownOption=page.locator("//select[@id='visaTypeIdStr']");
        this.dropdownValues=page.locator("option");
        this.emiratesIdInputField=page.locator("//input[@id='emiratesId']");
        this.emiratesErrorMessage=page.locator("//label[@id='emiratesId-error']");
        this.firstNameInputField=page.locator("//input[@id='firstName']");
        this.titleField=page.locator("//select[@id='title']");
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
        this.uiPassValidation=page.locator("(//label[normalize-space(text())='Choose or Drag & Drop File'])[1]");
        this.uiPerValidation=page.locator("(//label[normalize-space(text())='Choose or Drag & Drop File'])[2]");
        this.companyName=page.locator("//input[@id='companyName']");
        this.companyToggle=page.locator("//button[@id='companyButton']");
        this.companyPhone=page.locator("//input[@id='phoneNumber']");
        this.companyLicenceNumber=page.locator("//input[@id='tradeLicNo']");
        this.companyAddress=page.locator("//textarea[@id='companyAddress']");
        this.companyFileUpload=page.locator("//input[@id='tradeLic']");
        this.backToginButton=page.locator("//button[@id='backToLogin']")
        this.enterUsername=page.locator("//input[@id='username']");
        this.uiBacktoLogin=page.locator("//label[normalize-space(text())='Back to Login']");
        this.uploadError=page.locator("//div[normalize-space(text())='Please upload a file of type pdf/jpg/gif/png.']");
        this.uploadErrorOk=page.locator("//button[normalize-space(text())='OK']");
        this.afteruploadDelete=page.locator("//label[normalize-space(text())='Delete']");
    }
}

module.exports = {RegistrationPage}