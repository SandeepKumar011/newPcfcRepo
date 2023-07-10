const dayjs = require("dayjs");
const { expect } = require('@playwright/test');

class ComplicatedPage {
    constructor(page)
    {
        this.allButtons = page.locator('a[class*="et_pb_button_"]');
        this.firstButton = page.locator("a.et_pb_button_0");
        this.firstNameTextBox = page.locator("input#et_pb_contact_name_0");
        this.firstEmailTextBox = page.locator("input#et_pb_contact_email_0");
        this.firstMessageTextArea = page.locator("textarea#et_pb_contact_message_0");
        this.firstSubmitButon = page.locator("div#et_pb_contact_form_0 button:has-text('Submit')");
        this.sumNumberFirstTextBox = page.locator('xpath=(//input[@class="input et_pb_contact_captcha"])[1]')
    }
}

module.exports = {ComplicatedPage}