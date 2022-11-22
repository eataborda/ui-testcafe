import { Selector, t } from "testcafe";

class checkOutCompletePage {
    constructor() {
        this.backToProducts = Selector('button[data-test="back-to-products"]')
    }

    async backToInventory() {
        await t.click(this.backToProducts)
    }
} export default new checkOutCompletePage