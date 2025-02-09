const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();

Then('Individual Registration should be selected by default', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.defaultSelected).toBeVisible();
  });