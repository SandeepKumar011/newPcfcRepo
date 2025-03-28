
const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../../PageConstants");
const { DataUtils } = require("../../../utils/DataUtils");
const { expect } = require('@playwright/test');
const path = require('path');
const { faker } = require('@faker-js/faker');
const dataUtils = new DataUtils();
const testData=require('../../../test_data/userData.json');
const createuserData=require('../../../test_data/createuserData.json');
const wrongFile=path.join(process.cwd(), 'test_data/upload/txtFile.txt');
const uploadFile=path.join(process.cwd(), 'test_data/upload/416kb.jpg');

const dynamicNumber=faker.string.numeric({ length: 8 })
const emid=testData.globalData.emiratesIdRegis;
const actualEid=emid+dynamicNumber
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
const loginUsername=createuserData.credentials.username
const loginPassword=createuserData.credentials.password
const uploadPic=path.join(process.cwd(), 'test_data/upload/pic.png');
const uploadPassport=path.join(process.cwd(), 'test_data/upload/passport.pdf');
const uploadEid=path.join(process.cwd(), 'test_data/upload/EID.pdf');
const uploadSupport=path.join(process.cwd(), 'test_data/upload/sample.pdf');


Given('user navigates the login page for add user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.loginButton.click();
  });
  
  When('user enter the crendential for the add user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.loginPage.enterUsername.type(loginUsername);
    await pageConstants.loginPage.enterpassword.type(loginPassword);
    await pageConstants.loginPage.submitButton.click();
  });
  
  Then('user should be redirected to the home page for add user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await expect(pageConstants.loginPage.dashboardValidation).toBeVisible();
  });
  
  When('user enter the interan information for add user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await pageConstants.passPage.userManagement.click();
    await pageConstants.passPage.createuser.click();
    await page.waitForTimeout(3000);
    const roleLocator = page.locator("//select[@id='roleIdStr']");
    await roleLocator.selectOption({ label: 'Telephone Receiver' });
    await page.waitForTimeout(2000);
    const genderDrop =page.locator("//select[@name='title']");
    await genderDrop.selectOption({ label: 'Mr' });
    await pageConstants.passPage.visfirstName.type(firstName);
    await pageConstants.passPage.vislastName.clear();
    await pageConstants.passPage.vislastName.type(lastName);
    await pageConstants.passPage.visMobile.clear();
    await pageConstants.passPage.visMobile.type(visaNumber);
    const locationLocator = page.locator("(//span[normalize-space(text())='None selected'])[1]");
    await locationLocator.click();
    await page.locator("//label[normalize-space(text())='Al Hamriya Port']").click()
    await pageConstants.passPage.visMobile.click();
    await page.waitForTimeout(2000);
    const passDuration = page.locator("//span[normalize-space(text())='None selected']");
    await passDuration.click();
    await page.locator("//label[normalize-space(text())='One Day Pass']").click()
  });
  
  When('enter the username passwrod and confirm password', async ({page}) => {
    const pageConstants = new PageConstants(page);
    const username = page.locator("//input[@id='userName']");
    const usernamedata='auto'+faker.person.firstName()
    await username.type(usernamedata);
    const usernamepassword = page.locator("//input[@id='password']");
    await usernamepassword.type('Login@345')
    const usernameconfirmPass = page.locator("//input[@id='confirmPassword']");
    await usernameconfirmPass.type('Login@345')

  });
  
  When('submit the information for add user on create page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    const submitt = page.locator("//input[@id='createUser']");
    await submitt.click()
  });
  
  Then('verify success message for the add user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(20000);
    await page.waitForSelector(`//label[@class='successCard-header']`, { state: 'visible' });
    await expect(pageConstants.passPage.confirmationPay).toBeVisible();
  });

  When('search added user on the list page', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await pageConstants.passPage.userManagement.click();
    await pageConstants.passPage.serachuser.click();
  });
  
  Then('verify user added information on list page', async ({page}) => {
       const pageConstants = new PageConstants(page);
       await page.waitForLoadState("networkidle");
       await pageConstants.passPage.searchForPassRefence.type(firstName);
       await page.waitForTimeout(2000);
       await expect(pageConstants.passPage.validationsearchuser).toBeVisible();
  });
  
  When('user enter the admin information for add user', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    await pageConstants.passPage.userManagement.click();
    await pageConstants.passPage.createuser.click();
    const roleLocator = page.locator("//select[@id='roleIdStr']");
    await roleLocator.selectOption({ label: 'Telephone Receiver' });
    const genderDrop =page.locator("//select[@name='title']");
    await genderDrop.selectOption({ label: 'Mr' });
    await pageConstants.passPage.visfirstName.type(firstName);
    await pageConstants.passPage.vislastName.clear();
    await pageConstants.passPage.vislastName.type(lastName);
    await pageConstants.passPage.visMobile.clear();
    await pageConstants.passPage.visMobile.type(visaNumber);
    await page.waitForTimeout(2000);
    const locationLocator = page.locator("(//span[normalize-space(text())='None selected'])[1]");
    await locationLocator.click();
    await page.locator("//label[normalize-space(text())='Al Hamriya Port']").click()
    await pageConstants.passPage.visMobile.click();
    await page.waitForTimeout(2000);
    const passDuration = page.locator("//span[normalize-space(text())='None selected']");
    await passDuration.click();
    await page.locator("//label[normalize-space(text())='One Day Pass']").click()
  });