// IMPORTING PACKAGES/MODULES
import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * @name Splash
 * @description SPLASH SCREEN COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <Splash /> (JSX)
 */
const Splash = (props) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "absolute", bgcolor: "background.default", zIndex: "2000", height: "100%", width: "100%" }}>
            <Typography variant="h1" sx={{ px: "8px", py: "8px", mt: "8px", borderRadius: "12.5px", fontFamily: "'Source Serif Pro', serif", fontWeight: "800", textAlign: "center", color: "common.white", bgcolor: "primary.main" }}> Ky </Typography>
        </Box>
    );
};

export default Splash;