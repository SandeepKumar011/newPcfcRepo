const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();


Given('the user navigates to the Company tab on registration page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.registrationPage.companyToggle.click();
    await page.waitForLoadState("networkidle");
  });
  
  Then('verify company address contact and address on registration page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.companyPhone).toBeVisible();
    await expect(pageConstants.registrationPage.companyAddress).toBeVisible();
    await expect(pageConstants.registrationPage.companyName).toBeVisible();
  });