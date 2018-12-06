const puppeteer = require('puppeteer');
const codesandboxUrl = 'https://7mzkrkym4q.codesandbox.io/';


describe('Google', () => {
    beforeAll(async () => {
        await page.goto(codesandboxUrl)
    })

    it('should display default Album', async () => {
        await expect(page).toMatch('Americana');
    })

    it('should add albums', async () => {
        page.on('dialog', async dialog => {
            await dialog.accept('Californication');
            await expect(page).toMatch('Californication');
        });
        await page.waitFor('button');
        await page.click('button')
    })
})
