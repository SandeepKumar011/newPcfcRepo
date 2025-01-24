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
        this.hostCompanyUi=page.locator("//input[@id='hostCompanyName']");
        this.hcompanyselect=page.locator("//div[normalize-space(text())='HASCO GENERAL TRADING']");
        this.perpassAmountUi=page.locator("//input[@id='perPassAmount']");
        this.visaTypeUi=page.locator("//select[@id='searchVisaTypeIdStr']");
        this.eidUi=page.locator("//input[@id='searchEmiratesId']");
        this.dobUi=page.locator("//input[@id='dateOfBirth']");
        this.genderUi=page.locator("//select[@id='searchGender']");
        this.termsAndCondiUi=page.locator("//input[@id='acceptTermsCondition']");
    }
}

module.exports = {PassPage}