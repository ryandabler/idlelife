const DB_NAME = 'IdleLife';
const DB_VER = 1;
let db;

const openDatabase = () => {
    const rq = window.indexedDB.open(DB_NAME, DB_VER);

    rq.onupgradeneeded = e => {
        const _db = e.target.result;

        _db.createObjectStore('users', { keyPath: 'userName' });
    };

    rq.onsuccess = () => {
        db = rq.result;
    };
};

const addToDatabase = (store, value) => {
    const transaction = db.transaction([ store ], 'readwrite');
    const objStore = transaction.objectStore(store);
    objStore.add(value);
};

const getFromDatabase = (store, keyPath) => new Promise(resolve => {
    const transaction = db.transaction([ store ], 'readonly');
    const objStore = transaction.objectStore(store);

    const getRequest = objStore.get(keyPath);
    getRequest.onsuccess = () => {
        resolve(getRequest.result);
    };
});

export { openDatabase, addToDatabase, getFromDatabase };