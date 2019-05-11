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