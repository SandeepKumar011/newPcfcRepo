const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const path = require('path');
const { faker } = require('@faker-js/faker');
const dataUtils = new DataUtils();
const testData=require('../../../test_data/userData.json');
const wrongFile=path.join(process.cwd(), 'test_data/upload/txtFile.txt');
const uploadFile=path.join(process.cwd(), 'test_data/upload/416kb.jpg');

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


When('user eneters all the profile infomation', async ({page}) => {
       const pageConstants = new PageConstants(page);
       await page.waitForLoadState("networkidle");
       const visType = page.locator("//select[@id='visaTypeIdStr']");
       await visType.selectOption({ label: 'Resident' });
       await pageConstants.registrationPage.emiratesIdInputField.type(actualEid)
       //calendra handle expiredate emirates
       const expireEmirates = page.locator("//input[@id='emiratesIdExpiryDate']");
       await expireEmirates.click();
       const openYearExpire=page.locator("(//th[@class='datepicker-switch'])[1]")
       await openYearExpire.click();
       const openYearListExpire=page.locator("(//th[@class='datepicker-switch'])[2]")
       await openYearListExpire.click();
       const selectYearExpire=page.locator(`//span[normalize-space(text())='${expiredYear}']`)
       await selectYearExpire.click();
       const selectMonthExpire=page.locator(`//span[normalize-space(text())='${expiredMonth}']`)
       await selectMonthExpire.click();
       const selectDateExpire=page.locator(`//td[normalize-space(text())='${particularDate}']`)
       await selectDateExpire.click();

       await pageConstants.registrationPage.passportnumberInputField.type(passportnumber);
       //calendra handle expiredate pasport
       const passportExpire = page.locator("//input[@id='passportExpiryDate']");
       await passportExpire.click();
       const openYearPass=page.locator("(//th[@class='datepicker-switch'])[1]")
       await openYearPass.click();
       const openYearListPass=page.locator("(//th[@class='datepicker-switch'])[2]")
       await openYearListPass.click();
       const selectYearPass=page.locator(`//span[normalize-space(text())='${expiredYear}']`)
       await selectYearPass.click();
       const selectMonthPass=page.locator(`//span[normalize-space(text())='${expiredMonth}']`)
       await selectMonthPass.click();
       const selectDatePass=page.locator(`//td[normalize-space(text())='${particularDate}']`)
       await selectDatePass.click();
       const element= await pageConstants.registrationPage.firstNameInputField
       await element.scrollIntoViewIfNeeded();
       await pageConstants.registrationPage.firstNameInputField.type(firstName);
       await pageConstants.registrationPage.lastnameInputField.type(lastName);
       await pageConstants.registrationPage.emaiIdInputField.type(emailIdd);
       const dropdownTitle = page.locator("//select[@id='title']");
       await dropdownTitle.selectOption({ label: 'Mr' });
       await pageConstants.registrationPage.mobileInputField.type(mobileNumber)
       const dropdownLocator = page.locator("//select[@id='designationIdStr']");
       await dropdownLocator.selectOption({ label: 'Admin' });
       await pageConstants.registrationPage.nationalInputField.type(nationality);
       await pageConstants.registrationPage.selectnationality.click();
        //calendra handle dob
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

    await pageConstants.registrationPage.passFile.setInputFiles(uploadFile);
    await pageConstants.registrationPage.perFile.setInputFiles(uploadFile);
    await pageConstants.registrationPage.eidFile.setInputFiles(uploadFile);
    await pageConstants.registrationPage.visaFile.setInputFiles(uploadFile);

   
  });
  
  When('user selects the submit the button', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.registrationPage.submitInfo.click();
  });
  
  Then('verify regstration successfully messge display for individual', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(7000);
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.registrationPage.successMess).toBeVisible();
  });