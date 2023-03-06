import { useMemo } from "react";
import { RouterProvider, } from "react-router-dom";
import routes from "./routes/routes";
import { useSelector } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state)=>state.global.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])


  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <RouterProvider router={routes}>
      </RouterProvider>
    </ThemeProvider>
  )
}

export default App
