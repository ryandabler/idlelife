import React, { Component } from 'react';
import STORE from '../stores';
import { clamp, sliceGrid } from '../utilities/utilities';
import Grid from './grid';

class MUD extends Component {
    static displayName = 'MUD';

    constructor(props) {
        super(props);

        this.state = {
            charPos: [ 0, 0 ]
        };

        this.executeKeyPress = this.executeKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.executeKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.executeKeyPress);
    }

    moveCharacter(colOffset, rowOffset) {
        const { charPos: [ curCol, curRow ] } = this.state;
        const { metaInfo: { maxColumns, maxRows } } = STORE;
        const charPos = [
            clamp(0, maxColumns - 1, curCol + colOffset),
            clamp(0, maxRows - 1, curRow + rowOffset)
        ];
        this.setState({ charPos });
    }

    executeKeyPress(e) {
        console.log(e.code);
        switch (e.code) {
            case 'ArrowRight':
                this.moveCharacter(1, 0);
                break;
            case 'ArrowLeft':
                this.moveCharacter(-1, 0);
                break;
            case 'ArrowUp':
                this.moveCharacter(0, -1);
                break;
            case 'ArrowDown':
                this.moveCharacter(0, 1);
                break;
        }
    }

    get charPosition() {
        const { charPos: [ curCol, curRow ] } = this.state;
        const { metaInfo: { charSize: { height, width } } } = STORE;
        return {
            top: `${curRow * height}px`,
            left: `${curCol * width}px`
        };
    }

    get gridSegment() {
        const { currentLocation: { map } } = STORE;
        return sliceGrid(map, this.state.charPos, [ STORE.metaInfo.maxColumns, STORE.metaInfo.maxRows]);
    }

	render() {
		return (
			<div className="mud">
                <Grid grid={this.gridSegment} />
                <span id="character" style={this.charPosition}>@</span>
			</div>
		);
	}
}

export default MUD;
