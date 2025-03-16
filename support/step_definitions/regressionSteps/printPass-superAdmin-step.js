const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../../test_data/userData.json');
const oneMonthData=require('../../../test_data/oneMonthData.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');

const approvalusername4=oneMonthData.sanityDataCompany.approveUsername4
const approvalpassword4=oneMonthData.sanityDataCompany.approvePassword4
let referceNumber;


Given('user navigates the login page for print pass', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
     
  });
  
  When('user enter the crendential for the print pass', async ({page}) => {
       const pageConstants = new PageConstants(page);
       await page.waitForTimeout(2000);
       await pageConstants.loginPage.enterUsername.type(approvalusername4);
       await pageConstants.loginPage.enterpassword.type(approvalpassword4);
       await pageConstants.loginPage.submitButton.click();
      
  });
  
  Then('user should be redirected to the home page for printpass', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
    await expect(pageConstants.passPage.passmanagementDrop).toBeVisible();
      
  });
  
  When('user select print pass for superadmin', async ({page}) => {
      const pageConstants = new PageConstants(page);
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(2000);
       await pageConstants.passPage.passManaDrop.click();
       await pageConstants.passPage.printPass.click();
       await page.waitForLoadState("networkidle");
       await page.waitForTimeout(8000);
       await pageConstants.passPage.approveEdit.click();
       referceNumber=await page.innerText("//label[normalize-space(text())='Pass Reference No']/following-sibling::div");
       console.log('edit passreference number ' + referceNumber);
       await pageConstants.passPage.donwloadPass.click();
       await pageConstants.passPage.okForAlert.click();
       await page.waitForTimeout(2000);
       //validation for confirmation message
       await pageConstants.passPage.okForAlert.click();
  });