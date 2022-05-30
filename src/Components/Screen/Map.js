// IMPORTING PACKAGES/MODULESs
import Theme from '../../Theme/Light';
import React, { useState } from 'react';
import SideDrawer from '../Navigation/SideDrawer';
import { useAppContext } from '../../Context/AppContext';
import PositionedScreen from '../Custom/PositionedScreen';
import { AttachMoney, Boy, Girl } from '@mui/icons-material';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import { Box, Tab, Tabs, Typography, Skeleton } from '@mui/material';

// METHODS
/**
 * @name tooltip
 * @description METHOD TO RETURN TOOLTIP FOR A GIVEN FEATURE
 * @param {*} featureProperties FEATURE PROPERTIES
 * @returns {Object} Style
 */
const tooltip = (featureProperties) => {

    const areaName = featureProperties.name.toUpperCase();
    const areaUserCount = featureProperties.area_users.length;
    const areaMaleUserCount = featureProperties.area_male_users.length;
    const areaFemaleUserCount = featureProperties.area_female_users.length;
    const areaProUserCount = (featureProperties.area_male_pro_users.length + featureProperties.area_female_pro_users.length);
    const areaProUserPercent = (areaProUserCount / areaUserCount).toFixed(2);
    const areaMFRatio = (featureProperties.area_male_users.length / featureProperties.area_female_users.length).toFixed(2);

    return `<div style="font-family: ${Theme.typography.fontFamily};">
                <div style="font-size: 1.2em; font-weight: bolder; color: ${Theme.palette.primary.main};">${areaName}</div>
                <div><span style="font-weight: bold;">AREA USER COUNT</span> ${areaUserCount}</div>
                <div><span style="font-weight: bold;">AREA MALE USER COUNT</span> ${areaMaleUserCount}</div>
                <div><span style="font-weight: bold;">AREA FEMALE USER COUNT</span> ${areaFemaleUserCount}</div>
                <div><span style="font-weight: bold;">AREA PRO USER COUNT</span> ${areaProUserCount} (~${areaProUserPercent * 100}%)</div>
                <div><span style="font-weight: bold;">AREA M/F RATIO</span> ${areaMFRatio}</div>
                <div><span style="font-weight: bold;">AREA_ID</span> ${featureProperties.area_id}</div>
                <div><span style="font-weight: bold;">AREA PIN CODE</span> ${featureProperties.pin_code}</div>
            </div>`;
};

/**
 * @name totalProUserCountStyle
 * @description METHOD TO RETURN STYLES FOR % OF PRO USERS IN AN AREA
 * @param {*} featureProperties FEATURE PROPERTIES
 * @returns {Object} Style
 */
const totalProUserCountStyle = (featureProperties) => {

    const areaUserCount = featureProperties.area_users.length;
    const areaProUserCount = (featureProperties.area_male_pro_users.length + featureProperties.area_female_pro_users.length);

    return {
        color: Theme.palette.primary.main,
        fillColor: Theme.palette.primary.main,
        fillOpacity: areaProUserCount / areaUserCount
    };
};

/**
 * @name maleUserAreaStyle
 * @description METHOD TO RETURN STYLES FOR % OF MALE USERS IN AN AREA
 * @param {*} featureProperties FEATURE PROPERTIES
 * @returns {Object} Style
 */
const maleUserAreaStyle = (featureProperties) => {

    const areaUserCount = featureProperties.area_users.length;
    const areaMaleUserCount = featureProperties.area_male_users.length;

    return {
        color: Theme.palette.primary.main,
        fillColor: Theme.palette.primary.main,
        fillOpacity: areaMaleUserCount / areaUserCount
    };
};

/**
 * @name femaleUserAreaStyle
 * @description METHOD TO RETURN STYLES FOR % OF FEMALE USERS IN AN AREA
 * @param {*} featureProperties FEATURE PROPERTIES
 * @returns {Object} Style
 */
const femaleUserAreaStyle = (featureProperties) => {

    const areaUserCount = featureProperties.area_users.length;
    const areaFemaleUserCount = featureProperties.area_female_users.length;

    return {
        color: Theme.palette.primary.main,
        fillColor: Theme.palette.primary.main,
        fillOpacity: areaFemaleUserCount / areaUserCount
    };
};

/**
 * @name tabProps
 * @description METHOD TO RETURN TAB PROPS
 * @param {*} index TAB INDEX NO.
 * @returns {Object} tabProps
 */
