const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const path = require('path');
const { faker } = require('@faker-js/faker');
const dataUtils = new DataUtils();
const uatData=require('../../../test_data/uat.json');
const wrongFile=path.join(process.cwd(), 'test_data/upload/txtFile.txt');
const uploadFile=path.join(process.cwd(), 'test_data/upload/416kb.jpg');

const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=uatData.allData.emiratesIdRegis;
const actualEid=emid+dynamicNumber
const passportnumber=faker.string.numeric({ length: 8 })
const yearDob=uatData.allData.dobYear
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Jan', 'Feb','Mar','Apr']);
const particularDate=faker.helpers.arrayElement(['20', '21','22','23']);
const companyMobile=uatData.allData.companyMobile
const firstName=faker.person.firstName()
const lastName=faker.person.lastName()
const emailIdd=faker.internet.email();
const visaNumber=faker.string.numeric({ length: 12 })
const nationality=uatData.allData.national
const more2mbFilePath=path.join(process.cwd(), 'test_data/upload/rangecar.jpg');
const uploadFilePath=path.join(process.cwd(), 'test_data/upload/416kb.jpg');


When('user upload size more than two mb for company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.registrationPage.companyFileUpload.setInputFiles(more2mbFilePath);
  });
  
  Then('verify error message for the file size', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.moreThan2mb).toBeVisible();
    await pageConstants.registrationPage.uploadErrorOk.click();
  });
  
  Then('user upload size less than two mb for company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.registrationPage.companyFileUpload.setInputFiles(uploadFilePath);
  });
  
  Then('verify there should not be display error messge', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.afteruploadDeleteCom).toBeVisible();
  });