import MusicLibraryStore from '../src/musicLibrary.store';
import MusicLibraryView from '../src/musicLibrary.view';
import Enzyme, { render } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('I can test view and logic alltogether', () => {
    const musicLibraryStore = MusicLibraryStore.create({
        albums: [{ title: 'Rumours', rating: 8 }]
    });

    const view = render(<MusicLibraryView musicLibrary={musicLibraryStore} />);
    expect(view.text()).toMatch('Rumours | Rating: 8');
});
