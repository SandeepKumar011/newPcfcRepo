const { createBdd } = require('playwright-bdd');
const { Given, Then } = createBdd();
const { PageConstants } = require("../PageConstants");
const { DataUtils } = require("../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();

Given("I navigate to fake pricing page", async function ({page}) {
    const pageConstants = new PageConstants(page);
    await page.goto("/automation/");
    await pageConstants.automationPage.fakePricingLink.click();
    await page.waitForLoadState("networkidle");
});

Then("I validate basic functionlaity on fake pricing page", async function ({page}) {
    const pageConstants = new PageConstants(page);
    for(const planTitle of await pageConstants.fakePricingPage.allPlanTitle.all())
    {
        console.log(await planTitle.textContent());
    }
    for(const planPrice of await pageConstants.fakePricingPage.allPlanRates.all())
    {
        console.log(await planPrice.textContent());
    }
})