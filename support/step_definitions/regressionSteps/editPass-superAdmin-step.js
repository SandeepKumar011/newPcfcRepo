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
const firstNameReal='automation';
const lastName=faker.person.lastName()
const visaNumber=faker.string.numeric({ length: 12 })
let referceNumber;
//login step in create hostuser

When('user select edit pass for updated information for super admin', async ({page}) => {
        const pageConstants = new PageConstants(page);
        await page.waitForLoadState("networkidle");
        await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
        await (pageConstants.passPage.passmanagementDrop).click();
        await (pageConstants.passPage.editDropOption).click();
        await page.waitForTimeout(2000);
        await pageConstants.passPage.approveEdit.click();

  });
  
  When('user update the information for edit pass super admin', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    const firstNameinput=page.locator("//input[@id='firstName']");
    await firstNameinput.clear();
    await firstNameinput.type(firstNameReal);
    referceNumber=await page.innerText("//label[normalize-space(text())='Pass Reference No']/following-sibling::div");
    console.log('edit passreference number ' + referceNumber);
   
  });
  
  When('submit the information for for edit super admin', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.finalSubmit.click();
    await page.waitForTimeout(7000);
  });
  
  Then('verify success message for the for edit super admin', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.successEditPass).toBeVisible();
  });
  
  When('search updated pass on the list page for super admin', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    await pageConstants.passPage.passManaDrop.click();
    await pageConstants.passPage.viewAllPassOption.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    await pageConstants.passPage.searchForPassRefence.type(referceNumber);
    await page.waitForTimeout(2000);
  });
  
  Then('verify updated pass for edit onm list page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    expect(await pageConstants.passPage.editPassValid).toBeVisible();
  });