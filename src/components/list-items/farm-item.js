import React, { Component } from 'react';
import PropTypes from 'prop-types';
import STORE from '../../stores/store';

class FarmItem extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind( this );
    }
        
    static displayName = 'FarmItem';

    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        time: PropTypes.number.isRequired,
        onItemSelect: PropTypes.func.isRequired
    };
    
    onClick() {
        const { selectedSlot } = STORE.locations.farm;
        if (selectedSlot === -1) return;

        const { id, onItemSelect } = this.props;
        onItemSelect(id);
    }

    render() {
        const { name, time } = this.props;
        return (
            <li className="list-item-farm" onClick={this.onClick}>
                <span>{ name }</span>
                <span className="time">{ time }</span>
            </li>
        );
    }
}

export default FarmItem;
