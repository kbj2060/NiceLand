
export function getFromLocalStorage(key: string, keyofValue: string) {
    try {
        const serializedStore = window.localStorage.getItem(key);
        if(serializedStore === null) return '';
        return JSON.parse(JSON.parse(serializedStore)[keyofValue]);
    } catch(e) {
        console.log(e);
        return undefined;
    }
}