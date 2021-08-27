
export function setLocalStorage(key: string, value: any) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch(e) {
        console.log(e);
        return undefined;
    }
}