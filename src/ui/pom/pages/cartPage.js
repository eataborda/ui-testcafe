import { Selector, t } from "testcafe";

class cartPage {
    constructor() {
        this.checkoutButton = Selector('button[data-test="checkout"]')
    }

    async checkoutCart() {
        await t.click(this.checkoutButton)
    }
} export default new cartPage