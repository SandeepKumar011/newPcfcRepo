const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../test_data/userData.json');
const { faker} = require('@faker-js/faker');
const hCompany=testData.globalData.approveHostCompany
const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesId;
const actualEid=emid+dynamicNumber
const visitDate=faker.helpers.arrayElement(['15','13','14']);
const particularDate=faker.helpers.arrayElement(['15', '16', '17', '18', '19', '20']);
const yearDob=faker.helpers.arrayElement(['2004', '2005']);
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Sep', 'Oct','Nov']);
const fname=faker.person.firstName();
const lname=faker.person.lastName();
const emailId=faker.internet.email();
const mobileNum='788956897854';
const hoursToVisit='5';
const nationality=testData.globalData.national
const uploadFilePath=path.join(process.cwd(), 'test_data/upload/416kb.jpg');
let referceNumber;


When('user enter pass information on the create page for draft', async ({page}) => {
    const pageConstants = new PageConstants(page);
      await page.waitForSelector(`//select[@id='portsId']`, { state: 'visible' });
      await expect(pageConstants.passPage.portDropUi).toBeVisible();
      const dropdownPort = page.locator("//select[@id='portsId']");
      await dropdownPort.selectOption({ label: 'Jebel Ali Port' });
      await page.waitForLoadState("networkidle");
      const dropdownGate = page.locator("//select[@id='gateIdStr']");
      await dropdownGate.selectOption({ label: 'Any Gate' });
      const dropdownPassType = page.locator("//select[@id='passTypeIdStr']");
      await dropdownPassType.selectOption({ label: 'Business Meeting' });
       await expect(pageConstants.passPage.passdurationDropUi).toBeVisible();
      const dropdownPassDura = page.locator("//select[@id='passDurationIdStr']");
      await dropdownPassDura.selectOption({ label: 'One Day Pass' });
      await page.waitForLoadState("networkidle");
      await expect(pageConstants.passPage.purposeDropUi).toBeVisible();
      const dropdownreason = page.locator("//select[@id='reasonOfVisitIdStr']");
      await dropdownreason.selectOption({ label: 'Business Meeting' });
      await page.waitForLoadState("networkidle");
      await expect(pageConstants.passPage.dateOfVisitDropUi).toBeVisible();
      const dateOfVisit = page.locator("//input[@id='dateOfVisitStr']");
      await dateOfVisit.click();
      const dateOfVisitMonth=page.locator(`(//td[normalize-space(text())='${visitDate}'])[1]`)
      await dateOfVisitMonth.click();
      await page.waitForLoadState("networkidle");
      await pageConstants.passPage.visitHour.type(hoursToVisit);
      await pageConstants.passPage.visitMinutes.type(hoursToVisit);
      await pageConstants.passPage.hostCompanyUi.type(hCompany);
      await page.locator(`//div[normalize-space(text())='${hCompany}']`).click();
  });
  
  When('user enter the visitor information on the create page for draft', async ({page}) => {
      const pageConstants = new PageConstants(page);
          await page.waitForTimeout(5000);
          const dropdownVisa = page.locator("//select[@id='searchVisaTypeIdStr']");
          await dropdownVisa.selectOption({ label: 'Resident' });
          await pageConstants.passPage.eidUi.type(actualEid);
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(5000);
      
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
           await page.waitForLoadState("networkidle");
           //select gender
           await page.waitForTimeout(5000);
           const dropdownLocator2 = page.locator("//select[@name='serachGender']");
           await dropdownLocator2.selectOption({ label: 'Male' });
           await pageConstants.passPage.searchButton.click();
           await page.waitForLoadState("networkidle");
           await expect(pageConstants.passPage.errorValidManually).toBeVisible();
           await page.waitForLoadState("networkidle");
           await page.waitForTimeout(5000);
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
           await page.waitForTimeout(5000);
           const designation = page.locator("//select[@id='designationIdStr']");
           await designation.selectOption({ label: 'Admin' });
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
            await pageConstants.passPage.visCompany.type(fname);
            await pageConstants.passPage.personalFile.setInputFiles(uploadFilePath);
            await pageConstants.passPage.passportFile.setInputFiles(uploadFilePath);
            await pageConstants.passPage.eidFile.setInputFiles(uploadFilePath);
            await pageConstants.passPage.supportingaFile.setInputFiles(uploadFilePath);
  });
  
  When('user save the visitor on the create page for draft', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.addVisitor.click();
    await page.waitForTimeout(10000);
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(`(//a[@data-bind='click: $root.editUser'])[1]`, { state: 'visible' });
    await expect(pageConstants.passPage.editButton).toBeVisible();
  });
  
  Then('verify user is added in the list on the create page for draft', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.editButton).toBeVisible();
  });

  When('user submit information as draft on create page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.saveAsDraft.click();
    await pageConstants.passPage.submitforDraft.click();
  });
  
  Then('verify confirmation message for the draft', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.draftSuccessMess).toBeVisible();
    await page.waitForTimeout(5000);
    referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
    console.log('this is added refence number'+ referceNumber);
  });
  
  When('user search saved information in draft', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.myWorkspace.click();
    await pageConstants.passPage.myDraft.click();
  });
  
  Then('verify added user information is displayed', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.searchForPassRefence.type(referceNumber);
    await expect(pageConstants.passPage.eyeIcon).toBeVisible();
  });