const tabProps = (index) => {
    return {
        id: `map-tab-${index}`,
    };
};

// COMPONENTS
/**
 * @name TabPanel
 * @description TAB PANEL COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <TabPanel /> (JSX)
 */
const TabPanel = (props) => {

    // GETTING COMPONENT PROPS
    const { children, value, index, ...other } = props;

    if (index === value)
        return (
            <Box
                role="tabpanel"
                id={`map-tabpanel-${index}`}
                sx={{ width: "100%", flexGrow: "1" }}
                {...other}>
                {children}
            </Box>);
    else
        return (<></>);
};

/**
 * @name Map
 * @description MAP SCREEN COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <Map /> (JSX)
 */
const Map = (props) => {

    // SETING LOCAL VARIABLES
    const center = [12.9716, 77.5946];

    // SETTING LOCAL STATES
    const [tabValue, setTabValue] = useState(0);

    // GETTING CONTEXT VALUES
    const { aggregateData } = useAppContext();

    // METHODS
    /**
     * @name changeTab
     * @description METHOD TO CHANGE TAB VALUE
     * @param {*} event EVENT OBJECT
     * @param {*} newTabValue NEW TAB VALUE
     * @returns undefined
     */
    const changeTab = (event, newTabValue) => {
        setTabValue(newTabValue);
    };

    return (
        <>
            <SideDrawer />
            <PositionedScreen>
                <Typography variant="h4">Map</Typography>
                <Tabs variant="scrollable" scrollButtons="auto" value={tabValue} onChange={changeTab}>
                    <Tab
                        {...tabProps(1)}
                        icon={<AttachMoney />}
                        iconPosition="start"
                        label="Pro users per area (%)"
                        sx={{ "&.Mui-selected": { fontWeight: "800" } }} />
                    <Tab
                        {...tabProps(2)}
                        icon={<Boy />}
                        iconPosition="start"
                        label="Male users per area (%)"
                        sx={{ "&.Mui-selected": { fontWeight: "800" } }} />
                    <Tab
                        {...tabProps(2)}
                        icon={<Girl />}
                        iconPosition="start"
                        label="Female users per area (%)"
                        sx={{ "&.Mui-selected": { fontWeight: "800" } }} />
                </Tabs>

                {/* TAB PANEL TO SHOW % OF PRO USERS IN A GIVEN AREA */}
                <TabPanel value={tabValue} index={0}>
                    {
                        aggregateData.length > 0 ?
                            <MapContainer center={center} zoom={11} scrollWheelZoom={false} sx={{ height: "100%", width: "100%" }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <GeoJSON
                                    data={aggregateData}
                                    style={(feature) => { return totalProUserCountStyle(feature.properties); }}
                                    onEachFeature={(feature, layer) => layer.bindTooltip(tooltip(feature.properties))} />
                            </MapContainer> :
                            <Skeleton variant="rectangle" style={{ height: "100%", width: "100%" }} />
                    }
                </TabPanel>
                
                {/* TAB PANEL TO SHOW % OF MALE USERS IN A GIVEN AREA */}
                <TabPanel value={tabValue} index={1}>
                    {
                        aggregateData.length > 0 ?
                            <MapContainer center={center} zoom={11} scrollWheelZoom={false} sx={{ height: "100%", width: "100%" }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <GeoJSON
                                    data={aggregateData}
                                    style={(feature) => { return maleUserAreaStyle(feature.properties); }}
                                    onEachFeature={(feature, layer) => layer.bindTooltip(tooltip(feature.properties))} />
                            </MapContainer> :
                            <Skeleton variant="rectangle" style={{ height: "100%", width: "100%" }} />
                    }
                </TabPanel>

                {/* TAB PANEL TO SHOW % OF FEMALE USERS IN A GIVEN AREA */}
                <TabPanel value={tabValue} index={2}>
                    {
                        aggregateData.length > 0 ?
                            <MapContainer center={center} zoom={11} scrollWheelZoom={false} sx={{ height: "100%", width: "100%" }}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <GeoJSON
                                    data={aggregateData}
                                    style={(feature) => { return femaleUserAreaStyle(feature.properties); }}
                                    onEachFeature={(feature, layer) => layer.bindTooltip(tooltip(feature.properties))} />
                            </MapContainer> :
                            <Skeleton variant="rectangle" style={{ height: "100%", width: "100%" }} />
                    }
                </TabPanel>
            </PositionedScreen>
        </>
    );
};

export default Map;