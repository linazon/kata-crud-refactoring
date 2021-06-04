import React, { createContext, useReducer } from 'react';
import reducer from '../utilities/reducer';


const initialState = {
    todo: { list: [], item: {} }
};


const Store = createContext(initialState);

// un archivo solo puede importar un export
export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <Store.Provider value={{ state, dispatch }}>
        {children}
    </Store.Provider>

}

export default Store;
