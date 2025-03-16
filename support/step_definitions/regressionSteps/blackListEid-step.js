const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const path = require('path');
const { faker } = require('@faker-js/faker');
const dataUtils = new DataUtils();
const createuserData=require('../../../test_data/createuserData.json');
const loginUsername=createuserData.credentials.username
const loginPassword=createuserData.credentials.password
const testData=require('../../../test_data/userData.json');
const wrongFile=path.join(process.cwd(), 'test_data/upload/txtFile.txt');
const uploadFile=path.join(process.cwd(), 'test_data/upload/416kb.jpg');


const passportnumber=faker.string.numeric({ length: 8 })
const yearDob=testData.globalData.dobYear
const futureYear=faker.helpers.arrayElement(['2026', '2027','2028','2029']);
const monthDob=faker.helpers.arrayElement(['Jan', 'Feb','Mar','Apr']);
const particularDate=faker.helpers.arrayElement(['20', '21','22','23']);
const companyMobile=testData.globalData.companyMobile
const firstName='auto'+faker.person.firstName()
const lastName=faker.person.lastName()
const emailIdd=faker.internet.email();
const visaNumber=faker.string.numeric({ length: 12 })
const nationality=testData.globalData.national
const uploadPic=path.join(process.cwd(), 'test_data/upload/pic.png');
const uploadPassport=path.join(process.cwd(), 'test_data/upload/passport.pdf');
const uploadEid=path.join(process.cwd(), 'test_data/upload/EID.pdf');
const uploadSupport=path.join(process.cwd(), 'test_data/upload/sample.pdf');
let actualEid;


Given('user navigates the login page for super admin', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
  });
  
  When('user enter the crendential for the super admin', async ({page}) => {
       const pageConstants = new PageConstants(page);
       await page.waitForLoadState("networkidle");
       await pageConstants.loginPage.enterUsername.type(loginUsername);
       await pageConstants.loginPage.enterpassword.type(loginPassword);
       await pageConstants.loginPage.submitButton.click();
  });
  
  Then('user should be redirected to the home page for super admin', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
  });
  
  When('user enter the information blaclist eid', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.admindropdown.click();
    await pageConstants.passPage.selectBlackList.click();
    await page.waitForTimeout(5000);
    const typeOption = page.locator("//select[@name='blTypeStr']");
    await typeOption.selectOption({ label: 'Emirates ID Number' });
    
          //start date
          const today = new Date();
          const dateString = today.toLocaleDateString();
          const parts = dateString.split("/");
          const day = parts[1];
          console.log('this is before converted date' + dateString);
          const intDate=parseInt(day);
          const visitDate=(intDate+1);
          console.log('this is actual visit date ' + visitDate);
          await page.waitForTimeout(2000);
      
          if(visitDate<26){
            const openCalendardob=page.locator("//input[@id='startDateStr']");
            await openCalendardob.click();
            const selectDatedob=page.locator(`(//td[normalize-space(text())='${visitDate}'])[1]`)
            await selectDatedob.click();
        }
        else if(visitDate<29){
            const openCalendardob=page.locator("//input[@id='startDateStr']");
          await openCalendardob.click();
          const selectDatedob=page.locator(`(//td[normalize-space(text())='1'])[2]`)
          await selectDatedob.click();
        }
      
      else if(visitDate<34){
        const openCalendarEod=page.locator("//input[@id='startDateStr']");
       await openCalendarEod.click();
       const selectDatedob=page.locator(`(//td[normalize-space(text())='3'])[2]`)
       await selectDatedob.click();
      }

         //end date
         const openCalendarEod=page.locator("//input[@id='endDateStr']");
          await expect(openCalendarEod).toBeVisible();
          const endDate=(intDate+5);
          console.log('this is actual visit date ' + endDate);
          await page.waitForTimeout(2000);
      
          if(endDate<26){
            const openCalendarEod=page.locator("//input[@id='endDateStr']");
            await openCalendarEod.click();
            const selectDatedob=page.locator(`(//td[normalize-space(text())='${endDate}'])[1]`)
            await selectDatedob.click();
        }
        else if(endDate<29){
            const openCalendarEod=page.locator("//input[@id='endDateStr']");
          await openCalendarEod.click();
          const selectDatedob=page.locator(`(//td[normalize-space(text())='1'])[2]`)
          await selectDatedob.click();
        }
      
      else if(endDate<34){
        const openCalendarEod=page.locator("//input[@id='endDateStr']");
       await openCalendarEod.click();
       const selectDatedob=page.locator(`(//td[normalize-space(text())='3'])[2]`)
       await selectDatedob.click();
      }

      const dynamicNumber=faker.string.numeric({ length: 8 })
      const emid=testData.globalData.emiratesIdRegis;
      actualEid=emid+dynamicNumber;
      await pageConstants.passPage.valueInput.type(actualEid);  
      await pageConstants.passPage.remarkInputAdmin.type('this is for the automation');

  });
  
  When('submit the information for blaclist eid', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.submitAdmin.click();
    await pageConstants.passPage.okForAlert.click();
  });
  
  Then('verify success message for the blaclist eid', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.passPage.successBlacklist).toBeVisible();
  });
  
  When('search added blaclist eid on the list page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.passPage.admindropdown.click();
    await pageConstants.passPage.searchBlackList.click();
    await pageConstants.passPage.searchForPassRefence.type(actualEid);
});
  
  Then('verify blaclist eid added information on list page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    expect(await pageConstants.passPage.validEid).toMatch(actualEid);
  });