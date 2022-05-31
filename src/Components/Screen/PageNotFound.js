// IMPORTING PACKAGES/MODULES
import React from 'react';
import { Box, Typography } from '@mui/material';
import PageNotFoundImg from "../../Assets/Images/PageNotFound.svg";

/**
 * @name PageNotFound
 * @description 404 SCREEN COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <PageNotFound />
 */
const PageNotFound = (props) => {
    return (
        <Box sx={{
            p: "10px",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <img src={PageNotFoundImg} className="page-not-found-img" alt="Page not found"/>
            <Typography variant="h1" sx={{ mt: "10px", color: "primary.dark" }}>404</Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>Whoops! Looks like what you're searching for is missing</Typography>
        </Box>
    );
};

export default PageNotFound;