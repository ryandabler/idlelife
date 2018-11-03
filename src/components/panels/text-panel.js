import React, { Component } from 'react';

class TextPanel extends Component {
    static displayName = 'TextPanel';

    render() {
        return (
            <section className="text-panel" style={{gridArea: 'c', backgroundColor: 'green'}}>
                TEXT PANEL
            </section>
        );
    }
}

export default TextPanel;
