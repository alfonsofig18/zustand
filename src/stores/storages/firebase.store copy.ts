import { createJSONStorage, StateStorage } from "zustand/middleware";

const url: string = 'https://zustand-storage1818-default-rtdb.firebaseio.com/zustand';

export interface Data {
    state: State;
    version: number;
}

export interface State {
    firstName: string;
    lastName: string;
}




const storageAPI: StateStorage = {
    getItem: async function (name: string): Promise<string | null> {
        try {
            const data = await fetch(`${url}/${name}.json`)
                .then((res) => res.json())
            console.log(data);
            return JSON.stringify(data);
        } catch (error) {
            throw error;
        }
    },
    setItem: async function (name: string, value: string): Promise<void | null> {
        const data = await fetch(`${url}/${name}.json`, {
            method: 'PUT',
            body: value
        })
            .then(async (res) => {
                const objectData: Data = await res.json();
                const { state } = objectData;
                console.log(state.firstName);
                return objectData;
            });
        console.log(data);
        return;
    },
    removeItem: function (name: string): void | Promise<void> {
        console.log('removeItem', name);
    }
}

export const firebaseStorage = createJSONStorage(() => storageAPI)