import React from 'react';
import { getFromDatabase } from "./indexeddb";
import STORE from "../stores";

export const clamp = (min, max, value) => Math.min(Math.max(value, min), max);
export const loadUser = async userName => {
    const { currentLocation, currentPosition } = await getFromDatabase('users', userName);
    const { data: map } = await getFromDatabase('maps', [ userName, currentLocation ]);
    
    STORE.updateStore({
        'currentLocation.location': currentLocation,
        'currentLocation.currentPosition': currentPosition,
        'currentLocation.map': map
    });
};

export const generateColumn = (size, fill) => Array(size).fill(fill);

export const generateGrid = (cols, rows, fill = '') => {
    const grid = Array(cols).fill(fill);
    grid.forEach((_, colNum) => {
        grid[colNum] = generateColumn(rows, fill);
    });

    return grid;
};

export const sliceGrid = (grid, currentPosition, viewableDimensions) => {
    const [ gridCols, gridRows ] = [ grid.length, grid[0].length ];
    const [ currCol, currRow ] = currentPosition;
    const [ viewableCols, viewableRows ] = viewableDimensions;
    let [ fromCol, fromRow ] = [
        currCol - Math.floor(viewableCols / 2),
        currRow - Math.floor(viewableRows / 2)
    ];

    // Clamp beginning slices if character position is in the margins of the grid (i.e., if
    // the character is positioned in the first or last viewableCols / 2 or viewableRows / 2).
    if (fromCol < 0) fromCol = 0;
    if (fromCol > gridCols - viewableCols) fromCol = gridCols - viewableCols;
    if (fromRow < 0) fromRow = 0;
    if (fromRow > gridRows - viewableRows) fromRow = gridRows - viewableRows;

    // Generate sliced map
    const slice = generateGrid(viewableCols, viewableRows);
    for (let n = fromCol; n < fromCol + viewableCols; n++) {
        for (let m = fromRow; m < fromRow + viewableRows; m++) {
            slice[n][m] = <span>{grid[n][m]}</span>;
        }
    }

    return slice;
}