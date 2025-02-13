
const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const path = require('path');
const { faker } = require('@faker-js/faker');
const dataUtils = new DataUtils();
const testData=require('../../../test_data/userData.json');
const wrongFile=path.join(process.cwd(), 'test_data/upload/txtFile.txt');
const uploadFile=path.join(process.cwd(), 'test_data/upload/416kb.jpg');

const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesIdRegis;
const actualEid=emid+dynamicNumber
const passportnumber=faker.string.numeric({ length: 8 })
const yearDob=testData.globalData.dobYear
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Jan', 'Feb','Mar','Apr']);
const particularDate=faker.helpers.arrayElement(['20', '21','22','23']);
const companyMobile=testData.globalData.companyMobile
const firstName=faker.person.firstName()
const lastName=faker.person.lastName()
const emailIdd=faker.internet.email();
const visaNumber=faker.string.numeric({ length: 12 })
const nationality=testData.globalData.national
const uploadFilePath=path.join(process.cwd(), 'test_data/upload/416kb.jpg');

When('user not enter trade licence number and submit', async ({page}) => {
         const pageConstants = new PageConstants(page);
         await pageConstants.registrationPage.companyName.fill(firstName);
         //lic source
         await page.waitForTimeout(2000);
         const licenceSource = page.locator("//select[@id='tradeLicSource']");
         await licenceSource.selectOption({ label: 'DED' });
         await pageConstants.registrationPage.companyAddress.fill(lastName);
         await pageConstants.registrationPage.companyFileUpload.setInputFiles(uploadFilePath);
         await pageConstants.registrationPage.submitInfo.click();
  });
  
  Then('verify error message for the licence number', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.compnayLicenceNumError).toBeVisible();
  });
  
  When('user not enter trade licence expire and submit', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.compnayPhoneError).toBeVisible();
  });
  
  Then('verify error message for the licence expire', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.compnayLicenceExpireError).toBeVisible();
  });