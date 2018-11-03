import React, { Component } from 'react';

class Header extends Component {
    static displayName = 'Header';

    render() {
        return (
            <header style={{gridArea: 'e', backgroundColor: 'pink'}}>
                Header
            </header>
        );
    }
}

export default Header;
