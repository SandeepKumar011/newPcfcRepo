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
const dynamicNumber=faker.number.int(100000000)
const emid=testData.globalData.emiratesId;
const actualEid=emid+dynamicNumber;
const existingEid=testData.globalData.existingEid
const visitDate=faker.helpers.arrayElement(['5','6','4']);
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


When('user enter all the infomation for the pass infomation', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(10000);
    await (pageConstants.passPage.passmanagementDrop).click();
    await (pageConstants.passPage.selectapplyGatePass).click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(10000);
    await expect(pageConstants.passPage.portAccess).toBeVisible();
    await pageConstants.passPage.portAccess.click();
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.portDropUi).toBeVisible();
    await page.waitForSelector(`//select[@id='portsId']`, { state: 'visible' });
    const dropdownPort = page.locator("//select[@id='portsId']");
    await dropdownPort.selectOption({ label: 'Port Rashid' });
    const dropdownGate = page.locator("//select[@id='gateIdStr']");
    await dropdownGate.selectOption({ label: 'Any Gate' });
    const dropdownPassType = page.locator("//select[@id='passTypeIdStr']");
    await dropdownPassType.selectOption({ label: 'Business Meeting' });
    await expect(pageConstants.passPage.passdurationDropUi).toBeVisible();
    const dropdownLocator = page.locator("//select[@id='passDurationIdStr']");
    await dropdownLocator.selectOption({ label: 'One Day Pass' });
    await expect(pageConstants.passPage.purposeDropUi).toBeVisible();
    const dropdownLocator2 = page.locator("//select[@id='reasonOfVisitIdStr']");
    await dropdownLocator2.selectOption({ label: 'Business Meeting' });
    await expect(pageConstants.passPage.dateOfVisitDropUi).toBeVisible();
    const openCalendardob = page.locator("//input[@id='dateOfVisitStr']");
    await openCalendardob.click();
    const selectDatedob=page.locator(`(//td[normalize-space(text())='${visitDate}'])[1]`)
    await selectDatedob.click();
    await pageConstants.passPage.visitHour.type(hoursToVisit);
    await pageConstants.passPage.visitMinutes.type(hoursToVisit);
    await pageConstants.passPage.hostCompanyUi.type(hCompany);
    await pageConstants.passPage.hcompanyselect.click();
  });
  
  When('user enter information for the visitor', async ({page}) => {
     const pageConstants = new PageConstants(page);
       const dropdownLocator = page.locator("//select[@id='searchVisaTypeIdStr']");
       await dropdownLocator.selectOption({ label: 'Resident' });
        //calendra handle dob
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
        //select gender
        const dropdownLocator2 = page.locator("//select[@name='serachGender']");
        await dropdownLocator2.selectOption({ label: 'Male' });
  });
  
  When('user enters the blacklist emirateid', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.eidUi.type('784198512312350');
  });
  
  Then('verify error message for the blacklist emirate id', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.searchButton.click();
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.errorValidManually).toBeVisible();
  });