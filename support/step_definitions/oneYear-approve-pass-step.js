const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../test_data/userData.json');
const oneyeardata=require('../../test_data/oneYearData.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');

const approveUserName1=oneyeardata.oneyearApprovalCred.approvalUsername1
const approvePassword1=oneyeardata.oneyearApprovalCred.approvalPassword1
const approveUserName2=oneyeardata.oneyearApprovalCred.approvalUsername2
const approvePassword2=oneyeardata.oneyearApprovalCred.approvalPassword2
const approveUserName3=oneyeardata.oneyearApprovalCred.approvalUsername3
const approvePassword3=oneyeardata.oneyearApprovalCred.approvalPassword3
const portName=oneyeardata.commonData.portName
const gateType=oneyeardata.commonData.gateType
const passType=oneyeardata.commonData.passType
const passDuration=oneyeardata.commonData.passDuration
const reasonVisit=oneyeardata.commonData.visitReason
const visDesignation=faker.helpers.arrayElement(['Ac Technician', 'Account Assistant','Admin']);

const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesId;
const actualEid=emid+dynamicNumber
const particularDate=faker.helpers.arrayElement(['15', '16', '17', '18', '19', '20']);
const yearDob=faker.helpers.arrayElement(['2004', '2005']);
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Sep', 'Oct','Nov']);
const fname='Auto'+faker.person.firstName();
const lname=faker.person.lastName();
const emailId=faker.internet.email();
const mobileNum=faker.string.numeric({ length: 12 })
const nationality=testData.globalData.national
const uploadFilePath=path.join(process.cwd(), 'test_data/upload/sample.pdf');
const uploadPic=path.join(process.cwd(), 'test_data/upload/pic.png');
const uploadPassport=path.join(process.cwd(), 'test_data/upload/passport.pdf');
const uploadEid=path.join(process.cwd(), 'test_data/upload/EID.pdf');
const uploadSupport=path.join(process.cwd(), 'test_data/upload/sample.pdf');
let referceNumber;


