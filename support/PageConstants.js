const {BasePage} = require("./page_objects/BasePage");
const {ComplicatedPage} = require("./page_objects/ComplicatedPage");
const {AutomationPage} = require("./page_objects/AutomationPage");
const {FakePricingPage} = require("./page_objects/FakePricingPage");

class PageConstants {
    constructor(page) {
        this.complicatedPage = new ComplicatedPage(page);
        this.basePage = new BasePage(page);
        this.automationPage = new AutomationPage(page);
        this.fakePricingPage = new FakePricingPage(page);
    }
}
    
module.exports = { PageConstants };