class BrowserUtils {

    constructor(page) {
        async function dropdownHandle(element1, element2) {
            const dropdownLocator = page.locator(element1);
            await dropdownLocator.selectOption({ label: element2 });
        }
    }
}

module.exports = {BrowserUtils}