const { expect } = require('@playwright/test');

class FakePricingPage {
    constructor(page)
    {
        this.allPlanTitle = page.locator("div.et_pb_pricing_heading h4.et_pb_pricing_title");
        this.allPlanRates = page.locator("div.et_pb_pricing_content_top span.et_pb_sum");
    }
}

module.exports = {FakePricingPage}