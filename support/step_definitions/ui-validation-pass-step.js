
const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../test_data/userData.json');

Given('user logged in and directed to the homepage', async ({page}) => {
  const pageConstants = new PageConstants(page);
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await pageConstants.loginPage.loginButton.click();
  await pageConstants.loginPage.enterUsername.type(testData.globalData.username);
  await pageConstants.loginPage.enterpassword.type(testData.globalData.password);
  await pageConstants.loginPage.submitButton.click();
  });
  
  When('the user navigates to the services menu', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.passmanagementDrop).toBeVisible();
  });
  
  Then('verify Apply Pass service option should be visible and accessible', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await (pageConstants.passPage.passmanagementDrop).click();
  });
  
  When('user select Apply gate pass on the management pass page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await (pageConstants.passPage.selectapplyGatePass).click();
  });
  
  Then('verify port entry gate and pass type is visible', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.portDropUi).toBeVisible();
    await expect(pageConstants.passPage.gateDropUi).toBeVisible();
    await expect(pageConstants.passPage.passTypeDropUi).toBeVisible();
  });
  
  Then('verify pass duration Purpose of visit and date of visit', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.passdurationDropUi).toBeVisible();
    await expect(pageConstants.passPage.purposeDropUi).toBeVisible();
    await expect(pageConstants.passPage.dateOfVisitDropUi).toBeVisible();
  });
  
  Then('host company name and per pass amount is field is visible', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.hostCompanyUi).toBeVisible();
    await expect(pageConstants.passPage.perpassAmountUi).toBeVisible();
  });
  
  When('user is redirected to the visitor Information', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.visaTypeUi).toBeVisible();
  });
  
  Then('verify visa type emirate id gender and dob is visible', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.visaTypeUi).toBeVisible();
    await expect(pageConstants.passPage.eidUi).toBeVisible();
    await expect(pageConstants.passPage.dobUi).toBeVisible();
  });
  
  When('user is redirected to the payment Information', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.perpassAmountUi).toBeVisible();
  });

  
Then(/^verify total payable pass amount should visible$/, async({page}) => {
	const pageConstants = new PageConstants(page);
  await expect(pageConstants.passPage.perpassAmountUi).toBeVisible();
});

Then(/^terms and condition check box should be visible$/, async({page}) => {
	const pageConstants = new PageConstants(page);
  await expect(pageConstants.passPage.termsAndCondiUi).toBeVisible();
});
