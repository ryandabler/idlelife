import React, { Component } from 'react';
import FarmPlot from '../farm-plot';
import STORE from '../../stores';

class GardenPanel extends Component {
    static displayName = 'GardenPanel';

    render() {
        const { currentLocation } = STORE;
        const { slots } = STORE.locations[currentLocation];
        const plots = Array(slots).fill(0);

        return (
            <section className="garden-panel" style={{gridArea: 'b'}}>
                { plots.map((plot, idx) => <FarmPlot key={idx} slotNum={idx} />) }
            </section>
        );
    }
}

export default GardenPanel;
