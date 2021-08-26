import PersistedStore from "../redux/store";

export function getFromRedux(): any {
    const { store, persistor } = PersistedStore();
    return store.getState();
}