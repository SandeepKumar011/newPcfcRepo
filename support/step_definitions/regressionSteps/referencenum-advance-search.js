
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


When('user select advance search on view all passes page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.passmanagementDrop.click();
    await pageConstants.passPage.viewAllPassOption.click();
    await pageConstants.passPage.advanceSearchButton.click();
  });
  
  Then('verify search by passreferce number on list page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.referenceInput.type("6589548754")
    await pageConstants.passPage.searcgButton.click();
  });