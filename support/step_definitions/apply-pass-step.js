const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../PageConstants");
const { expect } = require('@playwright/test');
const testData=require('../../test_data/userData.json');
const { faker, fa } = require('@faker-js/faker');
const exp = require('constants');
const hCompany=testData.globalData.hostCompany
const masterCardNo=testData.globalData.masterCard
const cvnNo=testData.globalData.cvv
const dynamicNumber=faker.number.int(100000000)
const emid=testData.globalData.emiratesId;
const actualEid=emid+dynamicNumber;
const existingEid=testData.globalData.existingEid
const particularDateExpire=faker.helpers.arrayElement(['30','31']);
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

Then(/^user select port entry gate and pass type$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.portAccess.click();
    await expect(pageConstants.passPage.portDropUi).toBeVisible();
    const dropdownLocator = page.locator("//select[@id='portsId']");
    await dropdownLocator.selectOption({ label: 'Port Rashid' });
    const dropdownLocator2 = page.locator("//select[@id='gateIdStr']");
    await dropdownLocator2.selectOption({ label: 'Any Gate' });
    const dropdownLocator3 = page.locator("//select[@id='passTypeIdStr']");
    await dropdownLocator3.selectOption({ label: 'Business Meeting' });
   
});

Then(/^user enters pass duration Purpose of visit and date of visit$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.passdurationDropUi).toBeVisible();
    const dropdownLocator = page.locator("//select[@id='passDurationIdStr']");
    await dropdownLocator.selectOption({ label: 'One Day Pass' });
    await expect(pageConstants.passPage.purposeDropUi).toBeVisible();
    const dropdownLocator2 = page.locator("//select[@id='reasonOfVisitIdStr']");
    await dropdownLocator2.selectOption({ label: 'Business Meeting' });
    await expect(pageConstants.passPage.dateOfVisitDropUi).toBeVisible();
    const openCalendardob = page.locator("//input[@id='dateOfVisitStr']");
    await openCalendardob.click();
    const selectDatedob=page.locator(`(//td[normalize-space(text())='${particularDateExpire}'])[2]`)
    await selectDatedob.click();
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
    const dropdownLocator = page.locator("//select[@id='searchVisaTypeIdStr']");
    await dropdownLocator.selectOption({ label: 'Resident' });
    await pageConstants.passPage.eidUi.type(actualEid);
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
     //select gender
     const dropdownLocator2 = page.locator("//select[@name='serachGender']");
     await dropdownLocator2.selectOption({ label: 'Male' });
});

Then(/^user search the visitor information$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await pageConstants.passPage.searchButton.click();
    await expect(pageConstants.passPage.errorValidManually).toBeVisible();
});

When(/^user enters the visitor all information and add$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    const dropdownLocator = page.locator("//select[@id='title']");
    await dropdownLocator.selectOption({ label: 'Mr' });
    await pageConstants.passPage.visfirstName.type(fname);
    await pageConstants.passPage.vislastName.type(lname);
    await pageConstants.passPage.visemail.type(emailId);
    await pageConstants.passPage.visMobile.type(mobileNum);
    const designation = page.locator("//select[@id='designationIdStr']");
    await designation.selectOption({ label: 'Admin' });
    await pageConstants.passPage.vispassPortNumber.fill('986587');
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
     //enter nationality
     await pageConstants.passPage.visNationalField.type(nationality);
     await pageConstants.passPage.selectVisNationality.click();
     await pageConstants.passPage.visCompany.type(fname);
     await pageConstants.passPage.personalFile.setInputFiles(uploadFilePath);
     await pageConstants.passPage.passportFile.setInputFiles(uploadFilePath);
     await pageConstants.passPage.eidFile.setInputFiles(uploadFilePath);
     await pageConstants.passPage.supportingaFile.setInputFiles(uploadFilePath);
     await pageConstants.passPage.addVisitor.click();
 
});

Then(/^verify visitor added manually in list$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.editButton).toBeVisible();
});

When(/^user enters the existing emirate id on apply gate pass page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    const dropdownLocator = page.locator("//select[@id='searchVisaTypeIdStr']");
    await dropdownLocator.selectOption({ label: 'Resident' });
    await pageConstants.passPage.eidUi.type(existingEid);
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
    await pageConstants.passPage.personalFile.setInputFiles(uploadFilePath);
    await pageConstants.passPage.passportFile.setInputFiles(uploadFilePath);
    await pageConstants.passPage.eidFile.setInputFiles(uploadFilePath);
    await pageConstants.passPage.supportingaFile.setInputFiles(uploadFilePath);
    await pageConstants.passPage.addVisitor.click();

});

Then(/^verify visitor added with existing eid in list$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.deletButton).toBeVisible();
});

When(/^user select visitor from list and select delete button$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await (pageConstants.passPage.deletButton).click();
});

Then(/^verify vistor deleted message should display$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.deleteYes).toBeVisible();
    await (pageConstants.passPage.deleteYes).click();
});

Then(/^user select terms and condition check box on apply page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await (pageConstants.passPage.termsAndCondiUi).click();
    await pageConstants.passPage.finalSubmit.click();
});

When(/^user is redirected to the payment Information for apply pass$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.creditDebit.click();
    await pageConstants.passPage.masterCard.click();
    await pageConstants.passPage.paymentTermCond.click();
    await pageConstants.passPage.agreeandPay.click();
    await page.waitForLoadState("networkidle");
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

Then(/^verify total payable pass amount is paid on payment page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.confirmationPay).toBeVisible();

});
