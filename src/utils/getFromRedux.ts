import {store} from "../redux/store";

export function getFromRedux(): any {
    return store.getState();
}