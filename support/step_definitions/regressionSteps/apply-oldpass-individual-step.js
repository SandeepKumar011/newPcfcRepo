const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../../test_data/userData.json');
const oneDayData=require('../../../test_data/oneDayData.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');

const portName=oneDayData.regressionDataIndividual.portName
const gateType=oneDayData.regressionDataIndividual.gateType
const passDuration=oneDayData.regressionDataIndividual.passDuration
const passType=oneDayData.regressionDataIndividual.passType
const reasonVisit=oneDayData.regressionDataIndividual.visitReason
const hCompany=oneDayData.regressionDataIndividual.hostCompany
const username=oneDayData.regressionDataIndividual.username
const password=oneDayData.regressionDataIndividual.password
const actualEid=oneDayData.regressionDataIndividual.existingEid
const visDesignation=faker.helpers.arrayElement(['Ac Technician', 'Account Assistant','Admin']);
const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesId;
const particularDate=faker.helpers.arrayElement(['15', '16', '17', '18', '19', '20']);
const yearDob=faker.helpers.arrayElement(['2004', '2005']);
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Sep', 'Oct','Nov']);
const fname='auto'+faker.person.firstName();
const lname=faker.person.lastName();
const emailId=faker.internet.email();
const mobileNum=faker.string.numeric({ length: 12 })
const hoursToVisit='5';
const nationality=testData.globalData.national
const uploadPic=path.join(process.cwd(), 'test_data/upload/pic.png');
const uploadPassport=path.join(process.cwd(), 'test_data/upload/passport.pdf');
const uploadEid=path.join(process.cwd(), 'test_data/upload/EID.pdf');
const uploadSupport=path.join(process.cwd(), 'test_data/upload/sample.pdf');
let referceNumber;


Given('user navigates the login page for individual', async ({page}) => {      
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
  });
  
  When('user enter the crendential for the individual', async ({page}) => {      
   const pageConstants = new PageConstants(page);
          await page.waitForLoadState("networkidle");
          await pageConstants.loginPage.enterUsername.type(username);
          await pageConstants.loginPage.enterpassword.type(password);
          await pageConstants.loginPage.submitButton.click();
  });
  
  Then('user should be redirected to the home page for individual', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible(); 
    await pageConstants.passPage.passmanagementDrop.click();
    await pageConstants.passPage.selectapplyGatePass.click();
  });
  
  When('user enter the infomation for pass for individual', async ({page}) => {
         const pageConstants = new PageConstants(page);
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(2000);
          await pageConstants.passPage.fromoldPassButton.click();
          await page.waitForTimeout(2000);
          await pageConstants.passPage.passReferenceInputoldPass.type(actualEid);
          await pageConstants.passPage.oldPassSubmit.click();
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(2000);
          await pageConstants.passPage.editButton.click();
          await page.waitForTimeout(2000);
          await pageConstants.passPage.okForAlert.click();
          await page.waitForTimeout(2000);
          await expect(pageConstants.passPage.dateOfVisitDropUi).toBeVisible();
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
  
  When('user enter infomation for the visitor for individual', async ({page}) => {
    const pageConstants = new PageConstants(page);
    console.log('there is not need to enter visitor infomation');
              
  });
  
  When('user apply the pass for one day for individual', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.addVisitor.click();
    await page.waitForTimeout(10000);
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(`(//a[@data-bind='click: $root.editUser'])[1]`, { state: 'visible' });
    await expect(pageConstants.passPage.editButton).toBeVisible();
    await (pageConstants.passPage.termsAndCondiUi).click();
    await pageConstants.passPage.finalSubmit.click();
    await page.waitForTimeout(10000);
  });
  
  Then('verify confirmation message for individual', async ({page}) => {
             const pageConstants = new PageConstants(page);
              await page.waitForLoadState("networkidle");
              await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
              await expect(pageConstants.passPage.confirmationPay).toBeVisible();
              referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
              console.log('this is added refence number'+ referceNumber);
  });