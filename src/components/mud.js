import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MUD extends Component {
    static displayName = 'MUD';

    static propTypes = {
        dummyHeight: PropTypes.number.isRequired,
        dummyWidth: PropTypes.number.isRequired
    };

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
        // const character = document.querySelector('#character');
        const { charPos: [ curCol, curRow ] } = this.state;
        const charPos = [ Math.max(curCol + colOffset, 0), Math.max(curRow + rowOffset, 0) ]

        this.setState({ charPos });
        // character.style.top = `${charPos[1] * DUMMY_HEIGHT}px`;
        // character.style.left = `${charPos[0] * DUMMY_WIDTH}px`;
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
		return (
			<div className="mud">
                <div id="grid"></div>
                <span id="character">@</span>
			</div>
		);
	}
}

export default MUD;
