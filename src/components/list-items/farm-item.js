import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FarmItem extends Component {
    static displayName = 'FarmItem';

    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        time: PropTypes.number.isRequired,
        onItemSelect: PropTypes.func.isRequired
    };
    
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind( this );
    }

    onClick() {
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
