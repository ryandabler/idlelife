import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StatItem extends Component {
    static displayName = 'StatItem';

    static propTypes = {
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    };

    render() {
        const { name, quantity } = this.props;
        return (
            <li className="stat-item">
                <span>{name}</span>
                <span>{quantity}</span>
            </li>
        );
    }
}

export default StatItem;
