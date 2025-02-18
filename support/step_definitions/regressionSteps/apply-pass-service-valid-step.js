
const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const path = require('path');
const { faker } = require('@faker-js/faker');
const dataUtils = new DataUtils();
const testData=require('../../../test_data/userData.json');
const wrongFile=path.join(process.cwd(), 'test_data/upload/txtFile.txt');
const uploadFile=path.join(process.cwd(), 'test_data/upload/416kb.jpg');


Given('user navigates the login page for pass', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
  });
  
  When('user enter the crendential for the pass Apply', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.enterUsername.type(testData.globalData.username);
    await pageConstants.loginPage.enterpassword.type(testData.globalData.password);
    await pageConstants.loginPage.submitButton.click();
  });
  
  Then('verify Apply Pass service option should be visible', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
     await expect(pageConstants.passPage.passmanagementDrop).toBeVisible();
  });