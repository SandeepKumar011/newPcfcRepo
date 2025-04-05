const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../PageConstants");
const { DataUtils } = require("../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();

const uatData=require('../../test_data/uat.json');
const { faker } = require('@faker-js/faker');

const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=uatData.allData.emiratesIdRegis;
const actualEid=emid+dynamicNumber
const passportnumber=faker.string.numeric({ length: 8 })
const expiredYear=uatData.allData.exYear
const expiredMonth=uatData.allData.exMonth
const visanmr=uatData.allData.visaNumber
const mobileNumber=faker.string.numeric({ length: 12 })
const mobileNumberCompany='985-9-9887574'
const particularDate=faker.helpers.arrayElement(['15', '16', '17', '18', '19', '20']);
const yearDob=faker.helpers.arrayElement(['2004', '2005']);
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Sep', 'Oct','Nov']);
const nationality=uatData.allData.national
const firstName=faker.person.firstName()
const lastName=faker.person.lastName()
const emailIdd=faker.internet.email()
const uploadFilePath=path.join(process.cwd(), 'test_data/upload/416kb.jpg');

Given('user navigates to the registration page fo add registration company', async ({page}) => {
  const pageConstants = new PageConstants(page);
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await pageConstants.registrationPage.registrationLink.click();
});

Given('user is redirected to the registration for add registration company', async ({page}) => {
  const pageConstants = new PageConstants(page);
  await page.waitForLoadState("networkidle");
  await pageConstants.registrationPage.companyToggle.click();
  await page.waitForLoadState("networkidle");
  await expect(pageConstants.registrationPage.companyName).toBeVisible();
});

Given('user select visa and enter emirated id and the emirate expire date company', async ({page}) => {
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

Given('user enter passport number and expire date for passport company', async ({page}) => {
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

Given('user enter first and last name and email and title company', async ({page}) => {
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

Given('user enter mobile designation and nationlity company', async ({page}) => {
     const pageConstants = new PageConstants(page);
     await pageConstants.registrationPage.mobileInputField.type(mobileNumber)
     await page.waitForTimeout(5000);
     const dropdownLocator = page.locator("//select[@id='designationIdStr']");
     await dropdownLocator.selectOption({ label: 'Admin' });
     await pageConstants.registrationPage.nationalInputField.type(nationality);
     await pageConstants.registrationPage.selectnationality.click();
});

Given('user enters dob and visa number and visa expire date company', async ({page}) => {
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

Given('user uploads the files for passport photo eid and visa company', async ({page}) => {
      const pageConstants = new PageConstants(page);
      await pageConstants.registrationPage.passFile.setInputFiles(uploadFilePath);
      await pageConstants.registrationPage.perFile.setInputFiles(uploadFilePath);
      await pageConstants.registrationPage.eidFile.setInputFiles(uploadFilePath);
      await pageConstants.registrationPage.visaFile.setInputFiles(uploadFilePath);
});

When('user select the compamny information for the registration company', async ({page}) => {
 console.log('check for this step');
});

When('user enter the compamny name and phone for the registration company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.registrationPage.companyName.fill(firstName);
    await pageConstants.registrationPage.companyPhone.fill(mobileNumberCompany);
});

When(/^user enter trad licence number expiry date company$/, async({page}) => {
  const pageConstants = new PageConstants(page);
  await pageConstants.registrationPage.companyLicenceNumber.fill(passportnumber);
});

When(/^user enter trade licence source address and upload file company$/, async({page}) => {
  const pageConstants = new PageConstants(page);
  //licence expire date
  await page.waitForTimeout(5000);
  const openCalendarExp = page.locator("//input[@id='tradeLicExpiryDate']");
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
  //lic source
  await page.waitForTimeout(5000);
  const licenceSource = page.locator("//select[@id='tradeLicSource']");
  await licenceSource.selectOption({ label: 'DED' });
  await pageConstants.registrationPage.companyAddress.fill(lastName);
  await pageConstants.registrationPage.companyFileUpload.setInputFiles(uploadFilePath);
});

When(/^user submit the files for the company Registration company$/, async({page}) => {
  const pageConstants = new PageConstants(page);
  await page.waitForLoadState("networkidle");
  await pageConstants.registrationPage.submitInfo.click();
});

Then(/^verify the success message for the compamny registration company$/, async({page}) => {
	  const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(7000);
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.registrationPage.successMess).toBeVisible();
});
