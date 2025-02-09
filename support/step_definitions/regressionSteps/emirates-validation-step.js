const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();

Given('the Visa Type is Resident for registration', async ({page}) => {
   const pageConstants = new PageConstants(page);
   await page.waitForLoadState("networkidle");
   const dropdownLocator = page.locator("//select[@id='visaTypeIdStr']");
   await dropdownLocator.selectOption({ label: 'Resident' });
  });
  
  Given('user enter Emirates id start with {string}', async ({page}, arg) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.registrationPage.emiratesIdInputField.type('1800')
    await pageConstants.registrationPage.passportnumberInputField.click();
  });
  
  Then('verify error messge for the emirates id', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.emiratesErrorMessage).toBeVisible();
  });
  
  When('user enter emirates id start with {string} for registration', async ({page}, arg) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.registrationPage.emiratesIdInputField.clear();
    await pageConstants.registrationPage.emiratesIdInputField.type('784199112345678')
    await pageConstants.registrationPage.passportnumberInputField.click();
  });
  
  Then('the ID should be accepted for registration', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.emiratesErrorMessage).not.toBeVisible();
  });
  