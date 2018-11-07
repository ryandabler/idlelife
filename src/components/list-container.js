import React, { Component } from 'react';
import ListItem from './list-item';

class ListContainer extends Component {
    static displayName = 'ListContainer';

    render() {
        const { items, ItemComponent } = this.props;
        return (
            <ul className="list-container">
                { items.map(item => <ItemComponent key={item.id} {...item} />) }
            </ul>
        );
    }
}

export default ListContainer;
