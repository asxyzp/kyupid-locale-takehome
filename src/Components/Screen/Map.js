// IMPORTING PACKAGES/MODULES
import React from 'react';
import SideDrawer from '../Navigation/SideDrawer';
import PositionedScreen from '../Custom/PositionedScreen';
import { Typography } from '@mui/material';

/**
 * @name Map
 * @description MAP SCREEN COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <Map /> (JSX)
 */
const Map = (props) => {
    return (
        <>
            <SideDrawer />
            <PositionedScreen>
                <Typography variant="h4">Map</Typography>
            </PositionedScreen>
        </>
    );
};

export default Map;