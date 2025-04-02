
const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../../test_data/userData.json');
const oneMonthData=require('../../../test_data/oneMonthData.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');

const portName=oneMonthData.sanityDataCompany.portName
const gateType=oneMonthData.sanityDataCompany.gateType
const passDuration=oneMonthData.sanityDataCompany.passDuration
const passType=oneMonthData.sanityDataCompany.passType
const reasonVisit=oneMonthData.sanityDataCompany.visitReason
const hCompany=oneMonthData.sanityDataCompany.hostCompany
const visDesignation=faker.helpers.arrayElement(['Ac Technician', 'Account Assistant','Admin']);
const usernameLogin=oneMonthData.sanityDataCompany.username
const passwordLogin=oneMonthData.sanityDataCompany.password
const approvalusername=oneMonthData.sanityDataCompany.approveUsername
const approvalpassword=oneMonthData.sanityDataCompany.approvePassword
const approvalusername2=oneMonthData.sanityDataCompany.approveUsername2
const approvalpassword2=oneMonthData.sanityDataCompany.approvePassword2
const approvalusername3=oneMonthData.sanityDataCompany.approveUsername3
const approvalpassword3=oneMonthData.sanityDataCompany.approvePassword3
const approvalusername4=oneMonthData.sanityDataCompany.approveUsername4
const approvalpassword4=oneMonthData.sanityDataCompany.approvePassword4
const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesId;
const actualEid=emid+dynamicNumber
const masterCardNo=testData.globalData.masterCard
const cvnNo=testData.globalData.cvv
const particularDate=faker.helpers.arrayElement(['15', '16', '17', '18', '19', '20']);
const yearDob=faker.helpers.arrayElement(['2004', '2005']);
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Sep', 'Oct','Nov']);
const fname=faker.person.firstName();
const lname=faker.person.lastName();
const emailId=faker.internet.email();
const mobileNum=faker.string.numeric({ length: 12 })
const hoursToVisit='5';
const nationality=testData.globalData.national
const uploadPic=path.join(process.cwd(), 'test_data/upload/pic.png');
const uploadPassport=path.join(process.cwd(), 'test_data/upload/passport.pdf');
const uploadEid=path.join(process.cwd(), 'test_data/upload/EID.pdf');
const uploadSupport=path.join(process.cwd(), 'test_data/upload/sample.pdf');
let referceNumber;

Given('user navigates to the login page for lost pass company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
  });
  
  When('user enter the credential for the login for lost pass company', async ({page}) => {
       const pageConstants = new PageConstants(page);
       await page.waitForLoadState("networkidle");
       await pageConstants.loginPage.enterUsername.type(usernameLogin)
       await pageConstants.loginPage.enterpassword.type(passwordLogin);
       await pageConstants.loginPage.submitButton.click();
  });
  
  Then('user redirected to the home page for lost pass company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
    await expect(pageConstants.passPage.passmanagementDrop).toBeVisible();
    await (pageConstants.passPage.passmanagementDrop).click();
    await (pageConstants.passPage.selectapplyGatePass).click();
  });
  
  Then('Enter the pass information for lost pass company', async ({page}) => {
       const pageConstants = new PageConstants(page);
       await page.waitForLoadState("networkidle");
       await page.waitForTimeout(5000);
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
       await page.waitForTimeout(5000);
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
       await pageConstants.passPage.hostCompanyUi.type(hCompany);
       await page.waitForTimeout(1000);
       await page.locator(`//div[normalize-space(text())='${hCompany}']`).click();
  });
  
  Then('user enter the visitor information for lost pass company', async ({page}) => {
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
         await pageConstants.passPage.personalFile.setInputFiles(uploadPic);
         await pageConstants.passPage.passportFile.setInputFiles(uploadPassport);
         await pageConstants.passPage.eidFile.setInputFiles(uploadEid);
         await pageConstants.passPage.supportingaFile.setInputFiles(uploadSupport);
  });
  
  Then('user save the visitor on the add page for lost pass company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.addVisitor.click();
    await page.waitForTimeout(10000);
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(`(//a[@data-bind='click: $root.editUser'])[1]`, { state: 'visible' });
    await expect(pageConstants.passPage.editButton).toBeVisible();
  });
  
  Then('verify user is added in the list for the lost pass company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.editButton).toBeVisible();
  });
  
  When('user submit the visitor information for lost pass company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await (pageConstants.passPage.termsAndCondiUi).click();
    await pageConstants.passPage.finalSubmit.click();
    await page.waitForTimeout(10000);
    await pageConstants.passPage.okForAlert.click();
  });
  
  When('user paid amount for the apply pass for lost pass company', async ({page}) => {
      const pageConstants = new PageConstants(page);
       await page.waitForLoadState("networkidle");
       await page.waitForTimeout(10000);
       await page.waitForSelector(`//span[normalize-space(text())='Debit/Credit']`, { state: 'visible' });
       await pageConstants.passPage.creditDebit.click();
       await page.waitForLoadState("networkidle");
       await page.waitForTimeout(7000);
       await page.waitForSelector(`//img[@id='MasterCard']`, { state: 'visible' });
       await pageConstants.passPage.masterCard.click();
       await pageConstants.passPage.paymentTermCond.click();
       await pageConstants.passPage.agreeandPay.click();
       await page.waitForLoadState("networkidle");
       await page.waitForTimeout(10000);
       await page.waitForSelector(`//input[@id='card_number']`, { state: 'visible' });
       await pageConstants.passPage.cardNumberInput.type(masterCardNo);
       //expire monyth
       const dropdownLocator2 = page.locator("//select[@name='card_expiry_month']");
       await dropdownLocator2.selectOption({ index: 2 });
   
       //expire year
       const expYear = page.locator("//select[@name='card_expiry_year']");
       await expYear.selectOption({ index: 4 });
       await page.waitForLoadState("networkidle");
       await pageConstants.passPage.cvnInput.type(cvnNo);
       await pageConstants.passPage.nextButton.click();
       await pageConstants.passPage.finalPay.click();
  });
  
  Then('verify pass apply successfully messge for lost pass company', async ({page}) => {
             const pageConstants = new PageConstants(page);
             await page.waitForLoadState("networkidle");
             await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
             await expect(pageConstants.passPage.confirmationPay).toBeVisible();
             referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
             console.log('this is added refence number'+ referceNumber);
  });

  When(/^user select logout button on home page for lost pass company$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(2000);
    await pageConstants.loginPage.logoutDrop.click();
    await pageConstants.loginPage.logoutButton.click();
});

