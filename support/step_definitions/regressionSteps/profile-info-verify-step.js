const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();

Then('verify first name last name dob and Gender should displayed', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.firstNameInputField).toBeVisible();
    await expect(pageConstants.registrationPage.lastnameInputField).toBeVisible();
    await expect(pageConstants.registrationPage.Dob).toBeVisible();
    await expect(pageConstants.registrationPage.titleField).toBeVisible();
  });
  