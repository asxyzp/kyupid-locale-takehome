// IMPORTING PACKAGES/MODULES
import React, { createContext, useContext, useState } from 'react';

// CREATING GLOBAL CONTEXT
const ApplicationContext = createContext();

// PASSING APP CONTEXT VALUE
export const useAppContext = () => {
    return useContext(ApplicationContext);
};

/**
 * @name AppContext
 * @description APP CONTEXT PROVIDER COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <AppContext/> (JSX)
 */
const AppContext = (props) => {

    // SETTING STATES TO BE PASSED THROUGH CONTEXT
    const [modalType, setModalType] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    // CONTEXT VALUE TO BE PASSED
    const ContextVal = {

        // PROPERTIES
        darkMode: darkMode,
        drawerWidth: "75px",
        modalType: modalType,

        // METHODS
        setDarkMode: setDarkMode,
        setModalType: setModalType
    };

    return (
        <ApplicationContext.Provider value={ContextVal}>
            {props.children}
        </ApplicationContext.Provider>
    );
};

export default AppContext;