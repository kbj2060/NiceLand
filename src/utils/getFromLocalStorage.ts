
export function getFromLocalStorage(key: string) {
    try {
        const serializedStore = window.localStorage.getItem(key);
        if(serializedStore === null) return '';
        return JSON.parse(serializedStore);
    } catch(e) {
        console.log(e);
        return undefined;
    }
}