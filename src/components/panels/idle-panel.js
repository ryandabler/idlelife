import React, { Component } from 'react';

class IdlePanel extends Component {
    static displayName = 'IdlePanel';

    render() {
        return (
            <section className="idle-panel" style={{gridArea: 'a', backroundColor: 'yellow'}}>
            </section>
        );
    }
}

export default IdlePanel;
