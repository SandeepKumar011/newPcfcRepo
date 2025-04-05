const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const path = require('path');
const { faker } = require('@faker-js/faker');
const dataUtils = new DataUtils();
const uatData=require('../../../test_data/uat.json');
const wrongFile=path.join(process.cwd(), 'test_data/upload/txtFile.txt');
const uploadFile=path.join(process.cwd(), 'test_data/upload/416kb.jpg');

const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=uatData.allData.emiratesIdRegis;
const actualEid=emid+dynamicNumber
const passportnumber=faker.string.numeric({ length: 8 })
const yearDob=uatData.allData.dobYear
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Jan', 'Feb','Mar','Apr']);
const particularDate=faker.helpers.arrayElement(['20', '21','22','23']);
const companyMobile=uatData.allData.companyMobile
const firstName=faker.person.firstName()
const lastName=faker.person.lastName()
const emailIdd=faker.internet.email();
const visaNumber=faker.string.numeric({ length: 12 })
const nationality=uatData.allData.national
const uploadFilePath=path.join(process.cwd(), 'test_data/upload/416kb.jpg');

When('user enters profile infomation for company', async ({page}) => {
   const pageConstants = new PageConstants(page);
         await page.waitForLoadState("networkidle");
         await page.waitForTimeout(2000);
         const visType = page.locator("//select[@id='visaTypeIdStr']");
         await visType.selectOption({ label: 'Resident' });
         await pageConstants.registrationPage.emiratesIdInputField.type(actualEid)
         //calendra handle expiredate emirates
         await page.waitForTimeout(2000);
         const expireEmirates = page.locator("//input[@id='emiratesIdExpiryDate']");
         await expireEmirates.click();
         await page.waitForTimeout(2000);
         const openYearExpire=page.locator("(//th[@class='datepicker-switch'])[1]")
         await openYearExpire.click();
         const openYearListExpire=page.locator("(//th[@class='datepicker-switch'])[2]")
         await openYearListExpire.click();
         const selectYearExpire=page.locator(`//span[normalize-space(text())='${futureYear}']`)
         await selectYearExpire.click();
         const selectMonthExpire=page.locator(`//span[normalize-space(text())='${monthDob}']`)
         await selectMonthExpire.click();
         const selectDateExpire=page.locator(`//td[normalize-space(text())='${particularDate}']`)
         await selectDateExpire.click();
  
         await pageConstants.registrationPage.passportnumberInputField.type(passportnumber);
         //calendra handle expiredate pasport
         await page.waitForTimeout(2000);
         const passportExpire = page.locator("//input[@id='passportExpiryDate']");
         await passportExpire.click();
         const openYearPass=page.locator("(//th[@class='datepicker-switch'])[1]")
         await openYearPass.click();
         const openYearListPass=page.locator("(//th[@class='datepicker-switch'])[2]")
         await openYearListPass.click();
         const selectYearPass=page.locator(`//span[normalize-space(text())='${futureYear}']`)
         await selectYearPass.click();
         const selectMonthPass=page.locator(`//span[normalize-space(text())='${monthDob}']`)
         await selectMonthPass.click();
         const selectDatePass=page.locator(`//td[normalize-space(text())='${particularDate}']`)
         await selectDatePass.click();
         const element= await pageConstants.registrationPage.firstNameInputField
         await element.scrollIntoViewIfNeeded();
         await pageConstants.registrationPage.firstNameInputField.type(firstName);
         await pageConstants.registrationPage.lastnameInputField.type(lastName);
         await pageConstants.registrationPage.emaiIdInputField.type(emailIdd);
         await page.waitForTimeout(2000);
         const dropdownTitle = page.locator("//select[@id='title']");
         await dropdownTitle.selectOption({ label: 'Mr' });
         await pageConstants.registrationPage.mobileInputField.type(visaNumber);
         await page.waitForTimeout(2000);
         const dropdownLocator = page.locator("//select[@id='designationIdStr']");
         await dropdownLocator.selectOption({ label: 'Admin' });
         await pageConstants.registrationPage.nationalInputField.type(nationality);
         await pageConstants.registrationPage.selectnationality.click();
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
      await pageConstants.registrationPage.visanumberInputField.type(visaNumber);
      //calendra handle expiredate visa
      await page.waitForTimeout(2000);
      const openCalendar = page.locator("//input[@id='visaExpiryDate']");
      await openCalendar.click();
      const openYear=page.locator("(//th[@class='datepicker-switch'])[1]")
      await openYear.click();
      const openYearList=page.locator("(//th[@class='datepicker-switch'])[2]")
      await openYearList.click();
      const selectYear=page.locator(`//span[normalize-space(text())='${futureYear}']`)
      await selectYear.click();
      const selectMonth=page.locator(`//span[normalize-space(text())='${monthDob}']`)
      await selectMonth.click();
      const selectDate=page.locator(`//td[normalize-space(text())='${particularDate}']`)
      await selectDate.click();
  
      await pageConstants.registrationPage.passFile.setInputFiles(uploadFile);
      await pageConstants.registrationPage.perFile.setInputFiles(uploadFile);
      await pageConstants.registrationPage.eidFile.setInputFiles(uploadFile);
      await pageConstants.registrationPage.visaFile.setInputFiles(uploadFile);
  
  });
  
  When('user do not enter company name and submit', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.registrationPage.companyPhone.fill(companyMobile);
    await pageConstants.registrationPage.companyLicenceNumber.fill(passportnumber);
    //licence expire date
    await page.waitForTimeout(2000);
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
    await page.waitForTimeout(2000);
    const licenceSource = page.locator("//select[@id='tradeLicSource']");
    await licenceSource.selectOption({ label: 'DED' });
    await pageConstants.registrationPage.companyAddress.fill(lastName);
    await pageConstants.registrationPage.companyFileUpload.setInputFiles(uploadFilePath);
    await pageConstants.registrationPage.submitInfo.click();
  });
  
  Then('verify error message for the company name', async ({page}) => {
    const pageConstants = new PageConstants(page);
   await expect(pageConstants.registrationPage.compnaynameError).toBeVisible();
  });
  
  When('user enter company name and submit', async ({page}) => {
       const pageConstants = new PageConstants(page);
       await pageConstants.registrationPage.companyName.fill(firstName);
       await pageConstants.registrationPage.submitInfo.click();
  });
  
  Then('verify confirmation message is displayed', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(7000);
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.registrationPage.successMess).toBeVisible();
  });