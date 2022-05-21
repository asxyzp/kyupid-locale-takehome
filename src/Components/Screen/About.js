// IMPORTING PACKAGES/MODULES
import React from 'react';
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
        <PositionedScreen>
            <Typography variant="h3">About</Typography>
        </PositionedScreen>
    );
};

export default About;