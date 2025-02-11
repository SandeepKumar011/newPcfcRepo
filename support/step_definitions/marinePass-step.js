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
const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesId;
const actualEid=emid+dynamicNumber
const addedEid='784199221026589';
const visitDate=faker.helpers.arrayElement(['15','13','14']);
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
let referceNumber;

When(/^user selects port access for apply marine pass$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.portAccess.click();
});

When(/^user enter all the information for pass information$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await page.waitForSelector(`//select[@id='portsId']`, { state: 'visible' });
    await expect(pageConstants.passPage.portDropUi).toBeVisible();
    await page.waitForTimeout(5000);
    const dropdownLocator = page.locator("//select[@id='portsId']");
    await dropdownLocator.selectOption({ label: 'Al Hamriya Port' });
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    const dropdownLocator2 = page.locator("//select[@id='gateIdStr']");
    await dropdownLocator2.selectOption({ label: 'Gate - 1' });
    await page.waitForTimeout(5000);
    const dropdownLocator3 = page.locator("//select[@id='passTypeIdStr']");
    await dropdownLocator3.selectOption({ label: 'Entry Permit to Maritime Zone' });
});

When(/^user enter the infomation and seach visitor availability$/, async({page}) => {
	 const pageConstants = new PageConstants(page);
        await expect(pageConstants.passPage.passdurationDropUi).toBeVisible();
        await page.waitForTimeout(5000);
        const dropdownLocator = page.locator("//select[@id='passDurationIdStr']");
        await dropdownLocator.selectOption({ label: 'Six Months Pass' });
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(5000);
        await expect(pageConstants.passPage.purposeDropUi).toBeVisible();
        const dropdownLocator2 = page.locator("//select[@id='reasonOfVisitIdStr']");
        await dropdownLocator2.selectOption({ label: 'Other' });
        await page.waitForTimeout(5000);
        const visitReason=page.locator("//input[@id='reasonOfVisitTextStr']")
        await visitReason.fill('Maintance');
        await page.waitForLoadState("networkidle");
        await expect(pageConstants.passPage.dateOfVisitDropUi).toBeVisible();
        await page.waitForTimeout(5000);
        const dateOfVisit = page.locator("//input[@id='dateOfVisitStr']");
        await dateOfVisit.click();
        const dateOfVisitMonth=page.locator(`(//td[normalize-space(text())='${visitDate}'])[1]`)
        await dateOfVisitMonth.click();
        await page.waitForLoadState("networkidle");
        const visitArea=page.locator("//input[@id='companyNameHC']")
        await visitArea.fill('polo');
        await page.waitForLoadState("networkidle");
        //enter visa type
        await page.waitForTimeout(5000);
        const visaTpe = page.locator("//select[@id='searchVisaTypeIdStr']");
        await visaTpe.selectOption({ label: 'Resident' });
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
     const genderDrop =page.locator("//select[@name='serachGender']");
     await genderDrop.selectOption({ label: 'Male' });
     await pageConstants.passPage.searchButton.click();
     await page.waitForLoadState("networkidle");
     await expect(pageConstants.passPage.errorValidManually).toBeVisible();
});

When(/^user enter the infomation of visitor manually$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(5000);
    const dropdownLocator = page.locator("//select[@id='title']");
    await dropdownLocator.selectOption({ label: 'Mr' });
    await pageConstants.passPage.visfirstName.clear();
    await pageConstants.passPage.visfirstName.type(fname);
    await pageConstants.passPage.vislastName.clear();
    await pageConstants.passPage.vislastName.type(lname);
   
});

When(/^user enter the invalid email address$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.visemail.clear();
    await pageConstants.passPage.visemail.type('abcpolo');
    await pageConstants.passPage.visMobile.click();
});

Then(/^verify error message for the email address$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(5000);
    const errorEmail=page.locator("//label[@id='email-error']");
    await expect(errorEmail).toBeVisible();
});

