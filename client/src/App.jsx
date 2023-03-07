import { useEffect, useMemo } from "react";
import { RouterProvider, } from "react-router-dom";
import routes from "./routes/routes";
import { useDispatch, useSelector } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from "./theme";
import { ToastContainer } from 'react-toastify';
import { setUserFromLocalStorage } from "./features/auth/authSlice";

function App() {
  const mode = useSelector((state)=>state.global.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(setUserFromLocalStorage())
    // setUserFromLocalStorage();
  },[])

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <RouterProvider router={routes}>
      </RouterProvider>
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
