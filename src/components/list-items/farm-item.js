import React, { Component } from 'react';

class FarmItem extends Component {
    static displayName = 'FarmItem';

    // static propTypes = {
    //     text: 
    // }

    render() {
        const { name, time } = this.props;
        return (
            <li className="list-item-farm">
                <span>{ name }</span>
                <span className="time">{ time }</span>
            </li>
        );
    }
}

export default FarmItem;