When(/^user enter the valid email address for visitor$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await pageConstants.passPage.visemail.clear();
    await pageConstants.passPage.visemail.type(emailId);
    await pageConstants.passPage.visMobile.clear();
    await pageConstants.passPage.visMobile.type(mobileNum);
    await page.waitForTimeout(5000);
    const designation = page.locator("//select[@id='designationIdStr']");
    await designation.selectOption({ label: 'Admin' });
    await pageConstants.passPage.vispassPortNumber.clear();
    await pageConstants.passPage.vispassPortNumber.fill(dynamicNumber);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    //eid expire date
     const openCalendardob = page.locator("//input[@id='emiratesIdExpiry']");
     await openCalendardob.click();
     const openYeardob=page.locator("(//th[@class='datepicker-switch'])[1]")
     await openYeardob.click();
     const openYearListdob=page.locator("(//th[@class='datepicker-switch'])[2]")
     await openYearListdob.click();
     const selectYeardob=page.locator(`//span[normalize-space(text())='${futureYear}']`)
     await selectYeardob.click();
     const selectMonthdob=page.locator(`//span[normalize-space(text())='${monthDob}']`)
     await selectMonthdob.click();
     const selectDatedob=page.locator(`//td[normalize-space(text())='${particularDate}']`)
     await selectDatedob.click();
     await page.waitForLoadState("networkidle");
     //enter nationality
     await pageConstants.passPage.visNationalField.type(nationality);
     await pageConstants.passPage.selectVisNationality.click();
     await pageConstants.passPage.visCompany.clear();
     await pageConstants.passPage.visCompany.type(fname);
     await pageConstants.passPage.personalPic.setInputFiles(uploadFilePath);
     await pageConstants.passPage.passportup.setInputFiles(uploadFilePath);
     await pageConstants.passPage.suppportDocUp.setInputFiles(uploadFilePath);
     await pageConstants.passPage.eidUp.setInputFiles(uploadFilePath);
     await pageConstants.passPage.dnaUp.setInputFiles(uploadFilePath);
    
});

When(/^add the visitor on the visitor page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await pageConstants.passPage.addVisitor.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await page.waitForSelector(`(//a[@data-bind='click: $root.editUser'])[1]`, { state: 'visible' });
    await expect(pageConstants.passPage.editButton).toBeVisible();
});

Then(/^verify user is added in the list$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.editButton).toBeVisible();
});

When(/^user submit the visitor information$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await (pageConstants.passPage.termsAndCondiUi).click();
    await pageConstants.passPage.finalSubmit.click();
    await expect(pageConstants.passPage.confirmApprovalAlert).toBeVisible();
    await pageConstants.passPage.alertOk.click();

});

Then(/^user should redirected to the payment page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(20000);
    await page.waitForSelector(`//span[normalize-space(text())='Debit/Credit']`, { state: 'visible' });
    await expect(pageConstants.passPage.creditDebit).toBeVisible();
});

When(/^user enter infomation for the payment and submit$/,async ({page}) => {
	    const pageConstants = new PageConstants(page);
        await pageConstants.passPage.creditDebit.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(20000);
        await page.waitForSelector(`//img[@id='MasterCard']`, { state: 'visible' });
        await pageConstants.passPage.masterCard.click();
        await pageConstants.passPage.notifyMe.click();
        await pageConstants.passPage.emailForPayment.type(emailForNotification)
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
    
        await pageConstants.passPage.cvnInput.type(cvnNo);
        await pageConstants.passPage.nextButton.click();
        await pageConstants.passPage.finalPay.click();
});

Then(/^Verify payment successfull message$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(20000);
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.passPage.confirmationPay).toBeVisible();
    referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
    console.log('this is added refence number'+ referceNumber);
});

When('user cancelled apply pass on the list page for marine', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.enterUsername.fill(testData.globalData.adminUsername);
    await pageConstants.loginPage.enterpassword.fill(testData.globalData.adminPassword);
    await pageConstants.loginPage.submitButton.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(10000);
    await pageConstants.passPage.adminDropdown.click();
    await pageConstants.passPage.cancelOption.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await pageConstants.passPage.referenceNumInput.type(referceNumber);
    await pageConstants.passPage.remarkInput.type('this is generated by automation and cancelled');
    await pageConstants.passPage.cancelSubmit.click();
  });
  
  Then('verify confirmation message for the cancelled for marine', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await expect(pageConstants.passPage.cancelConfirmtion).toBeVisible();
  });
  
  When('user search cancelled pass on list page for marine', async ({page}) => {
    const pageConstants = new PageConstants(page);
       await page.waitForLoadState("networkidle");
       await page.waitForTimeout(5000);
       await pageConstants.passPage.passmanagementDrop.click();
       await pageConstants.passPage.viewAllPassOption.click();
       await page.waitForTimeout(5000);
       await pageConstants.passPage.searchForPassRefence.type(referceNumber);
  });
  
  Then('verify status of cancelled pass should be expired for marine', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await expect(pageConstants.passPage.expireStatus).toBeVisible();
  });
