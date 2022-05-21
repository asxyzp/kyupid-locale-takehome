// IMPORTING MODULES/PACKAGES
import React from 'react';
import { Box } from '@mui/material';
import { useAppContext } from '../../Context/AppContext';

/**
 * @name PositionedScreen
 * @description POSITIONED SCREEN COMPONENT (WRT drawerWidth)
 * @param {*} props COMPONENT PROPS
 * @returns <PositionedScreen /> (JSX)
 */
const PositionedScreen = (props) => {

    // GETTING APP CONTEXT
    const { drawerWidth } = useAppContext();

    return (
        <Box sx={{ p: "10px", height: "100%", width: `calc(100vw - ${drawerWidth})`, marginLeft: drawerWidth, }}>
            {props.children}
        </Box>
    );
};

export default PositionedScreen;