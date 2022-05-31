// IMPORTING PACKAGES/MODULES
import React from 'react';
import SideDrawer from '../Navigation/SideDrawer';
import PositionedScreen from '../Custom/PositionedScreen';
import { AttachMoney, Boy, Girl } from '@mui/icons-material';
import { Box, Link, Chip, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

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
                <Chip variant="outlined" color="primary" sx={{ mt: "10px" }} label={<Typography variant="body2">Take home project</Typography>} />
                <Typography sx={{ mt: "10px" }}><Box sx={{ display: "inline", fontWeight: "bold", color: "primary.main" }}>Kyupid analytics</Box> is a web application to analyse user data for the Kyupid platform. It was built as part of the take home project by Aashish Loknath Panigrahi (@asxyzp). This is the <Link sx={{ color: "primary.main" }} href="https://gist.github.com/haxzie/66cf6eb2028eff5c3f3ec9c1b819d19d" target="_blank" rel="noreferrer">problem statement</Link>.</Typography>
                <Typography variant="h5" sx={{ mt: "15px" }}>Color coding for maps</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AttachMoney sx={{ p: "5px", height: "30px", width: "30px", borderRadius: "4px", bgcolor: "primary.main", color: "common.white" }} />
                            </ListItemIcon>
                            <ListItemText>Pro users per area (%): The color of the various features of the map is the primary fillColor of the pallete (#01B26F), but the fillOpacity varies from 0-1 depending upon the % of pro users in the area.</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Boy sx={{ p: "5px", height: "30px", width: "30px", borderRadius: "4px", bgcolor: "primary.main", color: "common.white" }} />
                            </ListItemIcon>
                            <ListItemText>Male users per area (%): The color of the various features of the map is the primary fillColor of the pallete (#01B26F), but the fillOpacity varies from 0-1 depending upon the % of male users in the area.</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Girl sx={{ p: "5px", height: "30px", width: "30px", borderRadius: "4px", bgcolor: "primary.main", color: "common.white" }} />
                            </ListItemIcon>
                            <ListItemText>Female users per area (%): The color of the various features of the map is the primary fillColor of the pallete (#01B26F), but the fillOpacity varies from 0-1 depending upon the % of female users in the area.</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </PositionedScreen>
        </>
    );
};

export default About;