import React, { Component } from 'react';
import STORE from '../stores/store';
import { buildMaps } from '../utilities/world-gen';
import { addToDatabase } from '../utilities/indexeddb';

class WorldBuilder extends Component {
    static displayName = 'WorldBuilder';

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
        
    }

    componentDidMount() {
        setTimeout(this.generateWorld, 0);
    }

    render() {
        return (
            <div>
                Loading
            </div>
        );
    }
}

export default WorldBuilder;