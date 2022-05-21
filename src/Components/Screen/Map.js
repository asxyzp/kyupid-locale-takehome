// IMPORTING PACKAGES/MODULES
import React from 'react';
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
        <PositionedScreen>
            <Typography variant="h3">Map</Typography>
        </PositionedScreen>
    );
};

export default Map;