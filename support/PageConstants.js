
const { LoginPage } = require("./page_objects/loginPage");
const { RegistrationPage } = require("./page_objects/RegistrationPage");
const {PassPage}=require("./page_objects/passPage");

class PageConstants {
    constructor(page) {
        this.loginPage=new LoginPage(page);
        this.registrationPage=new RegistrationPage(page);
        this.passPage=new PassPage(page);
    }
}
    
module.exports = { PageConstants };