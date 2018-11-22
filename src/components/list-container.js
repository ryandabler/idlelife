import React, { Component } from 'react';
import PropTypes from 'prop-types';
import STORE from '../stores';

class ListContainer extends Component {
    static displayName = 'ListContainer';

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
        itemComponent: PropTypes.func.isRequired,
        onItemSelect: PropTypes.func.isRequired
    }

    render() {
        const { items, itemComponent: ItemComponent, onItemSelect } = this.props;
        return (
            <ul className="list-container">
                { items.map(item => <ItemComponent key={item.id} onItemSelect={onItemSelect} {...item} />) }
            </ul>
        );
    }
}

export default ListContainer;
