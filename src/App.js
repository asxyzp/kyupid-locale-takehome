// IMPORTING PACKAGES/MODULES
import './App.css';
import DarkTheme from './Theme/Dark';
import LightTheme from './Theme/Light';
import Map from './Components/Screen/Map';
import About from './Components/Screen/About';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useAppContext } from './Context/AppContext';
import Analytics from './Components/Screen/Analytics';
import ModalRouter from './Components/Modal/ModalRouter';
import PageNotFound from './Components/Screen/PageNotFound';
import { CssBaseline, Snackbar, Button, ThemeProvider } from '@mui/material';

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
    const { users, areas, darkMode, setAreas, setUsers, setModalType } = useAppContext();

    // SETTING LOCAL STATES
    const [snackbarMessage, setSnackbarMessage] = useState(false);

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
                }
                else {
                    setSnackbarMessage("An error occured while fetching area data");
                }
            })
            .catch((err) => {
                console.error(err);
                setSnackbarMessage("An error occured while fetching area data");
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
                }
                else {
                    setSnackbarMessage("An error occured while fetching user data");
                }
            })
            .catch((err) => {
                console.error(err);
                setSnackbarMessage("An error occured while fetching user data");
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

    useEffect(() => {
        if (users.length > 0 && areas.length > 0) {
            console.log("ALL DATA HAS LOADED");
        }
    }, [areas.length, users.length]);

    return (
        <ThemeProvider theme={darkMode === true ? DarkTheme : LightTheme}>
            <CssBaseline />

            {/* MODAL ROUTING COMPONENT */}
            <ModalRouter />

            {/* CLIENT-SIDE ROUTES */}
            <Routes>
                <Route path="/" element={<Analytics />} />
                <Route path="/map" element={<Map />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

            {/* SNACKBAR TO BE SHOWN WHEN THERE'S AN ERROR */}
            <Snackbar
                key={"bottomcenter"}
                message={snackbarMessage}
                open={snackbarMessage.length > 0}
                onClose={() => { return false; }}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                action={<Button sx={{ fontWeight: "bolder", color: "primary.contrastText" }}>Refresh</Button>}
                sx={{
                    "&>.MuiPaper-root": {
                        bgcolor: "primary.dark",
                        color: "primary.contrastText"
                    }
                }} />
        </ThemeProvider>
    );
};

export default App;