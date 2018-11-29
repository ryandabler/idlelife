import React, { Component } from 'react';
import ListContainer from '../list-container';
import StatItem from '../list-items/stat-item';
import STORE from '../../stores';

class PlayerPanel extends Component {
    static displayName = 'PlayerPanel';

    render() {
        return (
            <section className="player-panel" style={{gridArea: 'b'}}>
                <h2>Inventory</h2>
                <ListContainer items={STORE.inventoryList} onItemSelect={() => {}} itemComponent={StatItem} />
                <h2>Statistics</h2>
                <h3>Idling</h3>
                <ListContainer items={[]} onItemSelect={() => {}} itemComponent={StatItem} />
            </section>
        );
    }
}

export default PlayerPanel;
