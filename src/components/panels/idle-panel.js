import React, { Component } from 'react';
import ListContainer from '../list-container';
import { ITEMS } from '../../store';

class IdlePanel extends Component {
    static displayName = 'IdlePanel';

    render() {
        return (
            <section className="idle-panel" style={{gridArea: 'a', backroundColor: 'yellow'}}>
                <ListContainer items={ITEMS} />
            </section>
        );
    }
}

export default IdlePanel;
