import { terrainTypes, generateTerrain } from '../terrain';

const buildMaps = () => Object.keys(terrainTypes).reduce(
    (terrains, terrainType) => {
        terrains[terrainType] = generateTerrain(terrainType);
        return terrains;
    },
    {}
);

export { buildMaps };