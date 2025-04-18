const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../test_data/userData.json');
const { faker, fa, tr } = require('@faker-js/faker');
const exp = require('constants');
const hCompany=testData.globalData.hostCompany
const masterCardNo=testData.globalData.masterCard
const cvnNo=testData.globalData.cvv
const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesId;
const actualEid=emid+dynamicNumber
const existingEid=testData.globalData.existingEid
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
const uploadPic=path.join(process.cwd(), 'test_data/upload/pic.png');
const uploadPassport=path.join(process.cwd(), 'test_data/upload/passport.pdf');
const uploadEid=path.join(process.cwd(), 'test_data/upload/EID.pdf');
const uploadSupport=path.join(process.cwd(), 'test_data/upload/sample.pdf');
let referceNumber;

Then(/^user select port entry gate and pass type$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.portAccess.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await page.waitForSelector(`//select[@id='portsId']`, { state: 'visible' });
    await expect(pageConstants.passPage.portDropUi).toBeVisible();
    await page.waitForTimeout(2000);
    const dropdownLocator = page.locator("//select[@id='portsId']");
    await dropdownLocator.selectOption({ label: 'Port Rashid' });
    await page.waitForTimeout(2000);
    const dropdownLocator2 = page.locator("//select[@id='gateIdStr']");
    await dropdownLocator2.selectOption({ label: 'Any Gate' });
    await page.waitForTimeout(2000);
    const dropdownLocator3 = page.locator("//select[@id='passTypeIdStr']");
    await dropdownLocator3.selectOption({ label: 'Business Meeting' });
   
});

Then(/^user enters pass duration Purpose of visit and date of visit$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.passdurationDropUi).toBeVisible();
    await page.waitForTimeout(2000);
    const dropdownLocator = page.locator("//select[@id='passDurationIdStr']");
    await dropdownLocator.selectOption({ label: 'One Day Pass' });
    await expect(pageConstants.passPage.purposeDropUi).toBeVisible();
    await page.waitForTimeout(2000);
    const dropdownLocator2 = page.locator("//select[@id='reasonOfVisitIdStr']");
    await dropdownLocator2.selectOption({ label: 'Business Meeting' });
    await expect(pageConstants.passPage.dateOfVisitDropUi).toBeVisible();
    await page.waitForLoadState("networkidle");
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
        const openCalendardob=page.locator("(//img[@alt='Calender Icon'])[3]");
        await openCalendardob.click();
        const selectDatedob=page.locator(`(//td[normalize-space(text())='${visitDate}'])[1]`)
        await selectDatedob.click();
    }
    else{
        const openCalendardob=page.locator("(//img[@alt='Calender Icon'])[3]");
        await openCalendardob.click();
        const selectDatedob=page.locator(`(//td[normalize-space(text())='${visitDate}'])[2]`)
        await selectDatedob.click();
    }

    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.visitHour.type(hoursToVisit);
    await pageConstants.passPage.visitMinutes.type(hoursToVisit);
});

Then(/^user eneter host company name and per pass amount$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await pageConstants.passPage.hostCompanyUi.type(hCompany);
    await pageConstants.passPage.hcompanyselect.click();
});

When(/^user is redirected to the visitor Information for apply pass$/, async({page}) => {
    const pageConstants = new PageConstants(page);
	await expect(pageConstants.passPage.eidUi).toBeVisible();
});

When(/^user enter visa type emirate id gender and dob$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForTimeout(3000);
    const dropdownLocator = page.locator("//select[@id='searchVisaTypeIdStr']");
    await dropdownLocator.selectOption({ label: 'Resident' });
    await pageConstants.passPage.eidUi.type(actualEid);
    await page.waitForLoadState("networkidle");

     //calendra handle dob
     await page.waitForTimeout(3000);
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
     const dropdownLocator2 = page.locator("//select[@name='serachGender']");
     await dropdownLocator2.selectOption({ label: 'Male' });
});

Then(/^user search the visitor information$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await pageConstants.passPage.searchButton.click();
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.errorValidManually).toBeVisible();

});

