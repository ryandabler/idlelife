import React, { Component } from 'react';

class GermanPanel extends Component {
    static displayName = 'GermanPanel';

    render() {
        return (
            <section className="german-panel" style={{gridArea: 'd', backgroundColor: 'blue'}}>
                GERMAN PANEL
            </section>
        );
    }
}

export default GermanPanel;
