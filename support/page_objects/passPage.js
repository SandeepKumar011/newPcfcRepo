class PassPage
{
    constructor(page)
    {
        this.portAccess=page.locator("//input[@id='portAccess']");
        this.passmanagementDrop=page.locator("//a[normalize-space(text())='Pass Management']");
        this.selectapplyGatePass=page.locator("//a[normalize-space(text())='Apply Gate Pass']");
        this.portDropUi=page.locator("//select[@id='portsId']");
        this.gateDropUi=page.locator("//select[@id='gateIdStr']");
        this.passTypeDropUi=page.locator("//select[@id='passTypeIdStr']");
        this.passdurationDropUi=page.locator("//select[@id='passDurationIdStr']");
        this.purposeDropUi=page.locator("//select[@id='reasonOfVisitIdStr']");
        this.dateOfVisitDropUi=page.locator("//input[@id='dateOfVisitStr']");
        this.visitHour=page.locator("//input[@id='dateOfVisitHour']");
        this.visitMinutes=page.locator("//input[@id='dateOfVisitMin']");
        this.hostCompanyUi=page.locator("//input[@id='hostCompanyName']");
        this.hcompanyselect=page.locator("//div[normalize-space(text())='HASCO GENERAL TRADING']");
        this.perpassAmountUi=page.locator("//input[@id='perPassAmount']");
        this.visaTypeUi=page.locator("//select[@id='searchVisaTypeIdStr']");
        this.eidUi=page.locator("//input[@id='searchEmiratesId']");
        this.dobUi=page.locator("//input[@id='dateOfBirth']");
        this.genderUi=page.locator("//select[@id='searchGender']");
        this.termsAndCondiUi=page.locator("//input[@id='acceptTermsCondition']");
        this.searchButton=page.locator("//input[@id='searchVisitor']");
        this.errorValidManually=page.locator("//div[@class='text-danger']");
        this.visfirstName=page.locator("//input[@id='firstName']");
        this.vislastName=page.locator("//input[@id='lastName']");
        this.visemail=page.locator("//input[@id='email']");
        this.visMobile=page.locator("//input[@id='mobileNumber']");
        this.vispassPortNumber=page.locator("//input[@id='passportNo']");
        this.visNationalField=page.locator("//input[@id='nationalityValue']");
        this.selectVisNationality=page.locator(`//div[normalize-space(text())='India']`);
        this.visCompany=page.locator("//input[@id='vistorCompanyName']");
        this.passportFile=page.locator("//input[@name='Passport']");
        this.personalFile=page.locator("//input[@name='Photo']");
        this.eidFile=page.locator("//input[@name='Emirates Id']");
        this.supportingaFile=page.locator("//input[@name='Supporting Documents']");
        this.personalPic=page.locator("(//input[@id='existingUserFilePath'])[1]")
        this.passportup=page.locator("(//input[@id='existingUserFilePath'])[2]")
        this.suppportDocUp=page.locator("(//input[@id='existingUserFilePath'])[3]")
        this.eidUp=page.locator("(//input[@id='existingUserFilePath'])[4]")
        this.dnaUp=page.locator("(//input[@id='existingUserFilePath'])[5]")
        this.addVisitor=page.locator("//input[@id='addVisitor']");
        this.editButton=page.locator("(//a[@data-bind='click: $root.editUser'])[1]");
        this.deletButton=page.locator("(//a[@data-bind='click: $root.deleteUser'])[2]");
        this.yesConfirm=page.locator("//button[normalize-space(text())='Yes,Confirm Details']");
        this.deleteYes=page.locator("//button[@class='btn btn-primary bootbox-accept']");
        this.finalSubmit=page.locator("//input[@id='submitId']");
        this.creditDebit=page.locator("//span[normalize-space(text())='Debit/Credit']");
        this.masterCard=page.locator("//img[@id='MasterCard']");
        this.paymentTermCond=page.locator("//span[normalize-space(text())='for this payment']");
        this.agreeandPay=page.locator("//button[@id='agree']");
        this.cardNumberInput=page.locator("//input[@id='card_number']");
        this.cvnInput=page.locator("//input[@id='card_cvn']");
        this.nextButton=page.locator("//input[@name='commit']");
        this.finalPay=page.locator("//input[@name='commit']");
        this.confirmationPay=page.locator("//label[@class='successCard-header']");
    }
}

module.exports = {PassPage}