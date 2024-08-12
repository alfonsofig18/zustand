import { createJSONStorage, StateStorage } from "zustand/middleware";

const storeAPI: StateStorage = {
    getItem: function (name: string): string | null | Promise<string | null> {
        console.log('getItem', name);
        const data = sessionStorage.getItem(name);
        return data;
    },
    setItem: function (name: string, value: string): void | Promise<void> {
        sessionStorage.setItem(name, value);
    },
    removeItem: function (name: string): void | Promise<void> {
        console.log('removeItem', name);

    }
}

export const customSessionStorage = createJSONStorage(() => storeAPI)