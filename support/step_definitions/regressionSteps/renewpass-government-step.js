const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../../PageConstants");
const { expect } = require('@playwright/test');
const uatData=require('../../../test_data/uat.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');

const portName=uatData.renewDataGov.portName
const gateType=uatData.renewDataGov.gateType
const passDuration=uatData.renewDataGov.passDuration
const passType=uatData.renewDataGov.passType
const reasonVisit=uatData.renewDataGov.visitReason
const hCompany=uatData.renewDataGov.hostCompany
const username=uatData.renewDataGov.username
const password=uatData.renewDataGov.password
const actualEid=uatData.renewDataGov.existingEid
const visDesignation=faker.helpers.arrayElement(['Ac Technician', 'Account Assistant','Admin']);
const dynamicNumber=faker.string.numeric({ length: 8 });
const emid=uatData.allData.emiratesId;
const particularDate=faker.helpers.arrayElement(['15', '16', '17', '18', '19', '20']);
const yearDob=faker.helpers.arrayElement(['2004', '2005']);
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Sep', 'Oct','Nov']);
const fname='auto'+faker.person.firstName();
const lname=faker.person.lastName();
const emailId=faker.internet.email();
const mobileNum=faker.string.numeric({ length: 12 })
const hoursToVisit='5';
const nationality=uatData.allData.national
const uploadPic=path.join(process.cwd(), 'test_data/upload/pic.png');
const uploadPassport=path.join(process.cwd(), 'test_data/upload/passport.pdf');
const uploadEid=path.join(process.cwd(), 'test_data/upload/EID.pdf');
const uploadSupport=path.join(process.cwd(), 'test_data/upload/sample.pdf');
let referceNumber;


Given('user navigates to the login page for renew government', async ({}) => {
  const pageConstants = new PageConstants(page);
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await pageConstants.loginPage.loginButton.click();
  });
  
  When('user enter the credential for the login for renew government', async ({}) => {
            const pageConstants = new PageConstants(page);
            await page.waitForLoadState("networkidle");
            await pageConstants.loginPage.enterUsername.type(username)
            await pageConstants.loginPage.enterpassword.type(password);
            await pageConstants.loginPage.submitButton.click();
  });
  
  Then('user redirected to the home page for renew government', async ({}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
    await expect(pageConstants.passPage.passmanagementDrop).toBeVisible();
    await (pageConstants.passPage.passmanagementDrop).click();
    await (pageConstants.passPage.viewAllPassOption).click();
  });
  
  When('user search the pass for the renew pass government', async ({}) => {
    const pageConstants = new PageConstants(page);
     await page.waitForLoadState("networkidle");
     await page.waitForTimeout(5000);
     referceNumber=oneDayData.renewDataGov.expiredEid
     await pageConstants.passPage.searchForPassRefence.type(referceNumber);
  });
  
  When('user entere the infomration for renew pass government', async ({}) => {
   const pageConstants = new PageConstants(page);
      await page.waitForLoadState("networkidle");
      await (pageConstants.passPage.threeDot).click();
      await pageConstants.passPage.viewRenew.click();
      await page.waitForTimeout(7000);
      await pageConstants.passPage.renewSubmit.click();
      await page.waitForTimeout(3000);
      await page.waitForTimeout(5000);
      const today = new Date();
      const dateString = today.toLocaleDateString();
      const parts = dateString.split("/");
      const day = parts[1];
      console.log('this is before converted date' + dateString);
      const intDate=parseInt(day);
      const visitDate=(intDate+2);
      console.log('this is actual visit date ' + visitDate);
      await page.waitForTimeout(2000);
  
      if(visitDate<26){
        const openCalendardob=page.locator("//input[@id='dateOfVisitStr']");
        await openCalendardob.click();
        const selectDatedob=page.locator(`(//td[normalize-space(text())='${visitDate}'])[1]`)
        await selectDatedob.click();
    }
    else if(visitDate<29){
      const openCalendardob=page.locator("//input[@id='dateOfVisitStr']");
      await openCalendardob.click();
      const selectDatedob=page.locator(`(//td[normalize-space(text())='1'])[2]`)
      await selectDatedob.click();
    }
  
  else if(visitDate<34){
   const openCalendardob=page.locator("//input[@id='dateOfVisitStr']");
   await openCalendardob.click();
   const selectDatedob=page.locator(`(//td[normalize-space(text())='3'])[2]`)
   await selectDatedob.click();
  }
  
  await page.waitForTimeout(2000);
  await pageConstants.passPage.visitHour.type(hoursToVisit);
  await pageConstants.passPage.visitMinutes.type(hoursToVisit);
  });
  
  When('user submit the visitor information for the renew pass government', async ({}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await (pageConstants.passPage.termsAndCondiUi).click();
    await pageConstants.passPage.finalSubmit.click();
    await page.waitForTimeout(7000);
  });
  
  When('user paid amount for the apply pass for the renew pass government', async ({}) => {
    console.log('for one day pass there is not need for the payment');
  });
  
  Then('verify successfully messge for the renew pass government', async ({}) => {
  const pageConstants = new PageConstants(page);
      await page.waitForLoadState("networkidle");
      await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
      await expect(pageConstants.passPage.confirmationPay).toBeVisible();
      referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
      console.log('this is renew refence number'+ referceNumber);
  });