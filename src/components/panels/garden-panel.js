import React, { Component } from 'react';

class GardenPanel extends Component {
    static displayName = 'GardenPanel';

    render() {
        return (
            <section className="garden-panel" style={{gridArea: 'b', backgroundColor: 'red'}}>
                GARDEN PANEL
            </section>
        );
    }
}

export default GardenPanel;
