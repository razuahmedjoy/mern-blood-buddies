import {Container, Grid } from '@mui/material';
import React from 'react';
import SingleDonorCard from '../SingleDonorCard/SingleDonorCard';

const LatestDonors = () => {
    return (
        <Container>

            <Grid container alignItems="center" justifyContent="center" columnSpacing={4} rowSpacing={ 10 } mt="2rem">
                <SingleDonorCard/>
                <SingleDonorCard/>
                <SingleDonorCard/>
                <SingleDonorCard/>
                <SingleDonorCard/>
                <SingleDonorCard/>
            </Grid>

        </Container>
    );
};

export default LatestDonors;