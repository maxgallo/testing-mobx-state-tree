import { observer, inject } from "mobx-react";
import React, { Component } from "react";

@inject("musicLibrary")
@observer
class MusicLibraryView extends Component {
    renderAlbum(album) {
        return (
            <li key={album.title}>
                {album.title} | Rating: {album.rating}
            </li>
        );
    }
    addNewAlbum = () => {
        const title = prompt("Add album name (rating will be random)");

        this.props.musicLibrary.addAlbum({
            rating: Math.floor(Math.random() * 10),
            title
        });
    };
    render() {
        const { musicLibrary } = this.props;
        return (
            <div>
                <ul>{musicLibrary.albums.map(this.renderAlbum)} </ul>
                <button onClick={this.addNewAlbum}> Add Album </button>
            </div>
        );
    }
}

export default MusicLibraryView;
