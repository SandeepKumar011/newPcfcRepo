const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../PageConstants");
const { DataUtils } = require("../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();
const testData=require('../../test_data/userData.json');
const { faker } = require('@faker-js/faker');

const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesIdRegis;
const actualEid=emid+dynamicNumber
const passportnumber=faker.string.numeric({ length: 8 })
const expiredYear=testData.globalData.exYear
const expiredMonth=testData.globalData.exMonth
const particularDate=testData.globalData.singleDate
const visanmr=testData.globalData.visaNumber
const yearDob=testData.globalData.dobYear
const mobileNumber=testData.globalData.mobileNo
const nationality=testData.globalData.national
const firstName=faker.person.firstName()
const lastName=faker.person.lastName()
const emailIdd=faker.internet.email()
const uploadFilePath=path.join(process.cwd(), 'test_data/upload/416kb.jpg');

Given('user navigates to the registration page for add user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.registrationPage.registrationLink.click();
  });
  
  Given('user is redirected to the registration for add user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.registrationPage.emiratesIdInputField).toBeVisible();
  });
  
  Given('user select visa and enter emirated id and the emirate expire date for add user', async ({page}) => {
       const pageConstants = new PageConstants(page);
       await page.waitForLoadState("networkidle");
       await page.waitForTimeout(5000);
       const dropdownLocator = page.locator("//select[@id='visaTypeIdStr']");
       await dropdownLocator.selectOption({ label: 'Resident' });
       await pageConstants.registrationPage.emiratesIdInputField.type(actualEid)
       //calendra handle expiredate emirates
       await page.waitForTimeout(5000);
       const openCalendar = page.locator("//input[@id='emiratesIdExpiryDate']");
       await openCalendar.click();
       const openYear=page.locator("(//th[@class='datepicker-switch'])[1]")
       await openYear.click();
       const openYearList=page.locator("(//th[@class='datepicker-switch'])[2]")
       await openYearList.click();
       const selectYear=page.locator(`//span[normalize-space(text())='${expiredYear}']`)
       await selectYear.click();
       const selectMonth=page.locator(`//span[normalize-space(text())='${expiredMonth}']`)
       await selectMonth.click();
       const selectDate=page.locator(`//td[normalize-space(text())='${particularDate}']`)
       await selectDate.click();
  });
  
  Given('user enter passport number and expire date for passport for add user', async ({page}) => {
   const pageConstants = new PageConstants(page);
       await pageConstants.registrationPage.passportnumberInputField.type(passportnumber);
       //calendra handle expiredate pasport
       await page.waitForTimeout(5000);
       const openCalendar = page.locator("//input[@id='passportExpiryDate']");
       await openCalendar.click();
       const openYear=page.locator("(//th[@class='datepicker-switch'])[1]")
       await openYear.click();
       const openYearList=page.locator("(//th[@class='datepicker-switch'])[2]")
       await openYearList.click();
       const selectYear=page.locator(`//span[normalize-space(text())='${expiredYear}']`)
       await selectYear.click();
       const selectMonth=page.locator(`//span[normalize-space(text())='${expiredMonth}']`)
       await selectMonth.click();
       const selectDate=page.locator(`//td[normalize-space(text())='${particularDate}']`)
       await selectDate.click();
  });
  
  Given('user enter first and last name and email and title for add user', async ({page}) => {
       const pageConstants = new PageConstants(page);
       const element= await pageConstants.registrationPage.firstNameInputField
       await element.scrollIntoViewIfNeeded();
       await pageConstants.registrationPage.firstNameInputField.type(firstName);
       await pageConstants.registrationPage.lastnameInputField.type(lastName);
       await pageConstants.registrationPage.emaiIdInputField.type(emailIdd);
       await page.waitForTimeout(5000);
       const dropdownLocator = page.locator("//select[@id='title']");
       await dropdownLocator.selectOption({ label: 'Mr' });
  });
  
  Given('user enter mobile designation and nationlity for add user', async ({page}) => {
       const pageConstants = new PageConstants(page);
       await pageConstants.registrationPage.mobileInputField.type(mobileNumber)
       await page.waitForTimeout(5000);
       const dropdownLocator = page.locator("//select[@id='designationIdStr']");
       await dropdownLocator.selectOption({ label: 'Admin' });
       await pageConstants.registrationPage.nationalInputField.type(nationality);
       await pageConstants.registrationPage.selectnationality.click();
  });
  
  Given('user enters dob and visa number and visa expire date for add user', async ({page}) => {
       const pageConstants = new PageConstants(page);
       //calendra handle dob
       await page.waitForTimeout(5000);
       const openCalendardob = page.locator("//input[@id='dateOfBirth']");
       await openCalendardob.click();
       const openYeardob=page.locator("(//th[@class='datepicker-switch'])[1]")
       await openYeardob.click();
       const openYearListdob=page.locator("(//th[@class='datepicker-switch'])[2]")
       await openYearListdob.click();
       const selectYeardob=page.locator(`//span[normalize-space(text())='${yearDob}']`)
       await selectYeardob.click();
       const selectMonthdob=page.locator(`//span[normalize-space(text())='${expiredMonth}']`)
       await selectMonthdob.click();
       const selectDatedob=page.locator(`//td[normalize-space(text())='${particularDate}']`)
       await selectDatedob.click();
       await pageConstants.registrationPage.visanumberInputField.type(visanmr);
       await page.waitForTimeout(5000);
       //calendra handle expiredate visa
       const openCalendar = page.locator("//input[@id='visaExpiryDate']");
       await openCalendar.click();
       const openYear=page.locator("(//th[@class='datepicker-switch'])[1]")
       await openYear.click();
       const openYearList=page.locator("(//th[@class='datepicker-switch'])[2]")
       await openYearList.click();
       const selectYear=page.locator(`//span[normalize-space(text())='${expiredYear}']`)
       await selectYear.click();
       const selectMonth=page.locator(`//span[normalize-space(text())='${expiredMonth}']`)
       await selectMonth.click();
       const selectDate=page.locator(`//td[normalize-space(text())='${particularDate}']`)
       await selectDate.click();
  });
  
  Given('user uploads the files for passport photo eid and visa for add user', async ({page}) => {
        const pageConstants = new PageConstants(page);
        await pageConstants.registrationPage.passFile.setInputFiles(uploadFilePath);
        await pageConstants.registrationPage.perFile.setInputFiles(uploadFilePath);
        await pageConstants.registrationPage.eidFile.setInputFiles(uploadFilePath);
        await pageConstants.registrationPage.visaFile.setInputFiles(uploadFilePath);
  });
  
  Given('user submit the files for the Registration for add user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.registrationPage.submitInfo.click();
  });
  
  Then('verify the success message for the registration for add user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(7000);
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.registrationPage.successMess).toBeVisible();
  });

When(/^user login with the hd user for validation for add user$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.enterUsername.type(testData.globalData.username);
    await pageConstants.loginPage.enterpassword.type(testData.globalData.password);
});

When(/^user verify the added user by hd user for add user$/, async({page}) => {
	
});

Then(/^verify validation message for the approve pass by hduser for add user$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(7000);
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.registrationPage.successMess).toBeVisible();
});
