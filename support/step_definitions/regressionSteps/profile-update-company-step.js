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

Given('user navigates the login page for company update profile', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
  });
  
  When('user enter the crendential for the company update profile', async ({page}) => {
    const pageConstants = new PageConstants(page);
     await page.waitForLoadState("networkidle");
     await pageConstants.loginPage.enterUsername.type(username);
     await pageConstants.loginPage.enterpassword.type(password);
     await pageConstants.loginPage.submitButton.click();
  });
  
  Then('user should be redirected to the home page for company update profile', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
  });
  
  When('user select update profile for company updated', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(2000);
    await pageConstants.loginPage.logoutDrop.click();
    await pageConstants.loginPage.updateButton.click();
  });
  
  When('user update the infomation for company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(2000);
    const dropdownLocator = page.locator("//select[@id='title']");
    await dropdownLocator.selectOption({ label: 'Ms' });
    await pageConstants.passPage.visfirstName.clear();
    await pageConstants.passPage.visfirstName.type(fname);
    await pageConstants.passPage.vislastName.clear();
    await pageConstants.passPage.vislastName.type(lname);
  });
  
  When('user submit the infomation for company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.updateButton.click();
  });
  
  Then('verify success messge for the company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.updateMessage).toBeVisible();
  });