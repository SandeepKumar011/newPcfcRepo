class LoginPage
{
    constructor(page)
    {
        this.loginButton=page.locator("//div[normalize-space(text())='Login']");
        this.enterUsername=page.locator("//input[@id='username']");
        this.enterpassword=page.locator("//input[@id='password']");
        this.submitButton=page.locator("//button[@id='submitid']");
        this.dashboardValidation=page.locator("(//a[normalize-space(text())='Dashboard'])[1]");
        this.logoutDrop=page.locator("//a[@id='userNameId']")
        this.logoutButton=page.locator("//a[normalize-space(text())='Logout']");
        this.logoutVeriMessage=page.locator("//span[normalize-space(text())='You have been logged out successfully.']")
    }
}

module.exports = {LoginPage}