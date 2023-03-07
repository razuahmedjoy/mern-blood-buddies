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
    Card,
    Divider
} from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from "react";
import signUpimage from "../../assets/signup.svg";
import { useRegisterMutation } from "../../features/auth/authApi";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FacebookRounded, Google } from "@mui/icons-material";
import SocialLogin from "../../components/SocialLogin";
import { useSelector } from "react-redux";

const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

const Signup = () => {

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [errorTxt, setErrorTxt] = useState(null);

    const {user} = useSelector((state) => state.auth)
    const navigate = useNavigate()

    const [register, response] = useRegisterMutation()

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email, password, bloodGroup)
        register({ email, password, bloodGroup, name })

    }
    const { isLoading, isError, isSuccess, error } = response;
    // console.log(response);

    useEffect(() => {
        if (isSuccess) {
            toast.success("Account created successfully");
            navigate("/login")
        }
        if (isError) {
            // console.log(error)
            setErrorTxt(error?.data?.message)
        }
        if(user){
            navigate("/profile")
        }


    }, [isLoading, isSuccess, isError, error, navigate,user])


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
                  
                    <CardContent>
                    <Typography variant="h4"  sx={{ fontWeight: "bold" }}>Create account</Typography>
                        <form onSubmit={handleSubmit}>

                            <TextField
                                required
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                value={name}
                                label="Name"
                                type="text"
                                margin="normal"
                                variant="standard" />
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

                            {isError && <Typography color="error" variant="body2" sx={{ mb: "10px" }}>{errorTxt}</Typography>}

                            <LoadingButton
                                loading={isLoading}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ my: 3 }}
                            >
                                Sign Up
                            </LoadingButton>

                            <Divider>or login with </Divider>

                            <SocialLogin/>
                            <Typography align="center" mt="1rem">
                                Already have an account? <Typography component={Link} to="/login" sx={{textDecoration:"none"}} color="primary">Login Now</Typography>

                            </Typography>
                        </form>
                    </CardContent>
                </Card>
            </Box>


        </Box>
    );
};

export default Signup;
