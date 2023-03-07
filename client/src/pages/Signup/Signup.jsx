import {
    Avatar,
    Box,
    Button,
    CardContent,
    CardHeader,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
    useTheme,
    Container,
    Card
} from "@mui/material";
import { useState } from "react";
import signUpimage from "../../assets/signup.svg";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, bloodGroup)
    }
    return (
        <Box
            sx={{
                display: { sm: 'block', md: 'flex' },
                height: "100vh",
                gap: "10px",
            }}
        >

            <Box
                sx={{
                    flex: 1,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 5
                }}
            >
                <Box sx={{
                    maxWidth: { xs: "200px", md: "500px" },

                }}>
                    <img width={"100%"} src={signUpimage} alt="" />

                    <Typography align="center" p={2} sx={{ opacity: .75, display: { xs: "none", md: "block" } }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, minima vitae praesentium sint blanditiis impedit sapiente eum deserunt velit quidem.</Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                }}
            >
                <Card
                    sx={{
                        maxWidth: 400,
                        width: "100%",
                        boxShadow: "none"

                    }}
                >
                    <Typography variant="h4" p={2} sx={{ fontWeight: "bold" }}>Create account</Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>

                            <TextField
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                fullWidth
                                value={email}
                                label="Email"
                                type="email"
                                margin="normal"
                                variant="standard" />
                            <TextField
                                onChange={(e) => setPassword(e.target.value)}
                                fullWidth
                                required
                                value={password}
                                label="Password"
                                type="password"
                                margin="normal"
                                variant="standard"
                            />
                            <FormControl fullWidth margin="normal" required variant="standard">
                                <InputLabel variant="standard">Blood Group</InputLabel>

                                <Select
                                   
                                    onChange={(e) => setBloodGroup(e.target.value)}
                                    value={bloodGroup}
                                    label="Bloog Group"
                                >
                                    {bloodGroups.map((bloodGroup) => (
                                        <MenuItem key={bloodGroup} value={bloodGroup}>
                                            {bloodGroup}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                sx={{ my: "10px" }}
                                control={<Checkbox color="primary" />}
                                label={
                                    <Typography variant="body2">
                                        I agree to the{" "}
                                        <Typography
                                            component="a"
                                            variant="body2"
                                            color="primary"
                                            href="#"
                                        >
                                            Terms and Conditions
                                        </Typography>
                                    </Typography>
                                }
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                            >
                                Sign Up
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Box>


        </Box>
    );
};

export default Signup;
