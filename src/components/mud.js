import React, { Component } from 'react';
import STORE from '../stores';
import { clamp } from '../utilities/utilities';

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

	render() {
        const { charPos } = this.state;
        const { metaInfo: { charSize: { height, width } } } = STORE;
        const charStyle = {
            top: `${charPos[1] * height}px`,
            left: `${charPos[0] * width}px`
        };

		return (
			<div className="mud">
                <div id="grid"></div>
                <span id="character" style={charStyle}>@</span>
			</div>
		);
	}
}

export default MUD;
