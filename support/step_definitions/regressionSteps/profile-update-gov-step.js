const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../../PageConstants");
const { expect } = require('@playwright/test');
const uatData=require('../../../test_data/uat.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');

const username=uatData.regressionDataGov.username
const password=uatData.regressionDataGov.password
const visDesignation=faker.helpers.arrayElement(['Ac Technician', 'Account Assistant','Admin']);
const dynamicNumber=faker.string.numeric({ length: 8 });
const emid=uatData.allData.emiratesId;
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
const hCompany=uatData.regressionDataHost.hostCompany
const nationality=uatData.allData.national
const uploadPic=path.join(process.cwd(), 'test_data/upload/pic.png');
const uploadPassport=path.join(process.cwd(), 'test_data/upload/passport.pdf');
const uploadEid=path.join(process.cwd(), 'test_data/upload/EID.pdf');
const uploadSupport=path.join(process.cwd(), 'test_data/upload/sample.pdf');
let referceNumber;

Given('user navigates the login page for government update profile', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
  });
  
  When('user enter the crendential for the government update profile', async ({page}) => {
                const pageConstants = new PageConstants(page);
                await page.waitForLoadState("networkidle");
                await pageConstants.loginPage.enterUsername.type(username);
                await pageConstants.loginPage.enterpassword.type(password);
                await pageConstants.loginPage.submitButton.click();
  });
  
  Then('user should be redirected to the home page for government update profile', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible(); 
  });
  
  When('user select update profile for government updated', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(2000);
    await pageConstants.loginPage.logoutDrop.click();
    await pageConstants.loginPage.updateButton.click();
  });
  
  When('user update the infomation for government', async ({page}) => {
                    const pageConstants = new PageConstants(page);
                     await page.waitForTimeout(2000);
                     const dropdownVisa = page.locator("//select[@id='visaTypeIdStr']");
                     await dropdownVisa.selectOption({ label: 'Resident' });
                     await pageConstants.passPage.updateEid.clear();
                     await pageConstants.passPage.updateEid.type(actualEid);
                     //eid expire date
                     const openCalendarExp = page.locator("(//img[@alt='Calender Icon'])[1]");
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
                     await pageConstants.passPage.updatePassport.type(dynamicNumber);
                     //passport expire date
                     const openCalendarExp2 = page.locator("//input[@id='passportExpiryDate']");
                     await openCalendarExp2.click();
                     const openYearExp2=page.locator("(//th[@class='datepicker-switch'])[1]")
                     await openYearExp2.click();
                     const openYearListExp2=page.locator("(//th[@class='datepicker-switch'])[2]")
                     await openYearListExp2.click();
                     const selectYearExp2=page.locator(`//span[normalize-space(text())='${futureYear}']`)
                     await selectYearExp2.click();
                     const selectMonthExp2=page.locator(`//span[normalize-space(text())='${monthDob}']`)
                     await selectMonthExp2.click();
                     const selectDateExp2=page.locator(`//td[normalize-space(text())='${particularDate}']`)
                     await selectDateExp2.click();
    
                     //emailid
                     await pageConstants.passPage.updateEmailId.clear();
                     await pageConstants.passPage.updateEmailId.type(emailId);
                    //  const designationdrop = page.locator("//select[@id='designationIdStr']");
                    //  await designationdrop.selectOption({ label: 'Admin' });
                    //  await pageConstants.passPage.updateNationality.type(nationality);
                    //  await page.locator(`//div[normalize-space(text())='${nationality}']`).click();
                 
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
                      //visa
                      await pageConstants.passPage.updateVisanumber.clear();
                      await pageConstants.passPage.updateVisanumber.type(dynamicNumber);
                       //visa  expire date
                     const openCalendarExp3 = page.locator("//input[@id='visaExpiryDate']");
                     await openCalendarExp3.click();
                     const openYearExp3=page.locator("(//th[@class='datepicker-switch'])[1]")
                     await openYearExp3.click();
                     const openYearListExp3=page.locator("(//th[@class='datepicker-switch'])[2]")
                     await openYearListExp3.click();
                     const selectYearExp3=page.locator(`//span[normalize-space(text())='${futureYear}']`)
                     await selectYearExp3.click();
                     const selectMonthExp3=page.locator(`//span[normalize-space(text())='${monthDob}']`)
                     await selectMonthExp3.click();
                     const selectDateExp3=page.locator(`//td[normalize-space(text())='${particularDate}']`)
                     await selectDateExp3.click();
    
                      // //upload
                      //  await pageConstants.passPage.updateFileuploadPassport.setInputFiles(uploadPassport);
                      //  await pageConstants.passPage.updateFileuploadPic.setInputFiles(uploadPic);
                      //  await pageConstants.passPage.updateFileuploadEid.setInputFiles(uploadEid);
                      //  await pageConstants.passPage.updateFileuploadVisa.setInputFiles(uploadSupport); 
  });
  
  When('user submit the infomation for government', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.updateButton.click();
  });
  
  Then('verify success messge for the government', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.updateMessage).toBeVisible();
  });