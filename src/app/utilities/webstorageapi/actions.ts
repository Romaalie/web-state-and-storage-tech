import { StorageArray } from "../../../../types/storagearray";

export const saveToLocalStorage = (key: string, value: string) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(key, value);
    }
};

export const getFromLocalStorage = (key: string): string | null => {
    if (typeof window !== "undefined") {
        return localStorage.getItem(key);
    }
    return null;
};

export const removeFromLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(key);
    }
};

export const clearLocalStorage = () => {
    localStorage.clear();
};

export const getAllLocalStorageData = () => {
    const storageArray: StorageArray = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
            const value = localStorage.getItem(key);
            if (value !== null) {
                storageArray.push({ key, value });
            }
        }
    }
    return storageArray;
};