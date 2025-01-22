
const { LoginPage } = require("./page_objects/loginPage");
const { RegistrationPage } = require("./page_objects/RegistrationPage");

class PageConstants {
    constructor(page) {
        this.loginPage=new LoginPage(page);
        this.registrationPage=new RegistrationPage(page);
    }
}
    
module.exports = { PageConstants };