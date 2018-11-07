import React, { Component } from 'react';
import ListItem from './list-item';

class ListContainer extends Component {
    static displayName = 'ListContainer';

    render() {
        const { items, ItemComponent, onItemSelect } = this.props;
        return (
            <ul className="list-container">
                { items.map(item => <ItemComponent key={item.id} onItemSelect={onItemSelect} {...item} />) }
            </ul>
        );
    }
}

export default ListContainer;
