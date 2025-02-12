const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();

Then('verify company name phone licene number expiry date resource', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.companyPhone).toBeVisible();
    await expect(pageConstants.registrationPage.companyAddress).toBeVisible();
    await expect(pageConstants.registrationPage.companyName).toBeVisible();
    await expect(pageConstants.registrationPage.companyLicenceNumber).toBeVisible();
    const openCalendarExp = page.locator("//input[@id='tradeLicExpiryDate']");
    await expect(openCalendarExp).toBeVisible();
    const licenceSource = page.locator("//select[@id='tradeLicSource']");
    await expect(licenceSource).toBeVisible();
  });