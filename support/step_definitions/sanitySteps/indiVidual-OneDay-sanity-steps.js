
const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../../test_data/userData.json');
const oneDayData=require('../../../test_data/oneDayData.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');

const portName=oneDayData.sanityData.portName
const gateType=oneDayData.sanityData.gateType
const passDuration=oneDayData.sanityData.passDuration
const passType=oneDayData.sanityData.passType
const reasonVisit=oneDayData.sanityData.visitReason
const hCompany=oneDayData.sanityData.hostCompany
const visDesignation=faker.helpers.arrayElement(['Ac Technician', 'Account Assistant','Admin']);
const approvalusername=oneDayData.sanityData.approveUsername
const approvalpassword=oneDayData.sanityData.approvePassword
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

Given(/^user navigates to the login page for sanity$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
  
});

When(/^user enter the credential for the login for sanity$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.enterUsername.type(oneDayData.sanityData.indiVidualUserName);
    await pageConstants.loginPage.enterpassword.type(oneDayData.sanityData.indiVidualPassword);
    await pageConstants.loginPage.submitButton.click();
});

Then(/^user redirected to the home page for sanity$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
    await expect(pageConstants.passPage.passmanagementDrop).toBeVisible();
    await (pageConstants.passPage.passmanagementDrop).click();
    await (pageConstants.passPage.selectapplyGatePass).click();
});

Then(/^user enter pass information for sanity$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(5000);
    await page.waitForSelector(`//select[@id='portsId']`, { state: 'visible' });
    await expect(pageConstants.passPage.portDropUi).toBeVisible();
    await page.waitForTimeout(5000);
    const dropdownPort = page.locator("//select[@id='portsId']");
    await dropdownPort.selectOption({ label: portName });
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    const dropdownGate = page.locator("//select[@id='gateIdStr']");
    await dropdownGate.selectOption({ label: gateType });
    await page.waitForTimeout(5000);
    const dropdownPassType = page.locator("//select[@id='passTypeIdStr']");
    await dropdownPassType.selectOption({ label: passType });
     await expect(pageConstants.passPage.passdurationDropUi).toBeVisible();
     await page.waitForTimeout(5000);
    const dropdownPassDura = page.locator("//select[@id='passDurationIdStr']");
    await dropdownPassDura.selectOption({ label: passDuration });
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.purposeDropUi).toBeVisible();
    await page.waitForTimeout(5000);
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
    await page.waitForTimeout(2000);

    if(visitDate<26){
      const openCalendardob=page.locator("//input[@id='dateOfVisitStr']");
      await openCalendardob.click();
      const selectDatedob=page.locator(`(//td[normalize-space(text())='${visitDate}'])[1]`)
      await selectDatedob.click();
  }
  else{
      const openCalendardob=page.locator("//input[@id='dateOfVisitStr']");
      await openCalendardob.click();
      const selectDatedob=page.locator(`(//td[normalize-space(text())='${visitDate}'])[2]`)
      await selectDatedob.click();
  }
  
    await page.waitForTimeout(2000);
    await pageConstants.passPage.visitHour.type(hoursToVisit);
    await pageConstants.passPage.visitMinutes.type(hoursToVisit);
    await pageConstants.passPage.hostCompanyUi.type(hCompany);
    await page.locator(`//div[normalize-space(text())='${hCompany}']`).click();
});

Then(/^user enter the visitor information for sanity$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    console.log("all individual information is already updated")
});

Then(/^user save the visitor on the add page for sanity$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    console.log("all individual information is already updated")
});

Then(/^verify user is added in the list for sanity$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    console.log("all individual information is already updated")
});

When(/^user submit the visitor information for sanity$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await (pageConstants.passPage.termsAndCondiUi).click();
    await pageConstants.passPage.finalSubmit.click();
    await page.waitForTimeout(20000);
});

Then(/^verify pass apply successfully messge for sanity$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.passPage.confirmationPay).toBeVisible();
    referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
    console.log('this is added refence number'+ referceNumber);
});

When(/^user select logout button on home page for sanity$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(2000);
    await pageConstants.loginPage.logoutDrop.click();
    await pageConstants.loginPage.logoutButton.click();
});

Then(/^verify logout verification message for sanity$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.enterUsername).toBeVisible();
});

When(/^user approve the apply pass on the list page for sanity$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(10000);
    await pageConstants.loginPage.enterUsername.type(approvalusername);
    await pageConstants.loginPage.enterpassword.type(approvalpassword);
    await pageConstants.loginPage.submitButton.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await pageConstants.passPage.passManaDrop.click();
    await pageConstants.passPage.approvePassOption.click();
});

Then(/^verify pass approved successfully message for sanity$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await pageConstants.passPage.searchForPassRefence.type(referceNumber);
    await pageConstants.passPage.approveEdit.click();

    await pageConstants.passPage.approvePhotoEdit.click();
    await pageConstants.passPage.approveClose.click();

    await pageConstants.passPage.approvePassportEdit.click();
    await pageConstants.passPage.approveClose.click();

    await pageConstants.passPage.approveSupportEdit.click();
    await pageConstants.passPage.approveClose.click();

    await pageConstants.passPage.approveEmiratesEdit.click();
    await pageConstants.passPage.approveClose.click();

    await pageConstants.passPage.approveButton.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await expect(pageConstants.passPage.approveSuccessMess).toBeVisible();
});


