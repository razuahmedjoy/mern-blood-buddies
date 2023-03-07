import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, useTheme } from '@mui/material';
import { Box, width } from '@mui/system';
import React from 'react';

const SingleDonorCard = () => {
    const theme = useTheme();
    return (
        <Grid item textAlign="center" xs={12} sm={6} md={4} lg={3} pt={{ md: "4rem" }} >
            <Box sx={{
                borderRadius:"10px 0 10px 0", 
            borderColor:theme.palette.primary.main, 
            border:"solid .5px", 
            position:"relative", 
            pt:"3rem",
            cursor: "pointer",
            transition: "all .3s ease-in-out",
            "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 10px 0 rgba(0,0,0,.5)",   
            }
            
            }}>


            <Box component={"img"} src="https://bloodboard.chadaha.com/static/images/userplaceholder.jpg" width={"100%"} sx={{
                    position: "absolute",
                    top:"-3rem",

                 
                    left:"50%",
                    transform:"translateX(-50%)",
                    borderRadius:"50%",
                    border:"solid 4px",
                    borderColor:theme.palette.primary.main,
                    boxShadow:"0 0 10px 0 rgba(0,0,0,.5)",
                    width:"100px",
                    height:"100px",
                }}></Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
          
            </Box>

        </Grid>
    );
};

export default SingleDonorCard;