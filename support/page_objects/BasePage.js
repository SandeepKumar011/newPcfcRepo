const { expect } = require("@playwright/test");

class BasePage {
    constructor(page) {
        this.tabListTableRows = page.locator(".ant-spin-nested-loading tbody tr.ant-table-row");
        this.tabListTable = page.locator(".ant-spin-nested-loading tbody:visible");
        this.headerText = page.locator("h1").nth(0);
        this.getAllColumnNames = page.locator('tr th div span[class$="title"]');
    }


    async validateColumnsOnTab(expectedColumnNames) {
        let uiColumnNames = [];
        await expect(this.tabListTableRows.first()).toBeVisible();
        for (const element of await this.getAllColumnNames.all()) {
            if (await element.textContent()) {
                uiColumnNames.push(await element.textContent());
            }
        }
        expect(expectedColumnNames.length).toEqual(uiColumnNames.length);
        expect(expectedColumnNames.toString()).toEqual(uiColumnNames.toString());
    }
    
    async validateRadioButton(radioOptionElements, checkedValue) {
        for (const radioElement of await radioOptionElements.all()) {
            if (await radioElement.inputValue() == checkedValue) {
                await expect(radioElement).toBeChecked();
            }
            else {
                await expect(radioElement).not.toBeChecked();
            }
        }
    };

    async validateCheckboxGroupStatus(checkboxGroupElement, checkedValuesArray) {
        for (const checkboxElement of await checkboxGroupElement.all()) {
            if (checkedValuesArray.includes(await checkboxElement.inputValue())) {
                await expect(checkboxElement).toBeChecked();
            }
            else {
                await expect(checkboxElement).not.toBeChecked();
            }
        }
    }
}

module.exports = { BasePage };