import React, { Component } from 'react';
import PropTypes from 'prop-types';
import STORE from '../stores/store';

class FarmPlot extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind( this );
    }

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
}

FarmPlot.displayName = 'FarmPlot';
FarmPlot.propTypes = {
    slotNum: PropTypes.number.isRequired
};

export default FarmPlot;
