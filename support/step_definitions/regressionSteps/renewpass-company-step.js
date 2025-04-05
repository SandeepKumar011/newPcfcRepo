
const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../../PageConstants");
const { expect } = require('@playwright/test');
const uatData=require('../../../test_data/uat.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');

const portName=uatData.renewCompany.portName
const gateType=uatData.renewCompany.gateType
const passDuration=uatData.renewCompany.passDuration
const passType=uatData.renewCompany.passType
const reasonVisit=uatData.renewCompany.visitReason
const hCompany=uatData.renewCompany.hostCompany
const visDesignation=faker.helpers.arrayElement(['Ac Technician', 'Account Assistant','Admin']);
const usernameLogin=uatData.renewCompany.username
const passwordLogin=uatData.renewCompany.password
const approvalusername=uatData.renewCompany.approveUsername
const approvalpassword=uatData.renewCompany.approvePassword
const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=uatData.allData.emiratesId;
const actualEid=emid+dynamicNumber
const masterCardNo=uatData.allData.masterCard
const cvnNo=uatData.allData.cvv
const particularDate=faker.helpers.arrayElement(['15', '16', '17', '18', '19', '20']);
const yearDob=faker.helpers.arrayElement(['2004', '2005']);
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Sep', 'Oct','Nov']);
const fname=faker.person.firstName();
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




Given('user navigates to the login page for renew company', async ({page}) => {      
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
  });
  
  When('user enter the credential for the login for renew company', async ({page}) => {
          const pageConstants = new PageConstants(page);
          await page.waitForLoadState("networkidle");
          await pageConstants.loginPage.enterUsername.type(usernameLogin)
          await pageConstants.loginPage.enterpassword.type(passwordLogin);
          await pageConstants.loginPage.submitButton.click();
  });
  
  Then('user redirected to the home page for renew company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
    await expect(pageConstants.passPage.passmanagementDrop).toBeVisible();
    await (pageConstants.passPage.passmanagementDrop).click();
    await (pageConstants.passPage.viewAllPassOption).click();
  });
  
  When('user search the pass for the renew pass company', async ({page}) => {
     const pageConstants = new PageConstants(page);
     await page.waitForLoadState("networkidle");
     await page.waitForTimeout(5000);
     referceNumber=oneMonthData.renewCompany.expiredEid
     await pageConstants.passPage.searchForPassRefence.type(referceNumber);
  });
  
  When('user entere the infomration for renew pass company', async ({page}) => {
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
  
  When('user submit the visitor information for the renew pass company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await (pageConstants.passPage.termsAndCondiUi).click();
    await pageConstants.passPage.finalSubmit.click();
    await page.waitForTimeout(7000);
  });
  
  When('user paid amount for the apply pass for the renew pass company', async ({page}) => {
  console.log('for one day pass there is not need for the payment');
  });
  
  Then('verify successfully messge for the renew pass company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.passPage.confirmationPay).toBeVisible();
    referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
    console.log('this is renew refence number'+ referceNumber);
  });