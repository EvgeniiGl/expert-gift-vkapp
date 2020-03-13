import React, { useContext } from 'react'
import {RootStoreType} from "app/stores";

export const StoreContext = React.createContext(null)

export type StoreContextType = typeof StoreContext

export function useStore():RootStoreType {

    const _store = useContext(StoreContext);

    if (!_store) {
        throw new Error('You have forgotten to use StoreProvider, go fish');
    }
    return _store;
}
