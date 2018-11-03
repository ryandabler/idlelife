import React, { Component } from 'react';
import ListItem from './list-item';

class ListContainer extends Component {
    static displayName = 'ListContainer';

    render() {
        const { items } = this.props;
        return (
            <ul className="list-container">
                { items.map(item => <ListItem key={item.id} text={item.name} />) }
            </ul>
        );
    }
}

export default ListContainer;
