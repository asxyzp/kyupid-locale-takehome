// IMPORTING PACKAGES/MODULES
import React from 'react';
import LightTheme from './Theme/Light';
import Map from './Components/Screens/Map';
import About from './Components/Screens/About';
import { Route, Switch } from 'react-router-dom';
import Analytics from './Components/Screens/Analytics';
import { CssBaseline, ThemeProvider } from '@mui/material';
import PageNotFound from './Components/Screens/PageNotFound';

/**
 * @name App
 * @description APP COMPONENT
 * @returns <App /> (JSX)
 */
function App() {

    return (
        <ThemeProvider theme={LightTheme}>
            <CssBaseline />
            <Switch>
                <Route exact path="/">
                    <Analytics />
                </Route>
                <Route exact path="/map">
                    <Map />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
        </ThemeProvider>
    );
};

export default App;