import { Selector, t } from "testcafe";

class headerPage {
    constructor() {
        this.shoppingCartLink = Selector('a[class="shopping_cart_link"]')
        this.appLogo = Selector('div[class="app_logo"]')
        this.burgerMenu = Selector('#react-burger-menu-btn')
        this.menuItemLogout = Selector('#logout_sidebar_link')
    }

    async goToShopingCart() {
        await t.click(this.shoppingCartLink)
    }

    async backToLoginPage() {
        await t.click(this.burgerMenu)
        await t.click(this.menuItemLogout)
    }
} export default new headerPage