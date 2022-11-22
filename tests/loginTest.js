import loginPage from '../src/ui/pom/pages/loginPage'
import inventoryPage from '../src/ui/pom/pages/inventoryPage'
import { URL, CREDENTIALS, MESSAGES } from '../src/ui/pom/data/constants'

fixture`Login test suite`
    .page`${URL.URL_BASE_PAGE}`
    .meta('test','regression')
    .beforeEach(async t => {
        await t.maximizeWindow()
    });

test('User successfully login on the page', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_CREDENTIALS.STANDARD_USER, CREDENTIALS.STANDARD_CREDENTIALS.PASSWORD)
    await t.expect(inventoryPage.productTitle.exists).ok()
});

test.meta('test','login-negative')
('Error message with wrong user and password', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.NOT_VALID_CREDENTIALS.NOT_VALID_USER, CREDENTIALS.NOT_VALID_CREDENTIALS.NOT_VALID_PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains(MESSAGES.NOT_VALID_USER_AND_PASSWORD)
});

test('Error message with empty user', async t => {
    await loginPage.submitLoginForm(null, CREDENTIALS.STANDARD_CREDENTIALS.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains(MESSAGES.EMPTY_USERNAME)
});

test('Error message with empty password', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_CREDENTIALS.STANDARD_USER, null)
    await t.expect(loginPage.errorMessage.innerText).contains(MESSAGES.EMPTY_PASSWORD)
});

test('Error message with empty user and password', async t => {
    await loginPage.submitLoginForm(null, null)
    await t.expect(loginPage.errorMessage.innerText).contains(MESSAGES.EMPTY_USERNAME_AND_PASSWORD)
});