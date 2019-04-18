import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import STORE from '../stores/store';
import { buildMaps } from '../utilities/world-gen';
import { addToDatabase } from '../utilities/indexeddb';
import { terrainElements } from '../terrain/terrainElements';

class WorldBuilder extends Component {
    static displayName = 'WorldBuilder';

    constructor(props) {
        super(props);
        this.characterPanel = React.createRef();
        this.generateWorld = this.generateWorld.bind(this);
    }

    generateWorld() {
        const userName = STORE.player.name;

        const maps = buildMaps();
        Object.entries(maps).forEach( async ([ map, mapData ]) => {
            const object = {
                userName,
                map,
                data: mapData
            }
            addToDatabase('maps', object);
        });

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

        this.props.history.push('/mud');
    }

    componentDidMount() {
        setTimeout(this.generateWorld, 0);
    }

    render() {
        return (
            <div className="loading-screen">
                <div className="loading">Loading<span className="fade-1">.</span><span className="fade-2">.</span><span className="fade-3">.</span></div>
                <div id="character-panel" ref={this.characterPanel}>
                    {Object.values(terrainElements).concat('@').map(e => <span key={e}>{e}</span>)}
                </div>
            </div>
        );
    }
}

export default withRouter(WorldBuilder);