const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../PageConstants");
const { DataUtils } = require("../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();
const testData=require('../../test_data/userData.json')


Given(/^user navigates to the login page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
    
});

When(/^user enter the username on login page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.enterUsername.type(testData.globalData.username);
});

When(/^user enter the password on login page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
   await pageConstants.loginPage.enterpassword.type(testData.globalData.password);
});


When(/^user click on submit button on login page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
   await pageConstants.loginPage.submitButton.click();
});


Then(/^verify user is redirected to the home page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
});

When('user select logout button on home page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.loginPage.logoutDrop.click();
    await pageConstants.loginPage.logoutButton.click();
  });
  
  Then('verify logout verification message', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.loginPage.logoutVeriMessage).toBeVisible();
  });