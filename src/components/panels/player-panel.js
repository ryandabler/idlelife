import React, { Component } from 'react';
import ListContainer from '../list-container';
import StatItem from '../list-items/stat-item';

const ITEMS = [
    {
        id: 1,
        name: 'Carrot',
        quantity: 15
    },
    {
        id: 2,
        name: 'Cucumber',
        quantity: 10
    },
    {
        id: 3,
        name: 'Cabbage',
        quantity: 5
    },
    {
        id: 4,
        name: 'Broccoli',
        quantity: 8
    },
    {
        id: 5,
        name: 'Cauliflower',
        quantity: 23
    },
    {
        id: 6,
        name: 'Rutabaga',
        quantity: 17
    }
];
class PlayerPanel extends Component {
    static displayName = 'PlayerPanel';

    render() {
        return (
            <section className="player-panel" style={{gridArea: 'b'}}>
                <h2>Inventory</h2>
                <ListContainer items={ITEMS} onItemSelect={() => {}} itemComponent={StatItem} />
                <h2>Statistics</h2>
                <h3>Idling</h3>
                <ListContainer items={ITEMS} onItemSelect={() => {}} itemComponent={StatItem} />
            </section>
        );
    }
}

export default PlayerPanel;
