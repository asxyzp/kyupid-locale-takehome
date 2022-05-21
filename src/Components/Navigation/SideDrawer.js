// IMPORTING PACKAGES/MODULES
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../Context/AppContext';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { DarkMode, LightMode, Map, MapOutlined, Assessment, AssessmentOutlined, Info, InfoOutlined } from '@mui/icons-material';

/**
 * @name SideDrawer
 * @description SIDE DRAWER COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <SideDrawer /> (JSX)
 */
const SideDrawer = (props) => {

    // USING useLocation HOOK
    const location = useLocation();

    // GETTING APP CONTEXT
    const { drawerWidth, darkMode, setDarkMode } = useAppContext();

    // SETTING LOCAL STATE
    const [selectedNavItem, setSelectedNavItem] = useState(0);

    // LOCAL VARIABLES
    // STORING NAVIGATION MENU OPTIONS
    const navMenuOptions = [
        {
            label: "Home",
            unselectedIcon: <AssessmentOutlined />,
            selectedIcon: <Assessment sx={{ color: "primary.dark" }} />,
            selectionCondition: location.pathname === "/",
            path: "/"
        },
        {
            label: "Map",
            unselectedIcon: <MapOutlined />,
            selectedIcon: <Map sx={{ color: "primary.dark" }} />,
            selectionCondition: location.pathname === "/map",
            path: "/map"
        },
        {
            label: "About",
            unselectedIcon: <InfoOutlined />,
            selectedIcon: <Info sx={{ color: "primary.dark" }} />,
            selectionCondition: location.pathname === "/about",
            path: "/about"
        }
    ];

    useEffect(() => {
        if (location.pathname === "/")
            setSelectedNavItem(0);
        if (location.pathname === "/map")
            setSelectedNavItem(1);
        if (location.pathname === "/about")
            setSelectedNavItem(2);
    }, [location.pathname])

    return (
        <Drawer anchor="left" variant="permanent" sx={{ "&> .MuiPaper-root": { width: drawerWidth, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } }}>
            <Typography variant="h4" sx={{ p: "8px", mt: "8px", borderRadius: "12.5px", fontFamily: "'Source Serif Pro', serif", fontWeight: "800", textAlign: "center", color: "common.white", bgcolor: "primary.dark" }}> Ky </Typography>
            <List sx={{ flexGrow: "1", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", py: "0px", mt: "-15px" }}>
                {
                    navMenuOptions.map((navMenuOption, navMenuOptionIndex) => {
                        return (
                            <ListItem button component={Link} to={navMenuOption.path} key={navMenuOption.label} onClick={() => setSelectedNavItem(navMenuOptionIndex)} sx={{ px: "8px", py: "0px", my: "8px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <ListItemIcon sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    {
                                        selectedNavItem === navMenuOptionIndex ?
                                            navMenuOption.selectedIcon :
                                            navMenuOption.unselectedIcon
                                    }
                                </ListItemIcon>
                                <ListItemText primary={navMenuOption.label} />
                            </ListItem>
                        );
                    })
                }
            </List>
            <IconButton sx={{ p: "8px", mb: "10px" }} onClick={() => setDarkMode(!darkMode)}>
                {
                    darkMode === true ?
                        <DarkMode sx={{ height: "30px", width: "30px" }} /> :
                        <LightMode sx={{ height: "30px", width: "30px" }} />
                }
            </IconButton>
        </Drawer>
    );
};

export default SideDrawer;