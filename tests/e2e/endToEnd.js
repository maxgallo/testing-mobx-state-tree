import { Selector, ClientFunction } from 'testcafe';
const codesandboxUrl = 'https://7mzkrkym4q.codesandbox.io/';

const localStorageSet = ClientFunction((key, val) => localStorage.setItem(key, val));

fixture('Testing MobX State Tree')
    .page(codesandboxUrl)

test('should display default Album', async t => {
    await t.expect(Selector('li').textContent).eql('Americana | Rating: 7');
})

test('should open a dialog and add Album', async t => {
    await t
        .setNativeDialogHandler(() => 'Californication')
        .click('button');

    await t.expect(Selector('li').withText('Californication').exists).ok();
})

test('should read localStorage initialState', async t => {
    let initialState = {
        albums: [{ title: "S&M", rating: 8 }]
    };

    await localStorageSet('musicLibrary', JSON.stringify(initialState));

    await t.navigateTo(codesandboxUrl);

    await t.expect(Selector('li').textContent).contains('S&M');
})
