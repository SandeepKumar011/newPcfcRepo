const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../test_data/userData.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');
const hCompany=testData.globalData.hostCompany
const emailForNotification=testData.globalData.emailNotification
const masterCardNo=testData.globalData.masterCard
const passportNumber='896587548956'
const cvnNo=testData.globalData.cvv
const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesId;
const actualEid=emid+dynamicNumber
const addedEid='784199221026589';
const visitDate=faker.helpers.arrayElement(['15','13','14']);
const particularDate=faker.helpers.arrayElement(['15', '16', '17', '18', '19', '20']);
const yearDob=faker.helpers.arrayElement(['2004', '2005']);
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Sep', 'Oct','Nov']);
const visDesignation=faker.helpers.arrayElement(['Ac Technician', 'Account Assistant','Admin']);
const fname=faker.person.firstName();
const lname=faker.person.lastName();
const emailId=faker.internet.email();
const mobileNum='788956897854';
const hoursToVisit='5';
const nationality=testData.globalData.national
const uploadFilePath=path.join(process.cwd(), 'test_data/upload/416kb.jpg');

When('user selects the port name {string} and enter number {string}', async ({page}, portname, passNumber) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.portAccess.click();
    await page.waitForLoadState("networkidle");

    let actualNumber;
    const stringToInt=parseInt(passNumber);
    console.log(stringToInt + 'this is int first number');
    if(isNaN(+(stringToInt))){
      actualNumber=parseInt(passNumber);
      console.log('Number is string so updating in integer values');
      actualNumber=faker.number.int({min:1, max:10})
      console.log(actualNumber + 'this is updated number')
    }
    else{
      actualNumber=parseInt(passNumber);
      if(actualNumber>=10){
        actualNumber=faker.number.int({min:1, max:10})
      }else{
        console.log('Number is not more than 10 so using same number');
      }
    }

    for(let i=1; i<=actualNumber; i++){
    await page.waitForSelector(`//select[@id='portsId']`, { state: 'visible' });
    await expect(pageConstants.passPage.portDropUi).toBeVisible();
    const dropdownLocator = page.locator("//select[@id='portsId']");
    await dropdownLocator.selectOption({ label: `${portname}` });
    }
  });
  