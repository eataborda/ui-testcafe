import { Selector, t } from "testcafe";

class loginPage {
    constructor() {
        this.user = Selector('#user-name')
        this.password = Selector('input[data-test="password"]')
        this.login = Selector('input[name="login-button"]')
        this.errorMessage = Selector('h3[data-test="error"]')
        this.botImage = Selector('div[class="bot_column"]')
    }

    async submitLoginForm(user, password) {
        if (user != null) {
            await t.typeText(this.user, user)
        }
        if (password != null) {
            await t.typeText(this.password, password)
        }
        await t.click(this.login)
    }
} export default new loginPage