// IMPORTING PACKAGES/MODULES
import React from 'react';
import SideDrawer from '../Navigation/SideDrawer';
import PositionedScreen from '../Custom/PositionedScreen';
import { Typography } from '@mui/material';

/**
 * @name About
 * @description ABOUT SCREEN COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <About />
 */
const About = (props) => {
    return (
        <>
            <SideDrawer />
            <PositionedScreen>
                <Typography variant="h4">About</Typography>
            </PositionedScreen>
        </>
    );
};

export default About;