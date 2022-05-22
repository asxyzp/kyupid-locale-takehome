// IMPORTING PACKAGES/MODULES
import DarkTheme from './Theme/Dark';
import LightTheme from './Theme/Light';
import React, { useEffect } from 'react';
import Map from './Components/Screen/Map';
import About from './Components/Screen/About';
import { Routes, Route } from 'react-router-dom';
import { useAppContext } from './Context/AppContext';
import Analytics from './Components/Screen/Analytics';
import ModalRouter from './Components/Modal/ModalRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import PageNotFound from './Components/Screen/PageNotFound';

// IMPORTING API ENDPOINT CALL METHODS
import getAreas from './API/getAreas';
import getUsers from './API/getUsers';

/**
 * @name App
 * @description APP COMPONENT
 * @returns <App /> (JSX)
 */
function App() {

    // GETTING APP CONTEXT
    const { darkMode, setAreas, setUsers, setModalType } = useAppContext();

    // METHODS
    /**
     * @name getAreaData
     * @description CALLING API ENDPOINT USING getAreas METHOD
     * @returns undefined
     */
    const getAreaData = () => {
        getAreas()
            .then(async (res) => {
                if (res !== null && res.status === 200) {
                    const AreaData = await res.json();
                    setAreas([...AreaData.features]);
                    console.log([...AreaData.features]);
                }
                // TODO: ADD ERROR HANDLER
            });
    };

    /**
     * @name getUserData
     * @description CALLING API ENDPOINT USING getUsers METHOD
     * @returns undefined
     */
    const getUserData = () => {
        getUsers()
            .then(async (res) => {
                if (res !== null && res.status === 200) {
                    const UserData = await res.json();
                    setUsers([...UserData.users]);
                    console.log(UserData.users);
                }
                // TODO: ADD ERROR HANDLER
            });
    };

    // USING useEffect TO LOAD SPLASH SCREEN AND CALL API ENDPOINTS
    useEffect(() => {

        // LOADING SPLASH SCREEN FOR 1.75 seconds
        setModalType("splash");
        window.setTimeout(() => { setModalType(""); }, 1750);

        // CALLING API ENDPOINTS
        getUserData();
        getAreaData();

    }, []);

    return (
        <ThemeProvider theme={darkMode === true ? DarkTheme : LightTheme}>
            <CssBaseline />
            <ModalRouter />
            <Routes>
                <Route path="/" element={<Analytics />} />
                <Route path="/map" element={<Map />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;