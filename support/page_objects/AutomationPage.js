class AutomationPage
{
    constructor(page)
    {
        this.bigPageLink = page.locator('a:has-text("Big page with many elements")');
        this.fakePricingLink = page.locator('a:has-text("Fake Pricing Page")');
    }
}

module.exports = {AutomationPage}