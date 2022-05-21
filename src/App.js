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

/**
 * @name App
 * @description APP COMPONENT
 * @returns <App /> (JSX)
 */
function App() {

    // GETTING APP CONTEXT
    const { darkMode, setModalType } = useAppContext();

    // USING useEffect TO LOAD SPLASH SCREEN
    useEffect(() => {
        setModalType("splash");
        window.setTimeout(() => { setModalType(""); }, 1750);
    }, [setModalType]);

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