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
        <Box sx={{
            p: "10px",
            display: "flex",
            "height": "100%",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "start",
            marginLeft: drawerWidth,
            width: `calc(100vw - ${drawerWidth})`,
        }
        } >
            {props.children}
        </Box >
    );
};

export default PositionedScreen;