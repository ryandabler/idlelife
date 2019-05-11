import React, { Component } from 'react';
import STORE from '../stores';

class Grid extends Component {
    constructor(props) {
        super(props);
    }

    get grid() {
        return this.props.grid;
    }
    
    render() {
        const style = {
            gridTemplateColumns: `repeat(${STORE.metaInfo.maxColumns}, ${STORE.metaInfo.charSize.width}px)`,
            gridTemplateRows: `repeat(${STORE.metaInfo.maxRows}, ${STORE.metaInfo.charSize.height}px)`
        }
        return (
            <div id="grid" style={style}>{this.grid}</div>
        );
    }
}

export default Grid;