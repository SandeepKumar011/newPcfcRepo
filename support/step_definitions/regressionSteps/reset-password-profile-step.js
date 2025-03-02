const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../../test_data/userData.json');
const oneDayData=require('../../../test_data/oneDayData.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');

const username=oneDayData.regressionDataCompany.username
const password=oneDayData.regressionDataCompany.password
const fname='auto'+faker.person.firstName();
const lname=faker.person.lastName();



Given('user navigates the login page for reset update profile', async ({}) => {
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
  });
  
  When('user enter the crendential for the reset update profile', async ({}) => {
    const pageConstants = new PageConstants(page);
        await page.waitForLoadState("networkidle");
        await pageConstants.loginPage.enterUsername.type(username);
        await pageConstants.loginPage.enterpassword.type(password);
        await pageConstants.loginPage.submitButton.click();
  });
  
  Then('user should be redirected to the home page for reset update profile', async ({}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
  });
  
  When('user select update profile for reset updated', async ({}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(2000);
    await pageConstants.loginPage.logoutDrop.click();
    await pageConstants.loginPage.changePasword.click();
  });
  
  When('user update the infomation for reset', async ({}) => {
       const pageConstants = new PageConstants(page);
       await page.waitForTimeout(2000);
       await pageConstants.loginPage.existingPwd.type('Login@345');
       await pageConstants.loginPage.newPwd.type(lname);
       await pageConstants.loginPage.confirmPwd.type(lname);
  });
  
  When('user submit the infomation for reset', async ({}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.loginPage.submitButton.click();
  });
  
  Then('verify success messge for the reset', async ({}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.updateMessage).toBeVisible();
  });