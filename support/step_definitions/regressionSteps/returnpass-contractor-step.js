const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../../test_data/userData.json');
const oneDayData=require('../../../test_data/oneDayData.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');

const portName=oneDayData.regressionDataContractor.portName
const gateType=oneDayData.regressionDataContractor.gateType
const passDuration=oneDayData.regressionDataContractor.passDuration
const passType=oneDayData.regressionDataContractor.passType
const reasonVisit=oneDayData.regressionDataContractor.visitReason
const hCompany=oneDayData.regressionDataContractor.hostCompany
const username=oneDayData.regressionDataContractor.username
const password=oneDayData.regressionDataContractor.password
const approvalusername=oneDayData.regressionDataContractor.approveUsername
const approvalpassword=oneDayData.regressionDataContractor.approvePassword
const visDesignation=faker.helpers.arrayElement(['Ac Technician', 'Account Assistant','Admin']);
const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesId;
const actualEid=emid+dynamicNumber;
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

Given('user navigates the login page for contractor return', async ({page}) => {
  const pageConstants = new PageConstants(page);
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await pageConstants.loginPage.loginButton.click();
});

When('user enter the crendential for the contractor return', async ({page}) => {
  const pageConstants = new PageConstants(page);
      await page.waitForLoadState("networkidle");
      await pageConstants.loginPage.enterUsername.type(username);
      await pageConstants.loginPage.enterpassword.type(password);
      await pageConstants.loginPage.submitButton.click();
});

Then('user should be redirected to the home page for contractor return', async ({page}) => {
  const pageConstants = new PageConstants(page);
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(2000);
  await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
  await pageConstants.passPage.passmanagementDrop.click();
  await pageConstants.passPage.selectapplyGatePass.click();
});

