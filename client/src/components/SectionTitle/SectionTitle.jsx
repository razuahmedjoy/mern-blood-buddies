import { Box, Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <Box textAlign={"center"} py="1rem">
            <Typography variant='h4' fontWeight="bold">
                {title}
            </Typography>
            <Box textAlign="center" mx="auto" sx={{ maxWidth: "100px", py: "10px" }}>
                <hr color="secondary" />
            </Box>
        </Box>
    );
};

export default SectionTitle;