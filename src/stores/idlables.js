import { resolvePathAndGet } from 'objectivize';

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
        time: 10000,
        unlocked: false,
        toUnlock: {
            path: 'player.stats.idling.1',
            resolver: pathValue => pathValue >= 10
        }
    },
    {
        id: 3,
        itemId: 3,
        name: 'Cabbage',
        time: 15000,
        unlocked: false,
        toUnlock: {
            path: 'player.stats.idling.2',
            resolver: pathValue => pathValue >= 10
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

const IdleStore = new IdlableStore();

export default IdleStore;