When(/^user enters the visitor all information and add$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
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
    await page.waitForTimeout(3000);
    const designation = page.locator("//select[@id='designationIdStr']");
    await designation.selectOption({ label: 'Admin' });
    await pageConstants.passPage.vispassPortNumber.clear();
    await pageConstants.passPage.vispassPortNumber.type(dynamicNumber);
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
     await pageConstants.passPage.visCompany.type(fname);
     await pageConstants.passPage.personalFile.setInputFiles(uploadPic);
     await pageConstants.passPage.passportFile.setInputFiles(uploadPassport);
     await pageConstants.passPage.eidFile.setInputFiles(uploadEid);
     await pageConstants.passPage.supportingaFile.setInputFiles(uploadSupport);
     await pageConstants.passPage.addVisitor.click();
 
});

Then(/^verify visitor added manually in list$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await page.waitForSelector(`(//a[@data-bind='click: $root.editUser'])[1]`, { state: 'visible' });
    await expect(pageConstants.passPage.editButton).toBeVisible();
});

When(/^user enters the existing emirate id on apply gate pass page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForTimeout(3000);
    const dropdownLocator = page.locator("//select[@id='searchVisaTypeIdStr']");
    await dropdownLocator.selectOption({ label: 'Resident' });
    await pageConstants.passPage.eidUi.type(existingEid);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
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
     const dropdownLocator2 = page.locator("//select[@name='serachGender']");
     await dropdownLocator2.selectOption({ label: 'Male' });
});

When(/^user search the visitor information on the apply gate page$/,async ({page}) => {
	const pageConstants = new PageConstants(page);
    await pageConstants.passPage.searchButton.click();
});

Then(/^verify pop for the existing visitor infomation$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.yesConfirm).toBeVisible();
});

Then(/^user selects yes then visitor infomation should filled$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await (pageConstants.passPage.yesConfirm).click();
    await pageConstants.passPage.visCompany.type(fname);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.personalFile.setInputFiles(uploadFilePath);
    await pageConstants.passPage.passportFile.setInputFiles(uploadFilePath);
    await pageConstants.passPage.eidFile.setInputFiles(uploadFilePath);
    await pageConstants.passPage.supportingaFile.setInputFiles(uploadFilePath);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.addVisitor.click();

});

Then(/^verify visitor added with existing eid in list$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.deletButton).toBeVisible();
});

When(/^user select visitor from list and select delete button$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await (pageConstants.passPage.deletButton).click();
});

Then(/^verify vistor deleted message should display$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.deleteYes).toBeVisible();
    await (pageConstants.passPage.deleteYes).click();
});

Then(/^user select terms and condition check box on apply page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await (pageConstants.passPage.termsAndCondiUi).click();
    await pageConstants.passPage.finalSubmit.click();
});

When(/^user is redirected to the payment Information for apply pass$/, async({page}) => {
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
    await page.waitForTimeout(7000);
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

Then(/^verify total payable pass amount is paid on payment page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(10000);
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.passPage.confirmationPay).toBeVisible();
    referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
    console.log('this is added refence number'+ referceNumber);
});

When('user cancelled apply pass on the list page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(7000);
    await pageConstants.loginPage.enterUsername.fill(testData.globalData.adminUsername);
    await pageConstants.loginPage.enterpassword.fill(testData.globalData.adminPassword);
    await pageConstants.loginPage.submitButton.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(7000);
    await pageConstants.passPage.adminDropdown.click();
    await pageConstants.passPage.cancelOption.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await pageConstants.passPage.referenceNumInput.type(referceNumber);
    await pageConstants.passPage.remarkInput.type('this is generated by automation and cancelled');
    await pageConstants.passPage.cancelSubmit.click();
  });
  
  Then('verify confirmation message for the cancelled', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(5000);
    await expect(pageConstants.passPage.cancelConfirmtion).toBeVisible();
  });

  When('user search cancelled pass on list page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(3000);
    await pageConstants.passPage.passmanagementDrop.click();
    await pageConstants.passPage.viewAllPassOption.click();
    await pageConstants.passPage.searchForPassRefence.type(referceNumber);
  });
  
  Then('verify status of cancelled pass should be expired', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(pageConstants.passPage.cancelledStatus).toBeVisible();
  });
