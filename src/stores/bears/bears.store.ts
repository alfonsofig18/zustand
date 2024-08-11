import { create } from "zustand";

interface Bear {
    id: number;
    name: string;
}

interface BearState {
    blackBears: number;
    polarBears: number;
    pandaBears: number;
    bears: Bear[];
    //Methods
    increaseBlackBears: (num: number) => void;
    increasePolarBears: (num: number) => void;
    increasePandaBears: (num: number) => void;
    doNothing: () => void;
    addBears: () => void;
    clearBears: () => void;

}

export const useBearStore = create<BearState>()((set) => ({
    blackBears: 10,
    polarBears: 5,
    pandaBears: 1,

    bears: [{ id: 1, name: 'Alfo' }],

    //methods
    increaseBlackBears: (num: number) => set((state) => ({ blackBears: state.blackBears + num })),
    increasePolarBears: (num: number) => set((state) => ({ polarBears: state.polarBears + num })),
    increasePandaBears: (num: number) => set((state) => ({ pandaBears: state.pandaBears + num })),

    doNothing: () => set((state) => ({ bears: [...state.bears] })),
    
}));