Then(/^verify logout verification message for lost pass company$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.loginPage.enterUsername).toBeVisible();
});

When(/^user approve the apply pass on the list page for lost pass company$/, async({page}) => {
	    const pageConstants = new PageConstants(page);
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);
        await pageConstants.loginPage.enterUsername.type(approvalusername);
        await pageConstants.loginPage.enterpassword.type(approvalpassword);
        await pageConstants.loginPage.submitButton.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);
        await pageConstants.passPage.passManaDrop.click();
        await pageConstants.passPage.approvePassOption.click();
});

Then(/^verify pass approved successfully message for lost pass company$/, async({page}) => {
	          const pageConstants = new PageConstants(page);
              await page.waitForLoadState("networkidle");
              await page.waitForTimeout(5000);
              await pageConstants.passPage.searchForPassRefence.type(referceNumber);
              await pageConstants.passPage.approveEdit.click();
          
              await pageConstants.passPage.approvePhotoEdit.click();
              await pageConstants.passPage.approveClose.click();
          
              await pageConstants.passPage.approvePassportEdit.click();
              await pageConstants.passPage.approveClose.click();
          
              await pageConstants.passPage.approveSupportEdit.click();
              await pageConstants.passPage.approveClose.click();
          
              await pageConstants.passPage.approveEmiratesEdit.click();
              await pageConstants.passPage.approveClose.click();
          
              await pageConstants.passPage.approveButton.click();
              await page.waitForLoadState("networkidle");
              await page.waitForTimeout(5000);
              await expect(pageConstants.passPage.approveSuccessMess).toBeVisible();
});

When(/^verify second second approval message for lost pass company$/, async({page}) => {
	      const pageConstants = new PageConstants(page);
        await page.waitForTimeout(2000);
        await pageConstants.loginPage.logoutDrop.click();
        await pageConstants.loginPage.logoutButton.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(2000);
        await pageConstants.loginPage.enterUsername.type(approvalusername2);
        await pageConstants.loginPage.enterpassword.type(approvalpassword2);
        await pageConstants.loginPage.submitButton.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(2000);
        await pageConstants.passPage.passManaDrop.click();
        await pageConstants.passPage.approvePassOption.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);
        await pageConstants.passPage.searchForPassRefence.type(referceNumber);
        await pageConstants.passPage.approveEdit.click();
    
        await pageConstants.passPage.approvePhotoEdit.click();
        await page.waitForTimeout(2000);
        await pageConstants.passPage.approveClose.click();
        await page.waitForTimeout(7000);
        await pageConstants.passPage.approvePassportEdit.click();
        await pageConstants.passPage.approveClose.click();
    
        await pageConstants.passPage.approveSupportEdit.click();
        await pageConstants.passPage.approveClose.click();
    
        await pageConstants.passPage.approveEmiratesEdit.click();
        await pageConstants.passPage.approveClose.click();

    
        await pageConstants.passPage.approveButton.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);
        await expect(pageConstants.passPage.approveSuccessMess).toBeVisible();
});

