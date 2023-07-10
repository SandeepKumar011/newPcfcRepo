const { createBdd } = require('playwright-bdd');
const { Given, Then } = createBdd();
const { PageConstants } = require("../PageConstants");
const { DataUtils } = require("../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();

Given("I navigate to complicated page", async function ({page}) {
    const pageConstants = new PageConstants(page);
    await page.goto("/automation/");
    await pageConstants.automationPage.bigPageLink.click();
    await page.waitForLoadState("networkidle");
});

Then("I validate basic functionlaity on complicated page", async function ({page}) {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.complicatedPage.firstButton).toBeVisible();
    await pageConstants.complicatedPage.firstNameTextBox.type("this is test");
    await pageConstants.complicatedPage.sumNumberFirstTextBox.type("20");
    await pageConstants.complicatedPage.firstSubmitButon.click();
    await expect(pageConstants.complicatedPage.firstEmailTextBox).toHaveClass(new RegExp("et_contact_error"));
    await expect(pageConstants.complicatedPage.firstMessageTextArea).toHaveClass(new RegExp("et_contact_error"));
    await expect(pageConstants.complicatedPage.firstNameTextBox).not.toHaveClass(new RegExp("et_contact_error"));
})