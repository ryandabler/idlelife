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
        let { slotNum } = this.props;
        if (this.isSelected) slotNum = -1;
        
        STORE.locations['farm'].selectedSlot = slotNum;
    }

    get isSelected() {
        const { slotNum } = this.props;
        const { locations: { farm: { selectedSlot } } } = STORE;
        return slotNum === selectedSlot;
    }

    render() {
        return (
            <div className={`farm-plot ${this.isSelected ? 'selected' : ''}`} style={{backgroundColor: 'white'}} onClick={this.onClick}>
                PLOTS
            </div>
        );
    }
});

FarmPlot.displayName = 'FarmPlot';

export default FarmPlot;
