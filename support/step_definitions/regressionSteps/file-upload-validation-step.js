const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const path = require('path');
const dataUtils = new DataUtils();
const wrongFile=path.join(process.cwd(), 'test_data/upload/txtFile.txt');
const uploadFile=path.join(process.cwd(), 'test_data/upload/416kb.jpg');


Given('the user uploads an image file type is {string}', async ({page}, arg) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.registrationPage.perFile.setInputFiles(wrongFile);
  });
  
  Then('the system should reject the file and display an error', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.registrationPage.uploadError).toBeVisible();
    await (pageConstants.registrationPage.uploadErrorOk).click();
  });
  
  Given('the user uploads an image file type {string} and size less than {string}', async ({page}, arg, arg1) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.registrationPage.perFile.setInputFiles(uploadFile);
  });
  
  Then('the image should upload successfully is display', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.registrationPage.afteruploadDelete).toBeVisible();
  });