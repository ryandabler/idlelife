import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import STORE from '../stores/store';

const FarmPlot = observer(class FarmPlot extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind( this );
    }

    propTypes = {
        slotNum: PropTypes.number.isRequired
    };

    onClick() {
        const { slotNum } = this.props;
        STORE.locations['farm'].selectedSlot = slotNum;
    }

    render() {
        const { slotNum } = this.props;
        const { locations: { farm: { selectedSlot } } } = STORE;
        return (
            <div className={`farm-plot ${slotNum === selectedSlot ? 'selected' : ''}`} style={{backgroundColor: 'white'}} onClick={this.onClick}>
                PLOTS
            </div>
        );
    }
});

FarmPlot.displayName = 'FarmPlot';

export default FarmPlot;
