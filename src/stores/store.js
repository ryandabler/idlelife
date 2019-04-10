import { resolvePathAndGet, resolvePathAndSet } from 'objectivize';
import { decorate, observable, reaction, computed } from 'mobx';
import IdleStore from './idlables';
import { ITEMS } from './items';
import { LOCATIONS } from './locations';

let idGenCounter = 0;
const idGen = () => Date.now().toString() + ++idGenCounter;

class IdleObject {
    constructor(idlableId, duration, itemId, location, selectedSlot, store) {
        const now = Date.now();

        // Link for use in object methods
        this.store = store;
        this.idlableId = idlableId;

        // Control properties
        this.id = idGen();
        this.type = 'IDLE';
        this.status = 'INPROGRESS';
        this.current = now;
        this.stop = now + duration;
        this.itemId = itemId;
        this.location = location;
        this.slot = selectedSlot;
    }

    tick() {
        this.current = Date.now();
        if (this.current >= this.stop) this.status = 'DONE';
    }

    onDone() {
        this.store.addToInventory(this.itemId);
        this.store.removeIdlable(this.id);
        this.store.addToStatistics(`idling.${this.idlableId}`);
    }
}

decorate(IdleObject, {
    status: observable,
    current: observable
});

class Store {
    currentLocation = 'farm';
    player = {
        inventory: {},
        stats: {
            idling: {}
        },
        levels: {
            farming: 0
        }
    };
    idling = [];
    locations = {
        farm: {
            slots: 1,
            selectedSlot: -1
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
        const idlable = IdleStore._.find(_idlable => _idlable.id === idleableId);
        const { id, time, itemId } = idlable;
        const { currentLocation } = this;
        const { selectedSlot } = this.locations[currentLocation];

        const idleObj = new IdleObject(id, time, itemId, currentLocation, selectedSlot, this);

        // start idling
        this.idling.push(idleObj);
        this.locations[currentLocation].selectedSlot = -1;
    }

    addToStatistics(path, amount = 1) {
        const stat = resolvePathAndGet(this.player.stats, path) || 0;
        const setAmount = stat + amount;
        resolvePathAndSet(this.player.stats, path, setAmount);
    }

    get inventoryList() {
        return Object.entries(this.player.inventory).reduce(
            (arr, [ id, { quantity } ]) => arr.concat({ name: ITEMS.find(item => item.id === parseInt(id)).name, quantity }),
            []
        );
    }

    // TODO: add idle type to metadata
    idlesByType(type) {
        return Object.values(this.player.stats.idling);
    }

    updateLevel(level) {
        const idles = this.idlesByType(level);
        let newLevel;
        switch (level) {
            case 'farming':
                newLevel = Math.floor(
                    Math.log(idles.reduce((cnt, idle) => cnt + idle)) / Math.log(100)
                );
        }
        this.player.levels[level] = newLevel;
    }

    updateLevels() {
        const relevantLevels = LOCATIONS[this.currentLocation];
        relevantLevels.forEach(level => {
            this.updateLevel(level);
        });
    }

    checkForLevelIncreases = reaction(
        () => Object.entries(this.player.stats.idling),
        () => this.updateLevels()
    )

    checkForUnlocks = reaction(
        () => Object.entries(this.player.stats.idling),
        () => IdleStore.checkToUnlock(this)
    )
}

decorate(Store, {
    currentLocation: observable,
    player: observable,
    idling: observable,
    locations: observable,
    inventoryList: computed
});

const STORE = new Store();
export default STORE;