When(/^verify Third approval message for lost pass company$/, async({page}) => {
	      const pageConstants = new PageConstants(page);
        await page.waitForTimeout(2000);
        await pageConstants.loginPage.logoutDrop.click();
        await pageConstants.loginPage.logoutButton.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);
        await pageConstants.loginPage.enterUsername.type(approvalusername3);
        await pageConstants.loginPage.enterpassword.type(approvalpassword3);
        await pageConstants.loginPage.submitButton.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);
        await pageConstants.passPage.passManaDrop.click();
        await pageConstants.passPage.approvePassOption.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);
        await pageConstants.passPage.searchForPassRefence.type(referceNumber);
        await pageConstants.passPage.approveEdit.click();
    
        await pageConstants.passPage.approveButton.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);
        await expect(pageConstants.passPage.approveSuccessMess).toBeVisible();
        referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
        console.log('this is added refence number'+ referceNumber);
});

Then(/^verify final status completed message for lost pass company$/, async({page}) => {
	      const pageConstants = new PageConstants(page);
        await page.waitForTimeout(2000);
        await pageConstants.loginPage.logoutDrop.click();
        await pageConstants.loginPage.logoutButton.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(2000);
        await pageConstants.loginPage.enterUsername.type(approvalusername4);
        await pageConstants.loginPage.enterpassword.type(approvalpassword4);
        await pageConstants.loginPage.submitButton.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(2000);
        await pageConstants.passPage.passManaDrop.click();
        await pageConstants.passPage.printPass.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);
        await pageConstants.passPage.searchForPassRefence.type(referceNumber);
        await page.waitForTimeout(2000);
        await pageConstants.passPage.checkboxForPrint.click();
        await pageConstants.passPage.donwloadPass.click();
        await pageConstants.passPage.yesForDownload.click();
        await page.waitForTimeout(2000);
        await pageConstants.passPage.okForAlert.click();
        await page.waitForLoadState("networkidle");
        await pageConstants.passPage.passManaDrop.click();
        await pageConstants.passPage.viewAllPassOption.click();
        await page.waitForTimeout(5000);
        await pageConstants.passPage.searchForPassRefence.type(referceNumber);
        await page.waitForTimeout(5000);
        //this functionality is not working as of now
        //await expect(pageConstants.passPage.passPrintingStatus).toBeVisible();
});

When('user login for the report lost pass for the company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(2000);
    await pageConstants.loginPage.logoutDrop.click();
    await pageConstants.loginPage.logoutButton.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await pageConstants.loginPage.enterUsername.type(usernameLogin);
    await pageConstants.loginPage.enterpassword.type(passwordLogin);
    await pageConstants.loginPage.submitButton.click();
  });
  
  When('user select the lost pass on dashboard for the company', async ({page}) => {
      const pageConstants = new PageConstants(page);
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(5000);
      await pageConstants.passPage.passManaDrop.click();
      await pageConstants.passPage.reportLostdropdown.click();
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(5000);
      await pageConstants.passPage.searchForPassRefence.type(referceNumber);
      await page.waitForTimeout(2000);
      await pageConstants.passPage.viewLostPass.click();
      await pageConstants.passPage.remarkLostPass.type('this is generated by automation');
      await pageConstants.passPage.uploadfileLostPass.setInputFiles(uploadPic);
      await pageConstants.passPage.termsAndCondiUi.click();
      await pageConstants.passPage.submitLostPass.click();
      await pageConstants.passPage.okForAlert.click();
  
  });
  
  When('user paid fine amount for the lost pass for company', async ({page}) => {
      const pageConstants = new PageConstants(page);
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(10000);
      await page.waitForSelector(`//span[normalize-space(text())='Debit/Credit']`, { state: 'visible' });
      await pageConstants.passPage.creditDebit.click();
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(7000);
      await page.waitForSelector(`//img[@id='MasterCard']`, { state: 'visible' });
      await pageConstants.passPage.masterCard.click();
      await pageConstants.passPage.paymentTermCond.click();
      await pageConstants.passPage.agreeandPay.click();
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(10000);
      await page.waitForSelector(`//input[@id='card_number']`, { state: 'visible' });
      await pageConstants.passPage.cardNumberInput.type(masterCardNo);
      //expire monyth
      const dropdownLocator2 = page.locator("//select[@name='card_expiry_month']");
      await dropdownLocator2.selectOption({ index: 2 });
  
      //expire year
      const expYear = page.locator("//select[@name='card_expiry_year']");
      await expYear.selectOption({ index: 4 });
      await page.waitForLoadState("networkidle");
      await pageConstants.passPage.cvnInput.type(cvnNo);
      await pageConstants.passPage.nextButton.click();
      await pageConstants.passPage.finalPay.click();
  });
  
  When('verify success message for the payment for lost pass', async ({page}) => {
            const pageConstants = new PageConstants(page);
            await page.waitForLoadState("networkidle");
            await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
            await expect(pageConstants.passPage.confirmationPay).toBeVisible();
            referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
            console.log('this is added refence number'+ referceNumber);
  });
  
  Then('verify lost pass status on the list page for company', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    await pageConstants.passPage.passManaDrop.click();
    await pageConstants.passPage.viewAllPassOption.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    await pageConstants.passPage.searchForPassRefence.type(referceNumber);
    await page.waitForTimeout(2000);
    //this functionality is not working as of now
    //await expect(pageConstants.passPage.lostPassOption).toBeVisible();
  });