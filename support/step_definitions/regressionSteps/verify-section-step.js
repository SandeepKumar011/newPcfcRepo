const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();

Then('the form should display profile document and contact detail', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.registrationPage.uiPassValidation).toBeVisible();
    await expect(pageConstants.registrationPage.firstNameInputField).toBeVisible();
    await expect(pageConstants.registrationPage.mobileInputField).toBeVisible();
  });