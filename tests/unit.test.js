import AlbumStore from '../src/album.store';

test('Music album rated 7+ is a good album', () => {
    const initialState = {
        title: 'Californication',
        rating: 7
    };
    const albumStore = AlbumStore.create(initialState);

    expect(albumStore.isGood).toBe(true);
});

test('Music album rated <7 is not a good album', () => {
    const initialState = {
        title: 'Hello',
        rating: 4
    };
    const albumStore = AlbumStore.create(initialState);

    expect(albumStore.isGood).toBe(false);
});
