
const { createBdd } = require('playwright-bdd');
const { Given, Then ,When} = createBdd();
const { PageConstants } = require("../PageConstants");
const { DataUtils } = require("../../utils/DataUtils");
const { expect } = require('@playwright/test');
const dataUtils = new DataUtils();


Given('the user navigates to the registration page', async ({page}) => {
  const pageConstants = new PageConstants(page);
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await pageConstants.registrationPage.registrationLink.click();
  });
  
  Given('the registration form should be displayed', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForLoadState("networkidle");
    await expect(pageConstants.registrationPage.emiratesIdInputField).toBeVisible();
  });
  
  Then('user verify Individual Registration should be selected by default', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.individualButton).toBeVisible();
  });
  
  Then(/^verify DO NOT REGISTER section should be displayed$/, async({page}) => {
    const pageConstants = new PageConstants(page);
	  await expect(pageConstants.registrationPage.donotRegistered).toBeVisible();
  });

  
  Then('it should have proper instructions', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.donotRegiMessage).toBeVisible();
  });
  
  When('the user views the registration type dropdown', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.dropdownOption).toBeVisible();
  });
  
  When('the user opens the Visa Type dropdown', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await expect(pageConstants.registrationPage.dropdownOption).toBeVisible();
  });
  
  Then('verify the dropdown values for Resident and visit', async ({page}) => {
    const pageConstants = new PageConstants(page);
    const dropdownLocator = page.locator("//select[@id='visaTypeIdStr']");
  
    // Get all the <option> elements inside the dropdown
    const options = await dropdownLocator.locator('option');
  
    // Loop through each option and log the text content
    const optionCount = await options.count();
    for (let i = 0; i < optionCount; i++) {
      const optionText = await options.nth(i).textContent();
      console.log('This is the dropdown values for visatype' + optionText);
    }
  });
  
  When('user select the Visa Type Resident', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await page.waitForTimeout(5000);
    const dropdownLocator = page.locator("//select[@id='visaTypeIdStr']");
    await dropdownLocator.selectOption({ label: 'Resident' });
    
  });
  
  When('the user enters an invalid Emirates ID', async ({page}) => {
    const pageConstants = new PageConstants(page);
    await pageConstants.registrationPage.emiratesIdInputField.type('00000')
    await (pageConstants.registrationPage.individualButton).click();
  });

 Then(/^the system should show an error message$/, async ({page}) => {
  const pageConstants = new PageConstants(page);
  await expect(pageConstants.registrationPage.emiratesErrorMessage).toBeVisible();
 });

 When(/^the user enters valid Emirates ID$/, async({page}) => {
  const pageConstants = new PageConstants(page);
  await (pageConstants.registrationPage.emiratesErrorMessage).press('Control+A')
  await (pageConstants.registrationPage.emiratesErrorMessage).press('Backspace')
  await pageConstants.registrationPage.emiratesIdInputField.type('784199112345678')
 });

 Then(/^verify the ID should be accepted$/, async ({page}) => {
  const pageConstants = new PageConstants(page);
  await expect(pageConstants.registrationPage.emiratesErrorMessage).not.toBeVisible();
 });

 Then(/^the user checks the Profile Information for full name Gender and dob$/, async({page}) => {
  const pageConstants = new PageConstants(page);
  await expect(pageConstants.registrationPage.firstNameInputField).toBeVisible();
  await expect(pageConstants.registrationPage.lastnameInputField).toBeVisible();
  await expect(pageConstants.registrationPage.Dob).toBeVisible();

 });

 Then(/^the form should display all section profile and document and contact details$/, async({page}) => {
  const pageConstants = new PageConstants(page);
  await expect(pageConstants.registrationPage.mobileInputField).toBeVisible();
  await expect(pageConstants.registrationPage.uiPassValidation).toBeVisible();
  await expect(pageConstants.registrationPage.uiPerValidation).toBeVisible();

 });

When(/^user selects back to login button on registration page$/, async({page}) => {
  const pageConstants = new PageConstants(page);
  await page.waitForLoadState("networkidle");
  await pageConstants.registrationPage.uiBacktoLogin.click();
});

Then(/^Verify page is redirected to the login page for registration$/, async({page}) => {
  const pageConstants = new PageConstants(page);
  await page.waitForLoadState("networkidle");
  await page.waitForSelector(`//input[@id='username']`, { state: 'visible' });
  await expect(pageConstants.registrationPage.enterUsername).toBeVisible();
});

