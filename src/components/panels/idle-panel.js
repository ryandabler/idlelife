import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ListContainer from '../list-container';
import STORE, { IdleStore } from '../../stores';
import FarmItem from '../list-items/farm-item';

const IdlePanel = observer(class IdlePanel extends Component {
    static displayName = 'IdlePanel';

    constructor(props) {
        super(props);
        this.selectItem = this.selectItem.bind( this );
    }

    selectItem(idlableId) {
        STORE.idle(idlableId);
    }

    get unlockedIdlables() {
        return IdleStore._.filter(idlable => idlable.unlocked);
    }

    render() {
        return (
            <section className="idle-panel" style={{gridArea: 'a', backroundColor: 'yellow'}}>
                <ListContainer items={this.unlockedIdlables} itemComponent={FarmItem} onItemSelect={this.selectItem} />
            </section>
        );
    }
});

export default IdlePanel;
