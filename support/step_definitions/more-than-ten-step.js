const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const path = require('path');
const { PageConstants } = require("../PageConstants");
const { expect } = require('@playwright/test');
const uatData=require('../../test_data/uat.json');
const { faker} = require('@faker-js/faker');

const hCompany=uatData.allData.approveHostCompany
const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=uatData.allData.emiratesId;
const actualEid=emid+dynamicNumber
const particularDate=faker.helpers.arrayElement(['15', '16', '17', '18', '19', '20']);
const yearDob=faker.helpers.arrayElement(['2004', '2005']);
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Sep', 'Oct','Nov']);
const fname=faker.person.firstName();
const lname=faker.person.lastName();
const emailId=faker.internet.email();
const mobileNum='788956897854';
const hoursToVisit='5';
const nationality=uatData.allData.national
const uploadFilePath=path.join(process.cwd(), 'test_data/upload/416kb.jpg');
let referceNumber;


When('user enter pass information on the create page for more than ten', async ({page}) => {
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
         await page.waitForTimeout(2000);
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

         await page.waitForLoadState("networkidle");
         await page.waitForTimeout(2000);
         await pageConstants.passPage.visitHour.type(hoursToVisit);
         await pageConstants.passPage.visitMinutes.type(hoursToVisit);
         await pageConstants.passPage.hostCompanyUi.type(hCompany);
         await page.locator(`//div[normalize-space(text())='${hCompany}']`).click();
  });
  
  When('user enter the visitor information on the create page for more than ten', async ({page}) => {

    for(let i=1;i<=4;i++)
    {
        const dynamicNumber=faker.string.numeric({ length: 8 })
        const emid=testData.globalData.emiratesId;
        const actualEidNew=emid+dynamicNumber
        const pageConstants = new PageConstants(page);
        await page.waitForLoadState("networkidle");
        const dropdownVisa = page.locator("//select[@id='searchVisaTypeIdStr']");
        await dropdownVisa.selectOption({ label: 'Resident' });
        await pageConstants.passPage.eidUi.type(actualEidNew);
        await page.waitForLoadState("networkidle");
    
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
         await page.waitForLoadState("networkidle");
         //select gender
         const dropdownLocator2 = page.locator("//select[@name='serachGender']");
         await dropdownLocator2.selectOption({ label: 'Male' });
         await pageConstants.passPage.searchButton.click();
         await page.waitForLoadState("networkidle");
         await expect(pageConstants.passPage.errorValidManually).toBeVisible();
         await page.waitForLoadState("networkidle");
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
         const designation = page.locator("//select[@id='designationIdStr']");
         await designation.selectOption({ label: 'Admin' });
         await pageConstants.passPage.vispassPortNumber.clear();
         await pageConstants.passPage.vispassPortNumber.type(dynamicNumber);
         await page.waitForLoadState("networkidle");
         //eid expire date
         await page.waitForTimeout(2000);
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
          await pageConstants.passPage.supportingaFile.setInputFiles(uploadFilePath)
          await pageConstants.passPage.addVisitor.click();
          await page.waitForLoadState("networkidle");
          await page.waitForTimeout(20000);
          await page.waitForSelector(`(//a[@data-bind='click: $root.editUser'])[1]`, { state: 'visible' });
          await expect(pageConstants.passPage.editButton).toBeVisible();
          console.log('visitor is added for ' + i)
    }       
  });

  Then('save four visitor as draft and select edit button from mydraft', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await (pageConstants.passPage.termsAndCondiUi).click();
    await pageConstants.passPage.saveAsDraft.click();
    await pageConstants.passPage.submitforDraft.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(20000);
    await expect(pageConstants.passPage.draftSuccessMess).toBeVisible();
    referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
    console.log('this is added refence number'+ referceNumber);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.myWorkspace.click();
    await pageConstants.passPage.myDraft.click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(10000);
    await pageConstants.passPage.searchForPassRefence.type(referceNumber);
    await page.waitForTimeout(10000);
    await expect(pageConstants.passPage.eyeIcon).click();
  });
  
  When('user add more four visitor and save as draft and select edit from mydraft', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(20000);
    await pageConstants.passPage.visitHour.type(hoursToVisit);
    await pageConstants.passPage.visitMinutes.type(hoursToVisit);

    for(let i=1;i<=4;i++)
        {
            const dynamicNumber=faker.string.numeric({ length: 8 })
            const emid=testData.globalData.emiratesId;
            const actualEidNew=emid+dynamicNumber
            const pageConstants = new PageConstants(page);
            await page.waitForLoadState("networkidle");
            const dropdownVisa = page.locator("//select[@id='searchVisaTypeIdStr']");
            await dropdownVisa.selectOption({ label: 'Resident' });
            await pageConstants.passPage.eidUi.type(actualEidNew);
            await page.waitForLoadState("networkidle");
        
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
             await page.waitForLoadState("networkidle");
             //select gender
             const dropdownLocator2 = page.locator("//select[@name='serachGender']");
             await dropdownLocator2.selectOption({ label: 'Male' });
             await pageConstants.passPage.searchButton.click();
             await page.waitForLoadState("networkidle");
             await expect(pageConstants.passPage.errorValidManually).toBeVisible();
             await page.waitForLoadState("networkidle");
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
             const designation = page.locator("//select[@id='designationIdStr']");
             await designation.selectOption({ label: 'Admin' });
             await pageConstants.passPage.vispassPortNumber.clear();
             await pageConstants.passPage.vispassPortNumber.type(dynamicNumber);
             await page.waitForLoadState("networkidle");
             //eid expire date
             await page.waitForTimeout(2000);
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
              await pageConstants.passPage.supportingaFile.setInputFiles(uploadFilePath)
              await pageConstants.passPage.addVisitor.click();
              await page.waitForLoadState("networkidle");
              await page.waitForTimeout(20000);
              await page.waitForSelector(`(//a[@data-bind='click: $root.editUser'])[1]`, { state: 'visible' });
              await expect(pageConstants.passPage.editButton).toBeVisible();
              console.log('visitor is added for ' + i)
        }    
        
        await page.waitForLoadState("networkidle");
        await (pageConstants.passPage.termsAndCondiUi).click();
        await pageConstants.passPage.saveAsDraft.click();
        await pageConstants.passPage.submitforDraft.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(20000);
        await expect(pageConstants.passPage.draftSuccessMess).toBeVisible();
        referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
        console.log('this is added refence number'+ referceNumber);
        await page.waitForLoadState("networkidle");
        await pageConstants.passPage.myWorkspace.click();
        await pageConstants.passPage.myDraft.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(10000);
        await pageConstants.passPage.searchForPassRefence.type(referceNumber);
        await page.waitForTimeout(10000);
        await expect(pageConstants.passPage.eyeIcon).click();

  });
  
  When('user add more three visitor and select save visitor', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(20000);
    await pageConstants.passPage.visitHour.type(hoursToVisit);
    await pageConstants.passPage.visitMinutes.type(hoursToVisit);

    for(let i=1;i<=2;i++)
        {
            const dynamicNumber=faker.string.numeric({ length: 8 })
            const emid=testData.globalData.emiratesId;
            const actualEidNew=emid+dynamicNumber
            const pageConstants = new PageConstants(page);
            await page.waitForLoadState("networkidle");
            const dropdownVisa = page.locator("//select[@id='searchVisaTypeIdStr']");
            await dropdownVisa.selectOption({ label: 'Resident' });
            await pageConstants.passPage.eidUi.type(actualEidNew);
            await page.waitForLoadState("networkidle");
        
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
             await page.waitForLoadState("networkidle");
             //select gender
             const dropdownLocator2 = page.locator("//select[@name='serachGender']");
             await dropdownLocator2.selectOption({ label: 'Male' });
             await pageConstants.passPage.searchButton.click();
             await page.waitForLoadState("networkidle");
             await expect(pageConstants.passPage.errorValidManually).toBeVisible();
             await page.waitForLoadState("networkidle");
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
             const designation = page.locator("//select[@id='designationIdStr']");
             await designation.selectOption({ label: 'Admin' });
             await pageConstants.passPage.vispassPortNumber.clear();
             await pageConstants.passPage.vispassPortNumber.type(dynamicNumber);
             await page.waitForLoadState("networkidle");
             //eid expire date
             await page.waitForTimeout(2000);
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
              await pageConstants.passPage.supportingaFile.setInputFiles(uploadFilePath)
              await pageConstants.passPage.addVisitor.click();
              await page.waitForLoadState("networkidle");
              await page.waitForTimeout(20000);
              await page.waitForSelector(`(//a[@data-bind='click: $root.editUser'])[1]`, { state: 'visible' });
              await expect(pageConstants.passPage.editButton).toBeVisible();
              console.log('visitor is added for ' + i)
        }    
        
        await page.waitForLoadState("networkidle");
        await (pageConstants.passPage.termsAndCondiUi).click();
        await pageConstants.passPage.saveAsDraft.click();
        await pageConstants.passPage.submitforDraft.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(20000);
        await expect(pageConstants.passPage.draftSuccessMess).toBeVisible();
        referceNumber=await page.innerText("(//td[@class='detail-value'])[1]");
        console.log('this is added refence number'+ referceNumber);
        await page.waitForLoadState("networkidle");
        await pageConstants.passPage.myWorkspace.click();
        await pageConstants.passPage.myDraft.click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(10000);
        await pageConstants.passPage.searchForPassRefence.type(referceNumber);
        await page.waitForTimeout(10000);
        await expect(pageConstants.passPage.eyeIcon).click();
  });
  
  Then('verify error message if user trying to add eleventh visitor', async ({page}) => {
    const pageConstants = new PageConstants(page);
      await page.waitForLoadState("networkidle");
      await page.waitForTimeout(20000);
      await pageConstants.passPage.visitHour.type(hoursToVisit);
      await pageConstants.passPage.visitMinutes.type(hoursToVisit);
              const dynamicNumber=faker.string.numeric({ length: 8 })
              const emid=testData.globalData.emiratesId;
              const actualEidNew=emid+dynamicNumber
              await page.waitForLoadState("networkidle");
              const dropdownVisa = page.locator("//select[@id='searchVisaTypeIdStr']");
              await dropdownVisa.selectOption({ label: 'Resident' });
              await pageConstants.passPage.eidUi.type(actualEidNew);
              await page.waitForLoadState("networkidle");
          
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
               await page.waitForLoadState("networkidle");
               //select gender
               const dropdownLocator2 = page.locator("//select[@name='serachGender']");
               await dropdownLocator2.selectOption({ label: 'Male' });
               await pageConstants.passPage.searchButton.click();
               await page.waitForLoadState("networkidle");
               await expect(pageConstants.passPage.errorValidManually).toBeVisible();
               await page.waitForLoadState("networkidle");
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
               const designation = page.locator("//select[@id='designationIdStr']");
               await designation.selectOption({ label: 'Admin' });
               await pageConstants.passPage.vispassPortNumber.clear();
               await pageConstants.passPage.vispassPortNumber.type(dynamicNumber);
               await page.waitForLoadState("networkidle");
               //eid expire date
               await page.waitForTimeout(2000);
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
       await pageConstants.passPage.supportingaFile.setInputFiles(uploadFilePath)
      await pageConstants.passPage.addVisitor.click();
      await expect(pageConstants.passPage.moreThanTenError).toBeVisible();
      await pageConstants.passPage.okForErrorMoreThanten.click();
  });