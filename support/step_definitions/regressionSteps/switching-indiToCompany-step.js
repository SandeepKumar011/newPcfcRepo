
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

Given('the user has entered details in the Individual registration form', async ({page}) => {
       const pageConstants = new PageConstants(page);
       await page.waitForLoadState("networkidle");
       await page.waitForTimeout(2000);
       const visType = page.locator("//select[@id='visaTypeIdStr']");
       await visType.selectOption({ label: 'Resident' });
       await pageConstants.registrationPage.emiratesIdInputField.type(actualEid)
       //calendra handle expiredate emirates
       await page.waitForTimeout(5000);
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
       await page.waitForTimeout(5000);
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
       await page.waitForTimeout(5000);
       const dropdownTitle = page.locator("//select[@id='title']");
       await dropdownTitle.selectOption({ label: 'Mr' });
       await pageConstants.registrationPage.mobileInputField.type(mobileNumber)
       await page.waitForTimeout(5000);
       const dropdownLocator = page.locator("//select[@id='designationIdStr']");
       await dropdownLocator.selectOption({ label: 'Admin' });
       await pageConstants.registrationPage.nationalInputField.type(nationality);
       await pageConstants.registrationPage.selectnationality.click();
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
    //calendra handle expiredate visa
    await page.waitForTimeout(5000);
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

  });
  
  When('the user navigates to the Company tab', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.registrationPage.companyToggle.click();
    await page.waitForLoadState("networkidle");

  });
  
  Then('the details entered in the Individual tab should remain saved', async ({page}) => {
    const pageConstants = new PageConstants(page);
    const element=page.locator("//input[@id='emiratesId']");
    const readValues=await element.inputValue();
    console.log('this is read values ' + readValues);
    console.log('this is actual values ' + actualEid);
    expect(readValues).toBe(actualEid);
    await expect(await pageConstants.registrationPage.afteruploadDelete).toBeVisible();
  });