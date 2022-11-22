import { Selector, t } from "testcafe";

class checkOutStepTwoPage {
    constructor() {
        this.finish = Selector('button[data-test="finish"]')
    }

    async finishPurchase() {
        await t.click(this.finish)
    }
} export default new checkOutStepTwoPage