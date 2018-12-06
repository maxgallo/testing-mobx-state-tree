import * as mobxStateTree from 'mobx-state-tree';
import { musicLibraryActions } from '../src/musicLibrary.store';

test('addAlbum adds item to the self.albums', () => {
    const getEnvReturnValue = {
        log: jest.fn()
    };
    jest.spyOn(mobxStateTree, 'getEnv').mockReturnValue(getEnvReturnValue);

    const fakeSelf = {
        albums: []
    };

    const actions = musicLibraryActions(fakeSelf);

    const album1 = 'S&M';
    const album2 = 'Metallica';
    actions.addAlbum(album1);
    actions.addAlbum(album2);

    expect(fakeSelf.albums).toEqual([album1, album2]);
});
