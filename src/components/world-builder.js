import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import STORE from '../stores/store';
import { buildMaps } from '../utilities/world-gen';
import { addToDatabase } from '../utilities/indexeddb';

class WorldBuilder extends Component {
    static displayName = 'WorldBuilder';

    static propTypes = {
        history: PropTypes.object.isRequired
    };
    
    constructor(props) {
        super(props);

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

        this.props.history.push('/mud');
    }

    componentDidMount() {
        setTimeout(this.generateWorld, 0);
    }

    render() {
        return (
            <div className="loading-screen">
                <div className="loading">Loading<span className="fade-1">.</span><span className="fade-2">.</span><span className="fade-3">.</span></div>
            </div>
        );
    }
}

export default withRouter(WorldBuilder);