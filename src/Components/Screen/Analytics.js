// IMPORTING PACKAGES/MODULES
import React from 'react';
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
        <PositionedScreen>
            <Typography variant="h3">Analytics</Typography>
        </PositionedScreen>
    );
};

export default Analytics;