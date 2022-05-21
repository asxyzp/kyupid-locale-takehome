// IMPORTING PACKAGES/MODULES
import React from 'react';
import SideDrawer from '../Navigation/SideDrawer';
import PositionedScreen from '../Custom/PositionedScreen';
import { Typography } from '@mui/material';

/**
 * @name Analytics
 * @description ANALYTICS SCREEN COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <Analytics /> (JSX)
 */
const Analytics = (props) => {
    return (
        <>
            <SideDrawer />
            <PositionedScreen>
                <Typography variant="h4">Analytics</Typography>
            </PositionedScreen>
        </>
    );
};

export default Analytics;