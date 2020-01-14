import React, { useContext } from 'react'

export const StoreContext = React.createContext(null)

export function useStore() {

    const _store = useContext(StoreContext);

    if (!_store) {
        throw new Error('You have forgotten to use StoreProvider, go fish');
    }
    return _store;
}
