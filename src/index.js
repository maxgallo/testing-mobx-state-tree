import reactDOM from "react-dom";
import React from "react";
import { Provider } from "mobx-react";
import { onSnapshot } from "mobx-state-tree";

import MusicLibraryStore from "./musicLibrary.store.js";
import MusicLibraryView from "./musicLibrary.view.js";

const localStorageItem = localStorage.getItem("musicLibrary");
let initialState = {};

try {
    if (localStorageItem) {
        console.log(localStorageItem);
        initialState = JSON.parse(localStorageItem);
    }
} catch (e) {
    localStorage.removeItem("musicLibrary");
    console.log(e);
}

const musicLibraryStore = MusicLibraryStore.create(initialState, {
    log: console.log
});

onSnapshot(musicLibraryStore, snapshot => {
    localStorage.setItem("musicLibrary", JSON.stringify(snapshot));
});

reactDOM.render(
    <Provider musicLibrary={musicLibraryStore}>
        <MusicLibraryView />
    </Provider>,
    document.getElementById("app")
);
