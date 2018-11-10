import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FarmPlot extends Component {
    render() {
        return (
            <div className="farm-plot" style={{backgroundColor: 'white'}}>
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
