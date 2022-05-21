// IMPORTING PACKAGES/MODULES
import React, { createContext, useContext } from 'react';

// CREATING GLOBAL CONTEXT
const ApplicationContext = createContext();

// PASSING APP CONTEXT VALUE
export const useAppContext = () => {
    return useContext(AppContext);
};

/**
 * @name AppContext
 * @description APP CONTEXT PROVIDER COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <AppContext/> (JSX)
 */
const AppContext = (props) => {
    return (
        <ApplicationContext.Provider value="">
            {props.children}
        </ApplicationContext.Provider>
    );
};

export default AppContext;