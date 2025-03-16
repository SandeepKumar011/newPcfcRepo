const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const path = require('path');
const { faker } = require('@faker-js/faker');
const dataUtils = new DataUtils();
const createuserData=require('../../../test_data/createuserData.json');
const loginUsername=createuserData.credentials.username
const loginPassword=createuserData.credentials.password
const firstName='auto'+faker.person.firstName()
const lastName=faker.person.lastName()
const visaNumber=faker.string.numeric({ length: 12 })


Given('user navigates the login page for add hostUser', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
  });
  
  When('user enter the crendential for the add hostUser', async ({page}) => {
    const pageConstants = new PageConstants(page);
       await page.waitForLoadState("networkidle");
       await pageConstants.loginPage.enterUsername.type(loginUsername);
       await pageConstants.loginPage.enterpassword.type(loginPassword);
       await pageConstants.loginPage.submitButton.click();
  });
  
  Then('user should be redirected to the home page for add hostUser', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
  });
  
  When('user enter the interan information for add hostUser', async ({page}) => {
          const pageConstants = new PageConstants(page);
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(2000);
          await pageConstants.passPage.userManagement.click();
          await pageConstants.passPage.createuser.click();
          const roleLocator = page.locator("//select[@id='roleIdStr']");
          await roleLocator.selectOption({ label: 'Security Company Approver Manager' });
          const genderDrop =page.locator("//select[@name='title']");
          await genderDrop.selectOption({ label: 'Mr' });
          await pageConstants.passPage.visfirstName.type(firstName);
          await pageConstants.passPage.vislastName.clear();
          await pageConstants.passPage.vislastName.type(lastName);
          await pageConstants.passPage.visMobile.clear();
          await pageConstants.passPage.visMobile.type(visaNumber);
          const locationLocator = page.locator("(//span[normalize-space(text())='None selected'])[1]");
          await locationLocator.click();
          await page.locator("//label[normalize-space(text())='Al Hamriya Port']").click()
          await pageConstants.passPage.visMobile.click();
          await page.waitForTimeout(2000);
          const passDuration = page.locator("//span[normalize-space(text())='None selected']");
          await passDuration.click();
         await page.locator("//label[normalize-space(text())='One Day Pass']").click()
  });
  
  When('enter the username passwrod and confirm password for hostUser', async ({page}) => {
       const pageConstants = new PageConstants(page);
       const username = page.locator("//input[@id='userName']");
       const usernamedata='auto'+faker.person.firstName()
       await username.type(usernamedata)
       const usernamepassword = page.locator("//input[@id='password']");
       await usernamepassword.type('Login@345')
       const usernameconfirmPass = page.locator("//input[@id='confirmPassword']");
       await usernameconfirmPass.type('Login@345')
  });
  
  When('submit the information for add hostUser on create page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    const submitt = page.locator("//input[@id='createUser']");
    await submitt.click()
  });
  
  Then('verify success message for the add hostUser', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(20000);
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.passPage.confirmationPay).toBeVisible();
  });
  
  When('search added hostUser on the list page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.userManagement.click();
    await pageConstants.passPage.serachuser.click();
  });
  
  Then('verify hostUser added information on list page', async ({page}) => {
        const pageConstants = new PageConstants(page);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(3000);
        await pageConstants.passPage.searchForPassRefence.type(firstName);
        await page.waitForTimeout(2000);
        await expect(pageConstants.passPage.validationsearchuser).toBeVisible();
  });