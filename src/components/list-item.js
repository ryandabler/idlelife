import React, { Component } from 'react';

class ListItem extends Component {
    static displayName = 'ListItem';

    render() {
        const { text } = this.props;
        return (
            <li className="list-item">
                { text }
            </li>
        );
    }
}

export default ListItem;
