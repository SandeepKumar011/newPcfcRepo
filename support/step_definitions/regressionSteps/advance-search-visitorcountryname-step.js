
const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../../test_data/userData.json');
const oneDayData=require('../../../test_data/oneDayData.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');

const portName=oneDayData.regressionData.portName
const gateType=oneDayData.regressionData.gateType
const passDuration=oneDayData.regressionData.passDuration
const passType=oneDayData.regressionData.passType
const reasonVisit=oneDayData.regressionData.visitReason
const hCompany=oneDayData.regressionData.hostCompany
const visDesignation=faker.helpers.arrayElement(['Ac Technician', 'Account Assistant','Admin']);
const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesId;
const actualEid=emid+dynamicNumber
const particularDate=faker.helpers.arrayElement(['15', '16', '17', '18', '19', '20']);
const yearDob=faker.helpers.arrayElement(['2004', '2005']);
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Sep', 'Oct','Nov']);
const fname=faker.person.firstName();
const lname=faker.person.lastName();
const emailId=faker.internet.email();
const mobileNum=faker.string.numeric({ length: 12 })
const hoursToVisit='5';
const nationality=testData.globalData.national
const uploadFilePath=path.join(process.cwd(), 'test_data/upload/416kb.jpg');
let referceNumber;

Then('verify search by visitor nationality', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.hostCompanyUi.type(hCompany);
    await page.locator(`//div[normalize-space(text())='${hCompany}']`).click();
    await expect(pageConstants.passPage.forvalidationHostCom).toBeVisible();
  });