When('user enter pass information for one year pass', async ({page}) => {  
          const pageConstants = new PageConstants(page);
          await page.waitForTimeout(2000);
          await page.waitForSelector(`//select[@id='portsId']`, { state: 'visible' });
          await expect(pageConstants.passPage.portDropUi).toBeVisible();
          await page.waitForTimeout(2000);
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
           await page.waitForTimeout(2000);
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
          await pageConstants.passPage.visitAreaName.type(fname);
  });
  
  When('user enter the visitor information for one year pass', async ({page}) => {
             const pageConstants = new PageConstants(page);
             await page.waitForTimeout(2000);
             const dropdownVisa = page.locator("//select[@id='searchVisaTypeIdStr']");
             await dropdownVisa.selectOption({ label: 'Resident' });
             await pageConstants.passPage.eidUi.type(actualEid);
             await page.waitForLoadState("networkidle");
         
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
              await pageConstants.passPage.visfirstName.clear();
              await pageConstants.passPage.visfirstName.type(fname);
              await pageConstants.passPage.vislastName.clear();
              await pageConstants.passPage.vislastName.type(lname);
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
              await page.waitForTimeout(2000);
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
               await pageConstants.passPage.personalPic.setInputFiles(uploadPic);
               await pageConstants.passPage.passportup.setInputFiles(uploadPassport);
               await pageConstants.passPage.suppportDocUp.setInputFiles(uploadSupport);
               await pageConstants.passPage.eidUp.setInputFiles(uploadEid); 
               await pageConstants.passPage.dnaUp.setInputFiles(uploadFilePath);  
  });
  
  When('user save the visitor for one year pass', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.addVisitor.click();
    await page.waitForTimeout(10000);
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(`(//a[@data-bind='click: $root.editUser'])[1]`, { state: 'visible' });
    await expect(pageConstants.passPage.editButton).toBeVisible();
  });
  
  Then('verify user is added in the list for one year pass', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.editButton).toBeVisible();
  });
  
  When('user submit the visitor information for one year pass', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await (pageConstants.passPage.termsAndCondiUi).click();
    await pageConstants.passPage.finalSubmit.click();
    await page.waitForTimeout(10000);
    await pageConstants.passPage.okForAlert.click();
  });
  
  Then('verify pass apply successfully messge for one year pass', async ({page}) => {
           const pageConstants = new PageConstants(page);
           await page.waitForLoadState("networkidle");
           await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
           await expect(pageConstants.passPage.confirmationPay).toBeVisible();
           referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
           console.log('this is added refence number'+ referceNumber);
  });
  
  When('user select logout button on home page for one year pass', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(2000);
    await pageConstants.loginPage.logoutDrop.click();
    await pageConstants.loginPage.logoutButton.click();
  });
  
  Then('verify logout verification message for one year pass', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(pageConstants.loginPage.enterUsername).toBeVisible();
  });
  
  When('user approve the apply pass for one year pass', async ({page}) => {
      const pageConstants = new PageConstants(page);
       await page.waitForLoadState("networkidle");
       await page.waitForTimeout(5000);
       await pageConstants.loginPage.enterUsername.type(approveUserName1);
       await pageConstants.loginPage.enterpassword.type(approvePassword1);
       await pageConstants.loginPage.submitButton.click();
       await page.waitForLoadState("networkidle");
       await page.waitForTimeout(2000);
       await pageConstants.passPage.passManaDrop.click();
       await pageConstants.passPage.approvePassOption.click();
  });
  

  Then('verify first approvel successfully message for one year pass', async ({page}) => {
         const pageConstants = new PageConstants(page);
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(2000);
          await pageConstants.passPage.searchForPassRefence.type(referceNumber);
          await page.waitForTimeout(2000);
          await pageConstants.passPage.approveEdit.click();
      
          await pageConstants.passPage.openPicApproval.click();
          await pageConstants.passPage.approveClose.click();
      
          await pageConstants.passPage.openPassportApproval.click();
          await pageConstants.passPage.approveClose.click();
      
          await pageConstants.passPage.openUniqueApproval.click();
          await pageConstants.passPage.approveClose.click();
      
          await pageConstants.passPage.openEmiratesApproval.click();
          await pageConstants.passPage.approveClose.click();

          await pageConstants.passPage.openSupportiveNocDocApproval.click();
          await pageConstants.passPage.approveClose.click();
      
          await pageConstants.passPage.approveButton.click();
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(5000);
          await expect(pageConstants.passPage.approveSuccessMess).toBeVisible();

          await page.waitForTimeout(2000);
          await pageConstants.loginPage.logoutDrop.click();
          await pageConstants.loginPage.logoutButton.click();
  });
  
  Then('verify second approval successfully message for one year pass', async ({page}) => {
          const pageConstants = new PageConstants(page);
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(1000);
          await pageConstants.loginPage.enterUsername.type(approveUserName2);
          await pageConstants.loginPage.enterpassword.type(approvePassword2);
          await pageConstants.loginPage.submitButton.click();
          await page.waitForTimeout(1000);
          await pageConstants.passPage.passManaDrop.click();
          await pageConstants.passPage.approvePassOption.click();
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(1000);
          await pageConstants.passPage.searchForPassRefence.type(referceNumber);
          await page.waitForTimeout(1000);
          await pageConstants.passPage.approveEdit.click();
          await page.waitForTimeout(1000);
          await pageConstants.passPage.approveButton.click();
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(3000);
          await expect(pageConstants.passPage.approveSuccessMess).toBeVisible();

          await page.waitForTimeout(2000);
          await pageConstants.loginPage.logoutDrop.click();
          await pageConstants.loginPage.logoutButton.click();
  });
  
  Then('verify Final approval successfully message for one year pass', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await pageConstants.loginPage.enterUsername.type(approveUserName3);
    await pageConstants.loginPage.enterpassword.type(approvePassword3);
    await pageConstants.loginPage.submitButton.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await pageConstants.passPage.passManaDrop.click();
    await pageConstants.passPage.approvePassOption.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1000);
    await pageConstants.passPage.searchForPassRefence.type(referceNumber);
    await page.waitForTimeout(1000);
    await pageConstants.passPage.approveEdit.click();
    await page.waitForTimeout(1000);
    await pageConstants.passPage.approveButton.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(pageConstants.passPage.approveSuccessMess).toBeVisible();
    await pageConstants.passPage.passManaDrop.click();
    await pageConstants.passPage.viewAllPassOption.click();
    await page.waitForTimeout(1000);
    await pageConstants.passPage.searchForPassRefence.type(referceNumber);
    await page.waitForTimeout(3000);
    await expect(pageConstants.passPage.forPrintStatus).toBeVisible();
  });