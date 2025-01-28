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
const cvnNo=testData.globalData.cvv
const dynamicNumber=faker.number.int(100000000)
const emid=testData.globalData.emiratesId;
const actualEid=emid+dynamicNumber;
const existingEid=testData.globalData.existingEid
const particularDateExpire=faker.helpers.arrayElement(['30','29']);
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


When(/^user selects port access for apply marine pass$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.portAccess.click();
});

When(/^user enter all the information for pass information$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.portDropUi).toBeVisible();
    const dropdownLocator = page.locator("//select[@id='portsId']");
    await dropdownLocator.selectOption({ label: 'Al Hamriya Port' });
    const dropdownLocator2 = page.locator("//select[@id='gateIdStr']");
    await dropdownLocator2.selectOption({ label: 'Gate - 1' });
    const dropdownLocator3 = page.locator("//select[@id='passTypeIdStr']");
    await dropdownLocator3.selectOption({ label: 'Entry Permit to Maritime Zone' });
});

When(/^user enter the infomation and seach visitor availability$/, async({page}) => {
	 const pageConstants = new PageConstants(page);
        await expect(pageConstants.passPage.passdurationDropUi).toBeVisible();
        const dropdownLocator = page.locator("//select[@id='passDurationIdStr']");
        await dropdownLocator.selectOption({ label: 'One Year Pass' });
        await expect(pageConstants.passPage.purposeDropUi).toBeVisible();
        const dropdownLocator2 = page.locator("//select[@id='reasonOfVisitIdStr']");
        await dropdownLocator2.selectOption({ label: 'Other' });
        const visitReason=page.locator("//input[@id='reasonOfVisitTextStr']")
        await visitReason.fill('Maintance');
        await expect(pageConstants.passPage.dateOfVisitDropUi).toBeVisible();
        const dateOfVisit = page.locator("//input[@id='dateOfVisitStr']");
        await dateOfVisit.click();
        const dateOfVisitMonth=page.locator(`(//td[normalize-space(text())='${particularDateExpire}'])[2]`)
        await dateOfVisitMonth.click();
        const visitArea=page.locator("//input[@id='companyNameHC']")
        await visitArea.fill('polo');
        //enter visa type
        const visaTpe = page.locator("//select[@id='searchVisaTypeIdStr']");
        await visaTpe.selectOption({ label: 'Resident' });
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
     const genderDrop = page.locator("//select[@name='serachGender']");
     await genderDrop.selectOption({ label: 'Male' });
     await pageConstants.passPage.searchButton.click();
     await expect(pageConstants.passPage.errorValidManually).toBeVisible();
});

When(/^user enter the infomation of visitor manually$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    const dropdownLocator = page.locator("//select[@id='title']");
    await dropdownLocator.selectOption({ label: 'Mr' });
    await pageConstants.passPage.visfirstName.type(fname);
    await pageConstants.passPage.vislastName.type(lname);
   
});

When(/^user enter the invalid email address$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.visemail.type('abcpolo');
    await pageConstants.passPage.visMobile.click();
});

Then(/^verify error message for the email address$/, async({page}) => {
    const pageConstants = new PageConstants(page);
    const errorEmail=page.locator("//label[@id='email-error']");
    await expect(errorEmail).toBeVisible();
});

When(/^user enter the valid email address for visitor$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await pageConstants.passPage.visemail.clear();
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
     await pageConstants.passPage.personalPic.setInputFiles(uploadFilePath);
     await pageConstants.passPage.passportup.setInputFiles(uploadFilePath);
     await pageConstants.passPage.suppportDocUp.setInputFiles(uploadFilePath);
     await pageConstants.passPage.eidUp.setInputFiles(uploadFilePath);
     await pageConstants.passPage.dnaUp.setInputFiles(uploadFilePath);
    
});

When(/^add the visitor on the visitor page$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await pageConstants.passPage.addVisitor.click();
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
    await expect(pageConstants.passPage.creditDebit).toBeVisible();
});

When(/^user enter infomation for the payment and submit$/,async ({page}) => {
	    const pageConstants = new PageConstants(page);
        await pageConstants.passPage.creditDebit.click();
        await pageConstants.passPage.masterCard.click();
        await pageConstants.passPage.notifyMe.click();
        await pageConstants.passPage.emailForPayment.type(emailForNotification)
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

Then(/^Verify payment successfull message$/, async({page}) => {
	const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.passPage.confirmationPay).toBeVisible();
});
