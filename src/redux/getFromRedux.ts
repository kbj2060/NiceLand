import {store} from "./store";

export function getFromRedux(key: string): any {
    return store.getState()[key];
}