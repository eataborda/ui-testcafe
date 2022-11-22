import { Selector, t } from "testcafe";

class checkOutStepOnePage {
    constructor() {
        this.firstName = Selector('input[data-test="firstName"]')
        this.lastName = Selector('input[data-test="lastName"]')
        this.postalCode = Selector('input[data-test="postalCode"]')
        this.cancel = Selector('button[data-test="cancel"]')
        this.continue = Selector('input[data-test="continue"]')
    }

    async fillFormAndContinue() {
        await t.typeText(this.firstName, 'TestFirstName')
        await t.typeText(this.lastName, 'TestLastName')
        await t.typeText(this.postalCode, '1234Test')
        await t.click(this.continue)
    }
} export default new checkOutStepOnePage