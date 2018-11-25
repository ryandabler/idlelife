import React, { Component } from 'react';
import Navigation from './navigation';

class Header extends Component {
    static displayName = 'Header';

    render() {
        return (
            <header style={{gridArea: 'e'}}>
                <Navigation />
            </header>
        );
    }
}

export default Header;
