import { types } from 'mobx-state-tree';

const AlbumStore = types
    .model('Album', {
        title: types.string,
        rating: types.integer
    })
    .views(self => ({
        get isGood() {
            return self.rating >= 7;
        }
    }));

export default AlbumStore;
