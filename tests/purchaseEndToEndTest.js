import loginPage from '../src/ui/pom/pages/loginPage'
import inventoryPage from '../src/ui/pom/pages/inventoryPage'
import headerPage from '../src/ui/pom/pages/headerPage'
import cartPage from '../src/ui/pom/pages/cartPage'
import checkOutStepOnePage from '../src/ui/pom/pages/checkOutStepOnePage'
import checkOutStepTwoPage from '../src/ui/pom/pages/checkOutStepTwoPage'
import checkOutCompletePage from '../src/ui/pom/pages/checkOutCompletePage'
import { URL, CREDENTIALS } from '../src/ui/pom/data/constants'

fixture`Purchase End to End test suite`
    .page`${URL.URL_BASE_PAGE}`
    .meta('test','endToEnd');

test('User successfuly make a purchase on the page', async t => {
    await t.maximizeWindow()
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_CREDENTIALS.STANDARD_USER, CREDENTIALS.STANDARD_CREDENTIALS.PASSWORD)
    await inventoryPage.selectProducts()
    await headerPage.goToShopingCart()
    await cartPage.checkoutCart()
    await checkOutStepOnePage.fillFormAndContinue()
    await checkOutStepTwoPage.finishPurchase()
    await checkOutCompletePage.backToInventory()
    await headerPage.backToLoginPage()
    await t.expect(loginPage.botImage.exists).ok()
});