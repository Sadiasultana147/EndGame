import React, { createContext } from 'react';
import useFirebase from '../../Components/Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const { children } = props;
    const allContexts = useFirebase();

    console.log(allContexts)
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;