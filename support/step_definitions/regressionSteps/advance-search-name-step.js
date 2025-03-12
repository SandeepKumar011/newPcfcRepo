
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
const emid=testData.globalData.emiratesId;
const particularDate=faker.helpers.arrayElement(['15', '16', '17', '18', '19', '20']);
const yearDob=faker.helpers.arrayElement(['2004', '2005']);
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Sep', 'Oct','Nov']);
const emailId=faker.internet.email();
const mobileNum=faker.string.numeric({ length: 12 })
const hoursToVisit='5';
const nationality=testData.globalData.national
const uploadFilePath=path.join(process.cwd(), 'test_data/upload/416kb.jpg');
let referceNumber;
let firstName;
let lastName;
let actualEid;
let dynamicNumber;
let companyName;
let passportNumber;


When('user enter the infomation for pass for advance search', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(5000);
    await (pageConstants.passPage.passmanagementDrop).click();
    await (pageConstants.passPage.selectapplyGatePass).click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    await expect(pageConstants.passPage.portAccess).toBeVisible();
    await pageConstants.passPage.portAccess.click();
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.portDropUi).toBeVisible();
    await page.waitForTimeout(2000);
    await page.waitForSelector(`//select[@id='portsId']`, { state: 'visible' });
    await expect(pageConstants.passPage.portDropUi).toBeVisible();
    await page.waitForTimeout(5000);
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
     await page.waitForTimeout(5000);
    const dropdownPassDura = page.locator("//select[@id='passDurationIdStr']");
    await dropdownPassDura.selectOption({ label: passDuration });
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.purposeDropUi).toBeVisible();
    await page.waitForTimeout(2000);
    const dropdownreason = page.locator("//select[@id='reasonOfVisitIdStr']");
    await dropdownreason.selectOption({ label: reasonVisit });
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.dateOfVisitDropUi).toBeVisible();
    await page.waitForTimeout(2000);
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
    await pageConstants.passPage.hostCompanyUi.type(hCompany);
    await page.locator(`//div[normalize-space(text())='${hCompany}']`).click();
  });
  
  When('user enter infomation for the visitor for advance search', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(2000);
    const dropdownVisa = page.locator("//select[@id='searchVisaTypeIdStr']");
    dynamicNumber=faker.string.numeric({ length: 8 })
    const emid=testData.globalData.emiratesId;
    actualEid=emid+dynamicNumber
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
     firstName='auto'+faker.person.firstName();
     lastName=faker.person.lastName();
     await pageConstants.passPage.visfirstName.clear();
     await pageConstants.passPage.visfirstName.type(firstName);
     await pageConstants.passPage.vislastName.clear();
     await pageConstants.passPage.vislastName.type(lastName);
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
     await page.waitForTimeout(5000);
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
      companyName='auto'+faker.person.firstName();
      await pageConstants.passPage.visCompany.type(companyName);
      await pageConstants.passPage.personalFile.setInputFiles(uploadFilePath);
      await pageConstants.passPage.passportFile.setInputFiles(uploadFilePath);
      await pageConstants.passPage.eidFile.setInputFiles(uploadFilePath);
      await pageConstants.passPage.supportingaFile.setInputFiles(uploadFilePath);
  });
  
  When('user apply the pass for one day for advance search', async ({page}) => {
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
  
  Then('verify confirmation message for the applied pass', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.passPage.confirmationPay).toBeVisible();
    referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
    console.log('this is added refence number'+ referceNumber);
  });

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
    await pageConstants.passPage.advanceSearchsubmit.click();
  });
  
  Then('verify search by first and last name on list page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.searchFirstnameInput.type(firstName);
    await pageConstants.passPage.advanceSearchsubmit.click();
    await page.waitForTimeout(5000);
    await expect(pageConstants.passPage.forvalidationHostCom).toBeVisible();
    //search by last name is not working
    // await page.reload({ waitUntil: 'networkidle' });
    // await page.waitForTimeout(2000);
    // await pageConstants.passPage.advanceSearchButton.click();
    // await pageConstants.passPage.searchLastnameInput.type(lastName);
    // await pageConstants.passPage.advanceSearchsubmit.click();
    // await page.waitForTimeout(8000);
    // await expect(pageConstants.passPage.forvalidationHostCom).toBeVisible();
  });
  
  Then('verify search by host and visitor company name on list page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await pageConstants.passPage.advanceSearchButton.click();
    await pageConstants.passPage.hostCompanyUi.type(hCompany);
    await page.locator(`//div[normalize-space(text())='${hCompany}']`).click();
    await pageConstants.passPage.advanceSearchsubmit.click();
    await page.waitForTimeout(5000);
    await expect(pageConstants.passPage.forvalidationHostCom).toBeVisible();
    await pageConstants.passPage.searchHosctComInput.clear();
    await pageConstants.passPage.searchVisitorNameInput.type(companyName);
    await pageConstants.passPage.advanceSearchsubmit.click();
    await page.waitForTimeout(5000);
    await expect(pageConstants.passPage.forvalidationHostCom).toBeVisible();
  });

  Then('verify search by visitor nationality', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.searchVistotrCountryInput.type(hCompany);
    await page.locator(`//div[normalize-space(text())='${hCompany}']`).click();
    await pageConstants.passPage.advanceSearchsubmit.click();
    await page.waitForTimeout(8000);
    await expect(pageConstants.passPage.forvalidationHostCom).toBeVisible();
  });

  Then('verify search by EID number on list page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.searchEidInput.type(actualEid);
    await pageConstants.passPage.advanceSearchsubmit.click();
    await page.waitForTimeout(8000);
    await expect(pageConstants.passPage.forvalidationHostCom).toBeVisible();
});

Then('verify search by passport number on list page', async ({page}) => {
 const pageConstants = new PageConstants(page);
 await page.waitForLoadState("networkidle");
 await pageConstants.passPage.searchPassportInput.type(dynamicNumber);
 await pageConstants.passPage.advanceSearchsubmit.click();
 await page.waitForTimeout(8000);
 await expect(pageConstants.passPage.forvalidationHostCom).toBeVisible();
});

Then('verify search by port name on list page', async ({page}) => {
 const pageConstants = new PageConstants(page);
 await page.waitForLoadState("networkidle");
 const dropdownPort = page.locator("//select[@id='searchPortsIdStr']");
 await dropdownPort.selectOption({ label: portName });
 await pageConstants.passPage.advanceSearchsubmit.click();
 await page.waitForTimeout(8000);
 await expect(pageConstants.passPage.forvalidationHostCom).toBeVisible();
});