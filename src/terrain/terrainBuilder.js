import { terrainTypes } from './terrainElements';
import { generateGrid } from '../utilities/utilities';

const resolveTerrainElement = (terrainTypeElements, seedNumber) => {
    let cumSum = 0;
    const [ , terrainElement ] = terrainTypeElements.find( ([ probability ]) => {
        cumSum += probability;
        return seedNumber <= cumSum;
    });

    return terrainElement;
};

const generateTerrain = terrainType => {
    const { size: [ cols, rows ], elements } = terrainTypes[terrainType];
    let random = 0;
    const grid = generateGrid(cols, rows);

    grid.forEach((col, colNum) => {
        col.forEach((_, rowNum) => {
            random = Math.random();
            grid[colNum][rowNum] = resolveTerrainElement(elements, random);
        });
    });

    return grid;
};

export { generateTerrain };