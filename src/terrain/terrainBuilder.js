import { terrainTypes } from './terrainElements';

const generateColumn = (size, fill) => Array(size).fill(fill);

const buildTerrainGrid = (cols, rows, fill = '') => {
    const grid = Array(cols).fill(fill);
    grid.forEach((_, colNum) => {
        grid[colNum] = generateColumn(rows, fill);
    });

    return grid;
};

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
    const grid = buildTerrainGrid(cols, rows);

    grid.forEach((col, colNum) => {
        col.forEach((_, rowNum) => {
            random = Math.random();
            grid[colNum][rowNum] = resolveTerrainElement(elements, random);
        });
    });

    return grid;
};

export { generateTerrain };