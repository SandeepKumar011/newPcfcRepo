
const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const path = require('path');
const { faker } = require('@faker-js/faker');
const dataUtils = new DataUtils();

const uatData=require('../../../test_data/uat.json');
const usernamelogin=uatData.allData.username
const passpwordlogin=uatData.allData.password
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
    await pageConstants.loginPage.enterUsername.type(usernamelogin);
    await pageConstants.loginPage.enterpassword.type(passpwordlogin);
    await pageConstants.loginPage.submitButton.click();
  });

  Then('user should be redirected to the home page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
    await pageConstants.passPage.passmanagementDrop.click();
    await pageConstants.passPage.selectapplyGatePass.click();
  });
  
  Then('verify Apply Pass service option should be visible', async ({page}) => {
    const pageConstants = new PageConstants(page);
     await expect(pageConstants.passPage.passmanagementDrop).toBeVisible();
  });

  When('user select logout dropdown on home page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(2000);
    await pageConstants.loginPage.logoutDrop.click();
    await pageConstants.loginPage.logoutButton.click();
  });
  
  Then('verify user is redirected to the login page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.enterUsername).toBeVisible();
  });