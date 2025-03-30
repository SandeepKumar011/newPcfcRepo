const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../../PageConstants");
const { expect } = require('@playwright/test');
const updateUser=require('../../../test_data/updateProfileData.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');

const loginusername=updateUser.individualUser.username
const loginpassword=updateUser.individualUser.password
const mobileNum=faker.string.numeric({ length: 12 })


Given('user navigates the login page for individual user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
  });
  
  When('user enter the crendential for individual user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    console.log('this is username' + loginusername);
    console.log('this is password' + loginpassword);
    await pageConstants.loginPage.enterUsername.type(loginusername);
    await pageConstants.loginPage.enterpassword.type(loginpassword);
    await pageConstants.loginPage.submitButton.click();
  });
  
  Then('user should be redirected to the home page for individual user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
    await expect(pageConstants.passPage.passmanagementDrop).toBeVisible();
  });
  
  When('user select the individual user profile for update', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.logoutDrop.click();
    await pageConstants.passPage.updateProfile.click();
  });
  
  When('user update the infomation for individual', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.visMobile.clear();
    await pageConstants.passPage.visMobile.type(mobileNum);
  });
  
  When('user submit the infomation for the individual', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.updateButton.click();
  });
  
  Then('verify update success message for the individual', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    await expect(pageConstants.passPage.confirmationUpdateuser).toBeVisible();
  });
  
  When('user select the logout option on dashboard page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await pageConstants.loginPage.logoutDrop.click();
    await pageConstants.loginPage.logoutButton.click();
  });
  
  Then('user should logout from the website', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.enterUsername).toBeVisible();
  });
  