const TREE = 'ʃ';
const BUSH = 'ɷ';
const DOT = '•';
const BLANK = ' ';

const terrainElements = {
    TREE,
    BUSH,
    DOT,
    BLANK
};

const terrainTypes = {
    forest: {
        elements: [ [ .6, TREE ], [ .2, BUSH ], [ .2, DOT ] ],
        size: [ 1250, 800 ]
    }
};

export { terrainElements, terrainTypes };