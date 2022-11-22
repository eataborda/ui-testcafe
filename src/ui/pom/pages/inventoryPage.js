import { Selector, t } from "testcafe";

class inventoryPage {
    constructor() {
        this.productTitle = Selector('.title').withText('PRODUCTS')
        this.sauceLabsBackpackButton = Selector('button[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    async selectProducts() {
        await t.click(this.sauceLabsBackpackButton)
    }
} export default new inventoryPage