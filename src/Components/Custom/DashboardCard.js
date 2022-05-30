// IMPORTING PACKAGES/MODULES
import React from 'react';
import { Card, Box, Typography } from '@mui/material';

/**
 * @name DashboardCards
 * @description DASHBOARD CARD COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <DashboardCard /> (JSX)
 */
const DashboardCard = (props) => {

    return (
        <Card sx={{  
            p: "10px",
            mb: "10px",
            height: "150px",
            display: "flex",
            minWidth: "275px",  
            alignItems: "start",
            flexDirection: "column",
            bgcolor: "primary.main", 
            justifyContent: "space-between",
            color: "primary.contrastText" }}>
                {props.cardIcon}
                <Box sx={{ width: "100%" }}>
                    <Typography variant="h3" sx={{ width: "100%", textAlign: "right", color: "primary.contrastText" }}>{props.val}</Typography>
                    <Typography variant="body2" sx={{ width: "100%", textAlign: "right", color: "primary.contrastText" }}>{props.name}</Typography>
                </Box>
        </Card>
    );
};

export default DashboardCard;