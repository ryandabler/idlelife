import React, { Component } from 'react';
import ListContainer from '../list-container';
import { IDLABLES } from '../../stores/idlables';
import FarmItem from '../list-items/farm-item';

class IdlePanel extends Component {
    static displayName = 'IdlePanel';

    render() {
        return (
            <section className="idle-panel" style={{gridArea: 'a', backroundColor: 'yellow'}}>
                <ListContainer items={IDLABLES} ItemComponent={FarmItem} />
            </section>
        );
    }
}

export default IdlePanel;
