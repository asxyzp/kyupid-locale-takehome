// IMPORTING PACKAGES/MODULES
import React from 'react';
import SideDrawer from '../Navigation/SideDrawer';
import DashboardCard from '../Custom/DashboardCard';
import { useAppContext } from '../../Context/AppContext';
import PositionedScreen from '../Custom/PositionedScreen';
import { AttachMoney, Group, Wc } from '@mui/icons-material';
import { Box, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

/**
 * @name Analytics
 * @description ANALYTICS SCREEN COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <Analytics /> (JSX)
 */
const Analytics = (props) => {

    // GETTING AGGREGATE DATA
    const { aggregateData } = useAppContext();

    return (
        <>
            <SideDrawer />
            <PositionedScreen>
                <Typography variant="h4">Dashboard</Typography>

                {
                    aggregateData.length > 0 ?
                        <Stack direction="row" spacing={2} my="25px" sx={{ minHeight: "fit-content", width: "100%", overflowY: "none", overflowX: "scrollbar" }}>
                            <DashboardCard name="Total users" val={aggregateData[0]["properties"]["total_user_count"]} cardIcon={<Group sx={{ width: "25px", height: "25px" }} />} />
                            <DashboardCard name="Total pro users" val={aggregateData[0]["properties"]["total_pro_user_count"]} cardIcon={<AttachMoney sx={{ width: "25px", height: "25px" }} />} />
                            <DashboardCard name="M/F ratio" val={(aggregateData[0]["properties"]["total_male_user_count"]/aggregateData[0]["properties"]["total_female_user_count"]).toFixed(2)} cardIcon={<Wc sx={{ width: "25px", height: "25px" }} />} />
                        </Stack> :
                        <Stack direction="row" spacing={2} my="16px" sx={{ width: "100%", overflowY: "none", overflowX: "scrollbar" }}>
                            <Skeleton variant="rectangle" sx={{ minWidth: "275px", height: "150px", borderRadius: "4px" }} />
                            <Skeleton variant="rectangle" sx={{ minWidth: "275px", height: "150px", borderRadius: "4px" }} />
                            <Skeleton variant="rectangle" sx={{ minWidth: "275px", height: "150px", borderRadius: "4px" }} />
                        </Stack>
                }


                {
                    aggregateData.length > 0 ?
                        <TableContainer component={Box} sx={{ flexGrow: "1", width: "100%" }}>
                            <Table sx={{ width: "100%", overflow: "auto" }} size="small" stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>Area name</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", color: "primary.main" }} align="right">Area ID</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", color: "primary.main" }} align="right">Pincode</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", color: "primary.main" }} align="right">M/F Ratio</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", color: "primary.main" }} align="right">Users</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", color: "primary.main" }} align="right">Pro Users</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", color: "primary.main" }} align="right">Pro Male Users</TableCell>
                                        <TableCell sx={{ fontWeight: "bold", color: "primary.main" }} align="right">Pro Female Users</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {aggregateData.map((
                                        area) => <TableRow
                                            key={area.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row"> {area.properties.name.toUpperCase()} </TableCell>
                                            <TableCell align="right">{area.properties.area_id}</TableCell>
                                            <TableCell align="right">{area.properties.pin_code}</TableCell>
                                            <TableCell align="right">{area.properties.area_users.length}</TableCell>
                                            <TableCell align="right">{(area.properties.area_male_users.length / area.properties.area_female_users.length).toFixed(2)}</TableCell>
                                            <TableCell align="right">{area.properties.area_female_pro_users.length + area.properties.area_male_pro_users.length}</TableCell>
                                            <TableCell align="right">{area.properties.area_male_pro_users.length}</TableCell>
                                            <TableCell align="right">{area.properties.area_female_pro_users.length}</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer> :
                        <Skeleton variant="reactangle" sx={{height: "100%", width: "100%"}}/>
                }
            </PositionedScreen>
        </>
    );
};

export default Analytics;