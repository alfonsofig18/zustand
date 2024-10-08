import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";
// import { customSessionStorage } from "../storages/session-storage.store";
import { firebaseStorage } from "../storages/firebase.store copy";

interface PersonState {
    firstName: string;
    lastName: string;

}

interface Actions {
    //Methods
    setFirstName: (value: string) => void;
    setLastName: (Value: string) => void;
}

const storeAPI: StateCreator<PersonState & Actions> = (set) => ({
    firstName: '',
    lastName: '',
    setFirstName: (value: string) => set((state) => (
        {
            firstName: value
        }
    )),
    setLastName: (value: string) => set((state) => (
        {
            lastName: value
        }
    ))
})


export const usePersonStore = create<PersonState & Actions>()(
    persist(
        storeAPI,
        {
            name: 'person-storage',
            storage: firebaseStorage

        }
    )
);