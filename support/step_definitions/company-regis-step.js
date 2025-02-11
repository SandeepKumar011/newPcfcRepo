const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../PageConstants");
const { DataUtils } = require("../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();
const testData=require('../../test_data/userData.json');
const { faker } = require('@faker-js/faker');
const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesIdRegis;
const actualEid=emid+dynamicNumber
const passportnumber=faker.string.numeric({ length: 8 })
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Jan', 'Feb','Mar','Apr']);
const particularDate=faker.helpers.arrayElement(['20', '21','22','23']);
const mobileNumber=testData.globalData.companyMobile
const firstName=faker.person.firstName()
const lastName=faker.person.lastName()
const uploadFilePath=path.join(process.cwd(), 'test_data/upload/416kb.jpg');

When('user select the compamny information for the registration', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.registrationPage.companyToggle.click();
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.registrationPage.companyName).toBeVisible();
  });
  
  When('user enter the compamny name and phone for the registration', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.registrationPage.companyName.fill(firstName);
    await pageConstants.registrationPage.companyPhone.fill(mobileNumber);
  });
  
  When('user enter trad licence number expiry date', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.registrationPage.companyLicenceNumber.fill(passportnumber);
  });
  
  When('user enter trade licence source address and upload file', async ({page}) => {
    const pageConstants = new PageConstants(page);
    //licence expire date
    await page.waitForTimeout(5000);
    const openCalendarExp = page.locator("//input[@id='tradeLicExpiryDate']");
    await openCalendarExp.click();
    const openYearExp=page.locator("(//th[@class='datepicker-switch'])[1]")
    await openYearExp.click();
    const openYearListExp=page.locator("(//th[@class='datepicker-switch'])[2]")
    await openYearListExp.click();
    const selectYearExp=page.locator(`//span[normalize-space(text())='${futureYear}']`)
    await selectYearExp.click();
    const selectMonthExp=page.locator(`//span[normalize-space(text())='${monthDob}']`)
    await selectMonthExp.click();
    const selectDateExp=page.locator(`//td[normalize-space(text())='${particularDate}']`)
    await selectDateExp.click();
    //lic source
    await page.waitForTimeout(5000);
    const licenceSource = page.locator("//select[@id='tradeLicSource']");
    await licenceSource.selectOption({ label: 'DED' });
    await pageConstants.registrationPage.companyAddress.fill(lastName);
    await pageConstants.registrationPage.companyFileUpload.setInputFiles(uploadFilePath);
  });

  
When(/^user submit the files for the company Registration$/, async ({page}) => {
  const pageConstants = new PageConstants(page);
  await pageConstants.registrationPage.submitInfo.click();
});


Then(/^verify the success message for the compamny registration$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(7000);
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.registrationPage.successMess).toBeVisible();
});


When(/^user selects back to login button for company$/, async({page}) => {
  const pageConstants = new PageConstants(page);
  await pageConstants.registrationPage.backToginButton.click();
});

Then(/^Verify page is redirected to the login page for company$/, async({page}) => {
	const pageConstants = new PageConstants(page);
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(5000);
  await page.waitForSelector(`//input[@id='username']`, { state: 'visible' });
  await expect(pageConstants.registrationPage.enterUsername).toBeVisible();
});
