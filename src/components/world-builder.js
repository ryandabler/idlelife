import React, { Component } from 'react';
import STORE from '../stores/store';
import { buildMaps } from '../utilities/world-gen';
import { addToDatabase } from '../utilities/indexeddb';

class WorldBuilder extends Component {
    static displayName = 'WorldBuilder';

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

    render() {
        this.generateWorld(); // The synchonicity here prevents the loader from showing until AFTER the world has been generated

        return (
            <div>
                Loading
            </div>
        );
    }
}

export default WorldBuilder;