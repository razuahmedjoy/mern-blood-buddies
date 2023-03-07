import {

    Box,
    Button,
    CardContent,

    TextField,
    Typography,

    Card,
    Divider
} from "@mui/material";

import { LoadingButton } from '@mui/lab';
import { useEffect, useState } from "react";
import signUpimage from "../../assets/signup.svg";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FacebookRounded, Google } from "@mui/icons-material";
import SocialLogin from "../../components/SocialLogin";
import { useLoginMutation } from "../../features/auth/authApi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorTxt, setErrorTxt] = useState(null);
    const {user} = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const [login, response] = useLoginMutation()

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        login({ email, password })


    }
    const { isLoading, isError, isSuccess, error,data } = response;

    useEffect(() => {
        setErrorTxt(null)
        // console.log(response)

        if(isError) {
            setErrorTxt(error?.data?.message)
        }
        if(isSuccess && data?.data) {
            toast.success("Login Success")
            navigate("/profile")
            // console.log(data?.data)
            dispatch(setUser(data?.data))

        }
        if(user){
            navigate("/profile")
        }

    }, [isError,isSuccess,isLoading,data,user])


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
                    <Typography variant="h4" p={2} sx={{ fontWeight: "bold" }}>Login</Typography>
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


                            {errorTxt && <Typography color="error" variant="body2" sx={{ my: "10px" }}>{errorTxt}</Typography>}

                            <LoadingButton
                                loading={isLoading}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mb: 3 }}
                            >
                                Login
                            </LoadingButton>

                            <Divider>or login with </Divider>

                            <SocialLogin/>
                            <Typography align="center" mt="1rem">
                                    Don't have an account? <Typography component={Link} to="/signup" sx={{textDecoration:"none"}} color="primary">Create Account</Typography>

                                </Typography>

                        </form>
                    </CardContent>
                </Card>
            </Box>


        </Box>
    );
};

export default Login;