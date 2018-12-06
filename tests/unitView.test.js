import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import MusicLibraryView from '../src/musicLibrary.view';

Enzyme.configure({ adapter: new Adapter() });

test('I can override stores with props', () => {
    const musicLibrary = {
        albums: [
            { title: 'Takk', rating: 7 },
            { title: 'Ágætis byrjun', rating: 7 }
        ]
    };
    const view = render(<MusicLibraryView musicLibrary={musicLibrary} />);
    const text = view.text();

    expect(text).toMatch('Takk');
    expect(text).toMatch('Ágætis byrjun');
});
