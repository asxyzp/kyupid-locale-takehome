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
    const [users, setUsers] = useState([]);
    const [areas, setAreas] = useState([]);
    const [modalType, setModalType] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [aggregateData, setAggregateData] = useState([]);

    // CONTEXT VALUE TO BE PASSED
    const ContextVal = {

        // PROPERTIES
        areas: areas,
        users: users,
        darkMode: darkMode,
        drawerWidth: "75px",
        modalType: modalType,
        aggregateData: aggregateData,

        // METHODS
        setAreas: setAreas,
        setUsers: setUsers,
        setDarkMode: setDarkMode,
        setModalType: setModalType,
        setAggregateData: setAggregateData,
    };

    return (
        <ApplicationContext.Provider value={ContextVal}>
            {props.children}
        </ApplicationContext.Provider>
    );
};

export default AppContext;