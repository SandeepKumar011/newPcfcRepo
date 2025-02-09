
const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();

Then('DO NOT REGISTER section should be displayed', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.donotRegiMessage).toBeVisible();
  });
  
  Then('message should have proper instructions to be displayed', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.donotMessage).toBeVisible();
  });