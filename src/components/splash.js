import React, { Component } from 'react';
import { addToDatabase, getFromDatabase } from '../utilities/indexeddb';
import STORE from '../stores';
import { terrainElements } from '../terrain/terrainElements';

class Splash extends Component {
    static displayName = 'Splash';

    constructor(props) {
        super(props);

        this.characterPanel = React.createRef();

        this.onSubmit = this.onSubmit.bind(this);
        this.setGridDimensions = this.setGridDimensions.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        const { target } = e;
        const userName = target.name.value;
        if (!userName) return;

        STORE.player.name = userName;
        const notInDatabase = !(await getFromDatabase('users', userName));
        if (notInDatabase) {
            addToDatabase('users', { userName });
            this.props.history.push('/world-build');
        } else {
            this.props.history.push('/mud');
        }
    }

    setGridDimensions() {
        const { width, height } = Array.from(this.characterPanel.current.children)
            .reduce(
                (dims, char) => {
                    const { width: _width, height: _height } = char.getBoundingClientRect();
                    return {
                        width: Math.max(dims.width, _width),
                        height: Math.max(dims.height, _height)
                    };
                },
                { width: -Infinity, height: -Infinity }
            );
        STORE.metaInfo.charSize = { width, height };
        STORE.metaInfo.maxColumns = Math.floor(window.innerWidth / width);
        STORE.metaInfo.maxRows = Math.floor(window.innerHeight / height);
    }

    componentDidMount() {
        if (!STORE.metaInfo.charSize.height || !STORE.metaInfo.charSize.width)
            setTimeout(this.setGridDimensions, 0);
    }

	render() {
		return (
			<div className="splash">
                <h1 className="idlelife">IdleLife</h1>
                <form onSubmit={this.onSubmit} className="login-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" spellCheck="false" />
                    <input type="submit" value="Login" />
                </form>
                <div id="character-panel" ref={this.characterPanel}>
                    {Object.values(terrainElements).concat('@').map(e => <span key={e}>{e}</span>)}
                </div>
			</div>
		);
	}
}

export default Splash;
