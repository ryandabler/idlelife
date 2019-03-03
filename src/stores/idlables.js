import { resolvePathAndGet } from 'objectivize';
import { decorate, observable } from 'mobx';
/*   {
        id: 7,
        itemId: 8,
        name: 'Cauliflower',
        time: 180000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 5
        }
    }, */
const FARM_LVL_PATH = 'player.levels.farming';
const IDLABLES = [
    [ 1, 1, 'Carrot', 5000, true ],
    [ 2, 2, 'Cucumber', 30000, true ],
    [ 3, 4, 'Tomato', 60000, true ],
    [ 4, 5, 'Onion', 120000, true ],
    [ 5, 6, 'Wheat', 300000, true ],
    [ 6, 7, 'Celery', 15000, true ],
    [ 7, 8, 'Cauliflower', 180000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 5 ] ],
    [ 8, 9, 'Broccoli', 90000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 5 ] ],
    [ 9, 10, 'Pea', 10000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 5 ] ],
    [ 10, 11, 'Turnip', 510000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 5 ] ],
    [ 11, 12, 'Potato', 300000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 5 ] ],
    [ 12, 13, 'Corn', 150000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 5 ] ],
    [ 13, 14, 'Bell pepper', 300000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 10 ] ],
    [ 14, 15, 'Radish', 30000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 10 ] ],
    [ 15, 3, 'Cabbage', 90000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 10 ] ],
    [ 16, 16, 'Lettuce', 480000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 10 ] ],
    [ 17, 17, 'Spinach', 600000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 10 ] ],
    [ 18, 18, 'Asparagus', 900000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 10 ] ],
    [ 19, 19, 'Oregano', 210000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 15 ] ],
    [ 20, 20, 'Mushroom', 360000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 15 ] ],
    [ 21, 21, 'Bean', 540000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 15 ] ],
    [ 22, 22, 'Garlic', 720000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 15 ] ],
    [ 23, 23, 'Basil', 1080000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 15 ] ],
    [ 24, 24, 'Beet', 1200000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 15 ] ],
    [ 25, 25, 'Lentils', 450000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 20 ] ],
    [ 26, 26, 'Barley', 600000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 20 ] ],
    [ 27, 27, 'Rye', 900000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 20 ] ],
    [ 28, 28, 'Parsley', 1200000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 20 ] ],
    [ 29, 29, 'Eggplant', 1500000, false, [ FARM_LVL_PATH,  ] ],
    [ 30, 30, 'Arugula', 1800000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 20 ] ],
    [ 31, 31, 'Sweet potato', 660000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 25 ] ],
    [ 32, 32, 'Brussels sprouts', 960000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 25 ] ],
    [ 33, 33, 'Cilantro', 1050000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 25 ] ],
    [ 34, 34, 'Hot pepper', 45000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 25 ] ],
    [ 35, 35, 'Fennel', 1320000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 25 ] ],
    [ 36, 36, 'Ginger', 2100000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 25 ] ],
    [ 37, 37, 'Rosemary', 1980000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 30 ] ],
    [ 38, 38, 'Squash', 2220000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 30 ] ],
    [ 39, 39, 'Leek', 1140000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 30 ] ],
    [ 40, 40, 'Parsnip', 2400000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 30 ] ],
    [ 41, 41, 'Artichoke', 2520000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 30 ] ],
    [ 42, 42, 'Oat', 660000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 30 ] ],
    [ 43, 43, 'Pumpkin', 840000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 35 ] ],
    [ 44, 44, 'Rutabaga', 1740000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 35 ] ],
    [ 45, 45, 'Thyme', 2700000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 35 ] ],
    [ 46, 46, 'Kale', 3600000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 35 ] ],
    [ 47, 47, 'Tomatillo', 3780000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 35 ] ],
    [ 48, 48, 'Zucchini', 3000000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 40 ] ],
    [ 49, 49, 'Dill', 3960000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 40 ] ],
    [ 50, 50, 'Soy bean', 5400000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 40 ] ],
    [ 51, 51, 'Scallion', 7200000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 40 ] ],
    [ 52, 52, 'Rhubarb', 10800000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 40 ] ],
    [ 53, 53, 'Endive', 7920000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 45 ] ],
    [ 54, 54, 'Anise', 14400000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 45 ] ],
    [ 55, 55, 'Horseradish', 28800000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 45 ] ],
    [ 56, 56, 'Okra', 36000000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 45 ] ],
    [ 57, 57, 'Marjoram', 18000000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 50 ] ],
    [ 58, 58, 'Jicama', 39600000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 50 ] ],
    [ 59, 59, 'Millet', 54000000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 50 ] ],
    [ 60, 60, 'Kohlrabi', 50400000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 55 ] ],
    [ 61, 61, 'Sage', 86400000, false, [ FARM_LVL_PATH, pathValue => pathValue >= 55 ] ]
].map(_idlable => {
    const [ id, itemId, name, time, unlocked, toUnlock ] = _idlable;
    const idlable = {
        id,
        itemId,
        name,
        time,
        unlocked
    };

    if (toUnlock) {
        const [ path, resolver ] = toUnlock;
        idlable.toUnlock = { path, resolver };
    }

    return idlable;
});

class IdlableStore {
    constructor() {
        this._ = IDLABLES;
    }

    checkToUnlock(STORE) {
        this._.forEach(idlable => {
            if (idlable.unlocked) return

            const { toUnlock: { path, resolver } } = idlable;
            const pathValue = resolvePathAndGet(STORE, path);
            console.log(path, pathValue, resolver(pathValue));
            if (resolver(pathValue)) idlable.unlocked = true;
        });
    }
}

decorate(IdlableStore, {
    _: observable
})

const IdleStore = new IdlableStore();

export default IdleStore;