When('user enter the infomation for pass for contractor return', async ({page}) => {
          const pageConstants = new PageConstants(page);
          await page.waitForTimeout(5000);
          await page.waitForSelector(`//select[@id='portsId']`, { state: 'visible' });
          await expect(pageConstants.passPage.portDropUi).toBeVisible();
          await page.waitForTimeout(2000);
          const dropdownPort = page.locator("//select[@id='portsId']");
          await dropdownPort.selectOption({ label: portName });
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(2000);
          const dropdownGate = page.locator("//select[@id='gateIdStr']");
          await dropdownGate.selectOption({ label: gateType });
          await page.waitForTimeout(2000);
          const dropdownPassType = page.locator("//select[@id='passTypeIdStr']");
          await dropdownPassType.selectOption({ label: passType });
           await expect(pageConstants.passPage.passdurationDropUi).toBeVisible();
           await page.waitForTimeout(2000);
          const dropdownPassDura = page.locator("//select[@id='passDurationIdStr']");
          await dropdownPassDura.selectOption({ label: passDuration });
          await page.waitForLoadState("networkidle");
          await expect(pageConstants.passPage.purposeDropUi).toBeVisible();
          await page.waitForTimeout(2000);
          const dropdownreason = page.locator("//select[@id='reasonOfVisitIdStr']");
          await dropdownreason.selectOption({ label: reasonVisit });
          await page.waitForLoadState("networkidle");
          await expect(pageConstants.passPage.dateOfVisitDropUi).toBeVisible();
          await page.waitForTimeout(5000);
          const today = new Date();
          const dateString = today.toLocaleDateString();
          const parts = dateString.split("/");
          const day = parts[1];
          console.log('this is before converted date' + dateString);
          const intDate=parseInt(day);
          const visitDate=(intDate+2);
          console.log('this is actual visit date ' + visitDate);
          await page.waitForTimeout(3000);
      
          if(visitDate<26){
            const openCalendardob=page.locator("//input[@id='dateOfVisitStr']");
            await openCalendardob.click();
            const selectDatedob=page.locator(`(//td[normalize-space(text())='${visitDate}'])[1]`)
            await selectDatedob.click();
        }
        else if(visitDate<=29){
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
          await pageConstants.passPage.hostCompanyUi.type(hCompany);
          await page.locator(`//div[normalize-space(text())='${hCompany}']`).click();
});

When('user enter infomation for the visitor for contractor return', async ({page}) => {
   const pageConstants = new PageConstants(page);
      await page.waitForTimeout(2000);
      const dropdownVisa = page.locator("//select[@id='searchVisaTypeIdStr']");
      await dropdownVisa.selectOption({ label: 'Resident' });
      await pageConstants.passPage.eidUi.type(actualEid);
      await page.waitForLoadState("networkidle");
  
       //calendra handle dob
       await page.waitForTimeout(2000);
       const openCalendardob = page.locator("//input[@id='dateOfBirth']");
       await openCalendardob.click();
       const openYeardob=page.locator("(//th[@class='datepicker-switch'])[1]")
       await openYeardob.click();
       const openYearListdob=page.locator("(//th[@class='datepicker-switch'])[2]")
       await openYearListdob.click();
       const selectYeardob=page.locator(`//span[normalize-space(text())='${yearDob}']`)
       await selectYeardob.click();
       const selectMonthdob=page.locator(`//span[normalize-space(text())='${monthDob}']`)
       await selectMonthdob.click();
       const selectDatedob=page.locator(`//td[normalize-space(text())='${particularDate}']`)
       await selectDatedob.click();
       await page.waitForLoadState("networkidle");
       //select gender
       await page.waitForTimeout(2000);
       const dropdownLocator2 = page.locator("//select[@name='serachGender']");
       await dropdownLocator2.selectOption({ label: 'Male' });
       await pageConstants.passPage.searchButton.click();
       await page.waitForLoadState("networkidle");
       await expect(pageConstants.passPage.errorValidManually).toBeVisible();
       await page.waitForLoadState("networkidle");
       await page.waitForTimeout(2000);
       const dropdownLocator = page.locator("//select[@id='title']");
       await dropdownLocator.selectOption({ label: 'Mr' });
       await pageConstants.passPage.visfirstName.clear();
       await pageConstants.passPage.visfirstName.type(fname);
       await pageConstants.passPage.vislastName.clear();
       await pageConstants.passPage.vislastName.type(lname);
       await pageConstants.passPage.visemail.clear();
       await pageConstants.passPage.visemail.type(emailId);
       await pageConstants.passPage.visMobile.clear();
       await pageConstants.passPage.visMobile.type(mobileNum);
       await page.waitForTimeout(2000);
       const designation = page.locator("//select[@id='designationIdStr']");
       await designation.selectOption({ label: visDesignation });
       await pageConstants.passPage.vispassPortNumber.clear();
       await pageConstants.passPage.vispassPortNumber.type(dynamicNumber);
       await page.waitForLoadState("networkidle");
       await page.waitForTimeout(2000);
       //eid expire date
        const openCalendarExp = page.locator("//input[@id='emiratesIdExpiry']");
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
        await page.waitForLoadState("networkidle");
        //enter nationality
        await pageConstants.passPage.visNationalField.type(nationality);
        await pageConstants.passPage.selectVisNationality.click();
        await pageConstants.passPage.visCompany.type(fname);
        await pageConstants.passPage.personalFile.setInputFiles(uploadPic);
        await page.waitForTimeout(1000);
        await pageConstants.passPage.passportFile.setInputFiles(uploadPassport);
        await page.waitForTimeout(1000);
        await pageConstants.passPage.eidFile.setInputFiles(uploadEid);
        await page.waitForTimeout(1000);
        await pageConstants.passPage.supportingaFile.setInputFiles(uploadSupport);
});

When('user apply the pass for one day for contractor return', async ({page}) => {
  const pageConstants = new PageConstants(page);
    await pageConstants.passPage.addVisitor.click();
    await page.waitForTimeout(10000);
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(`(//a[@data-bind='click: $root.editUser'])[1]`, { state: 'visible' });
    await expect(pageConstants.passPage.editButton).toBeVisible();
    await (pageConstants.passPage.termsAndCondiUi).click();
    await pageConstants.passPage.finalSubmit.click();
    await page.waitForTimeout(10000);
    await pageConstants.passPage.okForAlert.click();
});

When('user pay amount for the retun pass for contractor', async ({page}) => {
  console.log('there is not need to pay');
});

Then('verify confirmation message for contractor return', async ({page}) => {
  const pageConstants = new PageConstants(page);
     await page.waitForLoadState("networkidle");
     await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
     await expect(pageConstants.passPage.confirmationPay).toBeVisible();
     referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
     console.log('this is added refence number'+ referceNumber);
});

When('login with the approval crendential for contractor', async ({page}) => {
  const pageConstants = new PageConstants(page);
     await page.waitForTimeout(2000);
     await pageConstants.loginPage.logoutDrop.click();
     await pageConstants.loginPage.logoutButton.click();
     await page.waitForLoadState("networkidle");
     await page.waitForTimeout(2000);
     await expect(pageConstants.loginPage.enterUsername).toBeVisible();
     await page.waitForTimeout(7000);
     await pageConstants.loginPage.enterUsername.type(approvalusername);
     await pageConstants.loginPage.enterpassword.type(approvalpassword);
     await pageConstants.loginPage.submitButton.click();
     await page.waitForLoadState("networkidle");
     await page.waitForTimeout(5000);
});

When('host company return pass to the contractor', async ({page}) => {
 const pageConstants = new PageConstants(page);
          await page.waitForLoadState("networkidle");
          await pageConstants.passPage.passManaDrop.click();
          await pageConstants.passPage.approvePassOption.click();
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(2000);
          await pageConstants.passPage.searchForPassRefence.type(referceNumber);
          await page.waitForTimeout(2000);
          await pageConstants.passPage.approveEdit.click();
          //photo approve
          await page.waitForTimeout(1000);
          await pageConstants.passPage.openPicApproval.click();
          //passport approve
          await page.waitForTimeout(1000);
          await pageConstants.passPage.nextapproveButton.click();
          //supportive approve
          await page.waitForTimeout(1000);
          await pageConstants.passPage.nextapproveButton.click();
          //eid approve
          await page.waitForTimeout(1000);
          await pageConstants.passPage.nextapproveButton.click();
          await page.waitForTimeout(1000);
          await pageConstants.passPage.approveClose.click();
      
          await pageConstants.passPage.returnButton.click();
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(2000);
          await pageConstants.passPage.returnReasonMessage.type("This for return");
          await pageConstants.passPage.confirmreturnButton.click();
});