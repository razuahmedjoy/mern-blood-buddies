import { Box, Container, Grid, ListItem, Typography } from '@mui/material';
import React from 'react';
import heroImage from "../../assets/hero.png"
const Hero = () => {
    return (
        <Container>
            {/* make a hero area with one side image and other side some text */}
            <Grid container alignItems="center" py={{xs:"1rem",md:"3rem"}}>
                <Grid item textAlign="center" xs={12} md={6} pt={{md:"4rem"}}p="2rem" >

                    <img src={heroImage} width="100%" alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box p={{xs:"1rem",md:"3rem"}} sx={{textAlign:{xs:"center",md:"left"}}}>
                        <Typography variant="h6" sx={{ fontWeight: "medium"}}>Welcome to</Typography>
                        <Typography variant="h3" sx={{ fontWeight: "bold" }} color="primary">Blood Buddy</Typography>
                        <Typography variant="h6" color="secondary" sx={{ fontWeight: "medium", textAlign:"justify", fontSize:"medium" }}  mt="2rem">It is said that blood is one of the most priceless gifts one can give to another. Blood is essential for a person to stay alive. Many times due to accidents or any other serious ailments, a person might require blood. And in those times, people who step up to donate their blood are real-life superheroes.</Typography>
                    </Box>
                </Grid>

            </Grid>

        </Container>
    );
};

export default Hero;