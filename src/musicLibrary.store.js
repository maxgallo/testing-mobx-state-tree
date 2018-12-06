import AlbumStore from "./album.store";
import { types, getEnv } from "mobx-state-tree";

function musicLibraryActions(self) {
    return {
        addAlbum(album) {
            self.albums.push(album);
            getEnv(self).log("added: ", album);
        }
    };
}

const MusicLibraryStore = types
    .model("MusicLibrary", {
        albums: types.array(AlbumStore)
    })
    .actions(musicLibraryActions);

export { MusicLibraryStore as default, musicLibraryActions };
