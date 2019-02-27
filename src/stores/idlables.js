import { resolvePathAndGet } from 'objectivize';
import { decorate, observable } from 'mobx';

const IDLABLES = [
    {
        id: 1,
        itemId: 1,
        name: 'Carrot',
        time: 5000,
        unlocked: true
    },
    {
        id: 2,
        itemId: 2,
        name: 'Cucumber',
        time: 30000,
        unlocked: true
    },
    {
        id: 3,
        itemId: 4,
        name: 'Tomato',
        time: 60000,
        unlocked: true
    },
    {
        id: 4,
        itemId: 5,
        name: 'Onion',
        time: 120000,
        unlocked: true
    },
    {
        id: 5,
        itemId: 6,
        name: 'Wheat',
        time: 300000,
        unlocked: true
    },
    {
        id: 6,
        itemId: 7,
        name: 'Celery',
        time: 15000,
        unlocked: true
    },
    {
        id: 7,
        itemId: 8,
        name: 'Cauliflower',
        time: 180000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 5
        }
    },
    {
        id: 8,
        itemId: 9,
        name: 'Broccoli',
        time: 90000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 5
        }
    },
    {
        id: 9,
        itemId: 10,
        name: 'Pea',
        time: 10000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 5
        }
    },
    {
        id: 10,
        itemId: 11,
        name: 'Turnip',
        time: 510000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 5
        }
    },
    {
        id: 11,
        itemId: 12,
        name: 'Potato',
        time: 300000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 5
        }
    },
    {
        id: 12,
        itemId: 13,
        name: 'Corn',
        time: 150000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 5
        }
    },
    {
        id: 13,
        itemId: 14,
        name: 'Bell pepper',
        time: 300000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 10
        }
    },
    {
        id: 14,
        itemId: 15,
        name: 'Radish',
        time: 30000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 10
        }
    },
    {
        id: 15,
        itemId: 3,
        name: 'Cabbage',
        time: 90000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 10
        }
    },
    {
        id: 16,
        itemId: 16,
        name: 'Lettuce',
        time: 480000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 10
        }
    },
    {
        id: 17,
        itemId: 17,
        name: 'Spinach',
        time: 600000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 10
        }
    },
    {
        id: 18,
        itemId: 18,
        name: 'Asparagus',
        time: 900000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 10
        }
    },
    {
        id: 19,
        itemId: 19,
        name: 'Oregano',
        time: 210000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 15
        }
    },
    {
        id: 20,
        itemId: 20,
        name: 'Mushroom',
        time: 360000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 15
        }
    },
    {
        id: 21,
        itemId: 21,
        name: 'Bean',
        time: 540000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 15
        }
    },
    {
        id: 22,
        itemId: 22,
        name: 'Garlic',
        time: 720000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 15
        }
    },
    {
        id: 23,
        itemId: 23,
        name: 'Basil',
        time: 1080000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 15
        }
    },
    {
        id: 24,
        itemId: 24,
        name: 'Beet',
        time: 1200000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 15
        }
    },
    {
        id: 25,
        itemId: 25,
        name: 'Lentils',
        time: 450000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 20
        }
    },
    {
        id: 26,
        itemId: 26,
        name: 'Barley',
        time: 600000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 20
        }
    },
    {
        id: 27,
        itemId: 27,
        name: 'Rye',
        time: 900000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 20
        }
    },
    {
        id: 28,
        itemId: 28,
        name: 'Parsley',
        time: 1200000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 20
        }
    },
    {
        id: 29,
        itemId: 29,
        name: 'Eggplant',
        time: 1500000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 20
        }
    },
    {
        id: 30,
        itemId: 30,
        name: 'Arugula',
        time: 1800000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 20
        }
    },
    {
        id: 31,
        itemId: 31,
        name: 'Sweet potato',
        time: 660000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 25
        }
    },
    {
        id: 32,
        itemId: 32,
        name: 'Brussels sprouts',
        time: 960000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 25
        }
    },
    {
        id: 33,
        itemId: 33,
        name: 'Cilantro',
        time: 1050000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 25
        }
    },
    {
        id: 34,
        itemId: 34,
        name: 'Hot pepper',
        time: 45000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 25
        }
    },
    {
        id: 35,
        itemId: 35,
        name: 'Fennel',
        time: 1320000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 25
        }
    },
    {
        id: 36,
        itemId: 36,
        name: 'Ginger',
        time: 2100000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 25
        }
    },
    {
        id: 37,
        itemId: 37,
        name: 'Rosemary',
        time: 1980000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 30
        }
    },
    {
        id: 38,
        itemId: 38,
        name: 'Squash',
        time: 2220000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 30
        }
    },
    {
        id: 39,
        itemId: 39,
        name: 'Leek',
        time: 1140000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 30
        }
    },
    {
        id: 40,
        itemId: 40,
        name: 'Parsnip',
        time: 2400000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 30
        }
    },
    {
        id: 41,
        itemId: 41,
        name: 'Artichoke',
        time: 2520000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 30
        }
    },
    {
        id: 42,
        itemId: 42,
        name: 'Oat',
        time: 660000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 30
        }
    },
    {
        id: 43,
        itemId: 43,
        name: 'Pumpkin',
        time: 840000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 35
        }
    },
    {
        id: 44,
        itemId: 44,
        name: 'Rutabaga',
        time: 1740000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 35
        }
    },
    {
        id: 45,
        itemId: 45,
        name: 'Thyme',
        time: 2700000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 35
        }
    },
    {
        id: 46,
        itemId: 46,
        name: 'Kale',
        time: 3600000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 35
        }
    },
    {
        id: 47,
        itemId: 47,
        name: 'Tomatillo',
        time: 3780000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 35
        }
    },
    {
        id: 48,
        itemId: 48,
        name: 'Zucchini',
        time: 3000000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 40
        }
    },
    {
        id: 49,
        itemId: 49,
        name: 'Dill',
        time: 3960000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 40
        }
    },
    {
        id: 50,
        itemId: 50,
        name: 'Soy bean',
        time: 5400000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 40
        }
    },
    {
        id: 51,
        itemId: 51,
        name: 'Scallion',
        time: 7200000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 40
        }
    },
    {
        id: 52,
        itemId: 52,
        name: 'Rhubarb',
        time: 10800000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 40
        }
    },
    {
        id: 53,
        itemId: 53,
        name: 'Endive',
        time: 7920000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 45
        }
    },
    {
        id: 54,
        itemId: 54,
        name: 'Anise',
        time: 14400000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 45
        }
    },
    {
        id: 55,
        itemId: 55,
        name: 'Horseradish',
        time: 28800000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 45
        }
    },
    {
        id: 56,
        itemId: 56,
        name: 'Okra',
        time: 36000000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 45
        }
    },
    {
        id: 57,
        itemId: 57,
        name: 'Marjoram',
        time: 18000000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 50
        }
    },
    {
        id: 58,
        itemId: 58,
        name: 'Jicama',
        time: 39600000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 50
        }
    },
    {
        id: 59,
        itemId: 59,
        name: 'Millet',
        time: 54000000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 50
        }
    },
    {
        id: 60,
        itemId: 60,
        name: 'Kohlrabi',
        time: 50400000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 55
        }
    },
    {
        id: 61,
        itemId: 61,
        name: 'Sage',
        time: 86400000,
        unlocked: false,
        toUnlock: {
            path: 'player.levels.farming',
            resolver: pathValue => pathValue >= 55
        }
    }
];

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