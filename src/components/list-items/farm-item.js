import React, { Component } from 'react';

class FarmItem extends Component {
    static displayName = 'FarmItem';

    // static propTypes = {
    //     text: 
    // }
    
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
