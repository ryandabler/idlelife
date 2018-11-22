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
        unlocked: false
    },
    {
        id: 3,
        itemId: 3,
        name: 'Cabbage',
        time: 15000,
        unlocked: false
    }
];

class IdlableStore {
    constructor() {
        this._ = IDLABLES;
    }
}

const IdleStore = new IdlableStore();

export default IdleStore;