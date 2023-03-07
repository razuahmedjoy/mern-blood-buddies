import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Main = () => {

    return (
        <>
            <Navbar/>
            <Box sx={{mt:"2rem"}}>

            <Outlet/>
            </Box>
        </>
    );
};

export default Main;