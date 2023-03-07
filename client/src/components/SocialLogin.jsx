import { FacebookRounded, Google } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import React from 'react';

const SocialLogin = () => {
    return (
        <>
            {/* social login buttons */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", mt: "10px" }}>
                <Button
                    variant="outlined"
                    sx={{
                        color: "#3b5998",
                        borderColor: "#3b5998",
                        padding: "5px",

                        "&:hover": {
                            backgroundColor: "#3b5998",
                            color: "#fff",
                            borderColor: "#3b5998",

                        }

                    }}
                >

                    <FacebookRounded fontSize="large" />
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        color: "#db3236",
                        borderColor: "#db3236",
                        padding: "5px",
                        "&:hover": {
                            backgroundColor: "#db3236",
                            color: "#fff",
                            borderColor: "#db3236",

                        }

                    }}
                >

                    <Google fontSize="large" />
                </Button>



            </Box>

        </>
    );
};

export default SocialLogin;