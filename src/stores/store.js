import { IDLABLES } from './idlables';

let idGenCounter = 0;
const idGen = () => Date.now().toString() + ++idGenCounter;

class IdleObject {
    constructor(duration, itemId, location, store) {
        const now = Date.now();

        // Link to store
        this.store = store;

        // Control properties
        this.id = idGen();
        this.type = 'IDLE';
        this.status = 'INPROGRESS';
        this.current = now;
        this.stop = now + duration;
        this.itemId = itemId;
        this.location = location;
    }

    tick() {
        this.current = Date.now();
        if (this.current >= this.stop) this.status = 'DONE';
    }

    onDone() {
        this.store.addToInventory(this.itemId);
        this.store.removeIdlable(this.id);
    }
}

class Store {
    currentLocation = 'Farm';
    player = {
        inventory: {},
        stats: [],
        location: 'farm'
    };
    idling = [];
    locations = {
        farm: {
            slots: 1
        }
    }

    hasInInventory(itemId) {
        return !!this.player.inventory[itemId];
    }

    addToInventory(itemId, quantity = 1) {
        if (!this.hasInInventory(itemId)) this.player.inventory[itemId] = { quantity: 0 };
        this.player.inventory[itemId].quantity += quantity;
    }

    removeIdlable(idleId) {
        this.idling = this.idling.filter(idle => idle.id !== idleId);
    }

    tick() {
        this.idling.forEach(idle => idle.tick());
    }

    idle(idleableId) {
        // Create idle object
        const idlable = IDLABLES.find(_idlable => _idlable.id === idleableId);
        const { time, itemId } = idlable;
        const { location } = this.player;
        const idleObj = new IdleObject(time, itemId, location, this);

        // start idling
        this.idling.push(idleObj);
    }
}

const STORE = new Store();
export default STORE;